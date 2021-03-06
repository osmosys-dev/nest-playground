import {findAllSeasons, findAllUsers, findEpisodesForSeason} from './dummy-database';

import util from 'util';
import password from 'password-hash-and-salt';
import { MongoClient, ObjectID } from "mongodb";
import { DBName, MONGODB_CONNECTION_URL } from 'src/constants';

console.log("Populating the MongoDB database with dummy data ...");


const client = new MongoClient(MONGODB_CONNECTION_URL);
// Use connect method to connect to the Server
client.connect(async (err, client) => {
  try {
    if (err) {
      console.log("Error connecting to database, please check the username and password, exiting.");
      process.exit();
    }
    console.log("Connected correctly to server");
    const db = client.db(DBName);
    // Seasons collection
    const seasons = findAllSeasons();

    for (let i = 0; i < seasons.length; i++) {
      const season:any = seasons[i];
      const newSeason: any = {...season};
      delete newSeason.id;

      console.log("Inserting season ",  newSeason);
      const result = await db.collection('seasons').insertOne(newSeason);
      const seasonId = result.insertedId;

      console.log("new season id", seasonId);

      // Episodes collection
      const episodes = findEpisodesForSeason(season.id);

      for (let j = 0; j< episodes.length; j++) {
        const episode = episodes[j];
        const newEpisode:any = {...episode};
        delete newEpisode.id;
        delete newEpisode.seasonId;
        newEpisode.season = new ObjectID(seasonId);

        console.log("Inserting episode", newEpisode);

        await db.collection("episodes").insertOne(newEpisode);
      }
    }
// Users collection
    const users = findAllUsers();

    console.log("Inserting users " + users.length);

    for (let j = 0; j< users.length; j++) {
      const user = users[j];
      const newUser:any = {...user};
      delete newUser.id;

      const hashPassword = util.promisify(password(newUser.password).hash);
      newUser.passwordHash = await hashPassword();
      delete newUser.password;

      console.log("Inserting user", newUser);

      await db.collection("users").insertOne(newUser);
    }

    console.log('Finished uploading data, creating indexes.');

    await db.collection('seasons').createIndex( { "url": 1 }, { unique: true } );

    console.log("Finished creating indexes, exiting.");

    client.close();
    process.exit();
  }
  catch (error) {
    console.log("Error caught, exiting: ", error);
    client.close();
    process.exit();
  }
});

console.log('updloading data to MongoDB...');
process.stdin.resume();

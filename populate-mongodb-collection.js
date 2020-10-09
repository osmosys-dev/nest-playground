"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var dummy_database_1 = require("./dummy-database");
var util = require('util');
var password = require('password-hash-and-salt');
console.log("Populating the MongoDB database with dummy data ...");
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
/*****************************************************************************************************
*
*
* IMPORTANT!!!
*
* MongoDB Connection URL - create your own url with the right cluster name, username, password and database name
*
* Format: mongodb+srv://username:password@clustername
*
* Example (don't use this as you don't have write access):
*
* mongodb+srv://nestjs:ZeEjdswOWHwoenQO@cluster0-dbucq.gcp.mongodb.net
*
*****************************************************************************************************/
var MONGODB_CONNECTION_URL = 'mongodb+srv://playground-admin:MiH5O5sXIxMw2MPF@cluster0.4zunp.mongodb.net/<dbname>?retryWrites=true&w=majority';
// Database Name
var dbName = 'nest-js-playground';
// Create a new MongoClient
var client = new MongoClient(MONGODB_CONNECTION_URL);
// Use connect method to connect to the Server
client.connect(function (err, client) { return __awaiter(void 0, void 0, void 0, function () {
    var db, seasons, i, season, newSeason, result, seasonId, episodes, j, episode, newEpisode, users, j, user, newUser, hashPassword, _a, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 14, , 15]);
                if (err) {
                    console.log("Error connecting to database, please check the username and password, exiting.");
                    process.exit();
                }
                console.log("Connected correctly to server");
                db = client.db(dbName);
                seasons = dummy_database_1.findAllSeasons();
                i = 0;
                _b.label = 1;
            case 1:
                if (!(i < seasons.length)) return [3 /*break*/, 7];
                season = seasons[i];
                newSeason = __assign({}, season);
                delete newSeason.id;
                console.log("Inserting season ", newSeason);
                return [4 /*yield*/, db.collection('seasons').insertOne(newSeason)];
            case 2:
                result = _b.sent();
                seasonId = result.insertedId;
                console.log("new season id", seasonId);
                episodes = dummy_database_1.findEpisodesForSeason(season.id);
                j = 0;
                _b.label = 3;
            case 3:
                if (!(j < episodes.length)) return [3 /*break*/, 6];
                episode = episodes[j];
                newEpisode = __assign({}, episode);
                delete newEpisode.id;
                delete newEpisode.seasonId;
                newEpisode.season = new ObjectId(seasonId);
                console.log("Inserting episode", newEpisode);
                return [4 /*yield*/, db.collection("episodes").insertOne(newEpisode)];
            case 4:
                _b.sent();
                _b.label = 5;
            case 5:
                j++;
                return [3 /*break*/, 3];
            case 6:
                i++;
                return [3 /*break*/, 1];
            case 7:
                users = dummy_database_1.findAllUsers();
                console.log("Inserting users " + users.length);
                j = 0;
                _b.label = 8;
            case 8:
                if (!(j < users.length)) return [3 /*break*/, 12];
                user = users[j];
                newUser = __assign({}, user);
                delete newUser.id;
                hashPassword = util.promisify(password(newUser.password).hash);
                _a = newUser;
                return [4 /*yield*/, hashPassword()];
            case 9:
                _a.passwordHash = _b.sent();
                delete newUser.password;
                console.log("Inserting user", newUser);
                return [4 /*yield*/, db.collection("users").insertOne(newUser)];
            case 10:
                _b.sent();
                _b.label = 11;
            case 11:
                j++;
                return [3 /*break*/, 8];
            case 12:
                console.log('Finished uploading data, creating indexes.');
                return [4 /*yield*/, db.collection('seasons').createIndex({ "url": 1 }, { unique: true })];
            case 13:
                _b.sent();
                console.log("Finished creating indexes, exiting.");
                client.close();
                process.exit();
                return [3 /*break*/, 15];
            case 14:
                error_1 = _b.sent();
                console.log("Error caught, exiting: ", error_1);
                client.close();
                process.exit();
                return [3 /*break*/, 15];
            case 15: return [2 /*return*/];
        }
    });
}); });
console.log('updloading data to MongoDB...');
process.stdin.resume();

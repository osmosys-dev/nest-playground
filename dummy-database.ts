
export const USERS = {
  1: {
    id: 1,
    email: 'member@amazing-series.io',
    password: 'password',
    roles: ['MEMBER']
  },
  2: {
    id: 2,
    email: 'admin@amazing-series.io',
    password: 'password',
    roles: ['ADMIN']
  }
};


export const SEASONS: any = {

  1: {
    id: 1,
    description: 'Breaking Bad',
    longDescription: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    iconUrl: 'https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,718,1000_AL_.jpg',
    category: 'ACTION',
    episodesCount: 52,
    seqNo: 1,
    url: 'breaking-bad',
    promo: false
  },
  2: {
    id: 2,
    description: 'Chernobyl',
    longDescription: "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
    iconUrl: 'https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
    category: 'ACTION',
    episodesCount: 5,
    seqNo: 2,
    url: 'chernobyl',
    promo: false
  },

  3: {
    id: 3,
    description: 'Game of Thrones',
    longDescription: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    iconUrl: 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SY1000_CR0,0,734,1000_AL_.jpg',
    category: 'ACTION',
    episodesCount: 70,
    seqNo: 3,
    url: 'game-of-thrones',
    promo: false
  },

  4: {
    id: 4,
    description: 'The Sopranos',
    longDescription: "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.",
    iconUrl: 'https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,702,1000_AL_.jpg',
    category: 'COMEDY',
    episodesCount: 90,
    seqNo: 4,
    url: 'the-sopranos',
    promo: false
  },
  5: {
    id: 5,
    description: 'Avatar: The Last Airbender',
    longDescription: "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.",
    iconUrl: 'https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_.jpg',
    category: 'COMEDY',
    episodesCount: 60,
    seqNo: 5,
    url: 'avatar-the-last-air-bender',
    promo: false
  },
  6: {
    id: 6,
    description: 'Planet Earth',
    longDescription: "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.",
    iconUrl: 'https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_.jpg',
    category: 'COMEDY',
    episodesCount: 11,
    seqNo: 6,
    url: 'planet-earth',
    promo: false
  },
 


};


export const EPISODES = {

  //Breaking bad
  1: {
    id: 1,
    description: 'Pilot',
  duration: '46:20',
    seqNo: 1,
    seasonId: 1
  },
  2: {
    id: 2,
    description: "Cat's in the bag...",
    duration: '48:07',
    seqNo: 2,
    seasonId: 1
  },
  3: {
    id: 3,
    description: "and the bag's in the river...",
    duration: '46:33',
    seqNo: 3,
    seasonId: 1
  },
  4: {
    id: 4,
    description: "Cancer man",
    duration: '49:44',
    seqNo: 4,
    seasonId: 1
  },
  5: {
    id: 5,
    description: "Gray matter",
    duration: '52:55',
    seqNo: 5,
    seasonId: 1
  },
  6: {
    id: 6,
    description: "Crazy handful of nothin'",
    duration: '53:27',
    seqNo: 6,
    seasonId: 1
  },
  7: {
    id: 7,
    description: "A no-rough-stuff-type deal",
    duration: '49:22',
    seqNo: 7,
    seasonId: 1
  },
  8: {
    id: 8,
    description: "Seven thirty-seven",
    duration: '51:26',
    seqNo: 8,
    seasonId: 1
  },
  9: {
    id: 9,
    description: "Grilled",
    duration: '52:08',
    seqNo: 9,
    seasonId: 1
  },
  10: {
    id: 10,
    description: "Bit by a dead bee",
    duration: '54:01',
    seqNo: 10,
    seasonId: 1
  },

  // Chernobyl
  11: {
    id: 11,
    description: "1:23:45",
    duration: '68:19',
    seqNo: 1,
    seasonId: 2
  },
  12: {
    id: 12,
    description: "Please remain calm",
    duration: '64:17',
    seqNo: 2,
    seasonId: 2
  },
  13: {
    id: 13,
    description: "Open wide, O Earth",
    duration: '66:05',
    seqNo: 3,
    seasonId: 2
  },
  14: {
    id: 14,
    description: "The happiness of all mankind",
    duration: '63:57',
    seqNo: 4,
    seasonId: 2
  },
  15: {
    id: 15,
    description: "Vichnaya Pamyat",
    duration: '72:00',
    seqNo: 5,
    seasonId: 2
  },

  // Game of thrones
  16: {
    id: 16,
    description: "Winter is coming",
    duration: '54:53',
    seqNo: 1,
    seasonId: 3
  },
  17: {
    id: 17,
    description: "The kingsroad",
    duration: '59:14',
    seqNo: 2,
    seasonId: 3
  },
  18: {
    id: 18,
    description: "Lord snow",
    duration: '56:08',
    seqNo: 3,
    seasonId: 3
  },
  19: {
    id: 19,
    description: "Cripples, bastards and broken things",
    duration: '58:50',
    seqNo: 4,
    seasonId: 3
  },
  20: {
    id: 20,
    description: "The wolf and the lion",
    duration: '55:46',
    seqNo: 5,
    seasonId: 3
  },
  21: {
    id: 21,
    description: "A golden crown",
    duration: '56:31',
    seqNo: 6,
    seasonId: 3
  },

  22: {
    id: 22,
    description: "You win or you die",
    duration: '57:19',
    seqNo: 7,
    seasonId: 3
  },
  23: {
    id: 23,
    description: "The pointy end",
    duration: '56:59',
    seqNo: 8,
    seasonId: 3
  },
  24: {
    id: 24,
    description: "Baelor",
    duration: '57:28',
    seqNo: 9,
    seasonId: 3
  },
  25: {
    id: 25,
    description: "Fire and blood",
    duration: '59:17',
    seqNo: 10,
    seasonId: 3
  },

  // The Sopranos
  26: {
    id: 26,
    description: "Pilot",
    duration: '59:50',
    seqNo: 1,
    seasonId: 4
  },
  27: {
    id: 27,
    description: "Long",
    duration: '54:44',
    seqNo: 2,
    seasonId: 4
  },
  28: {
    id: 28,
    description: "Denial, anger, acceptance",
    duration: '56:07',
    seqNo: 3,
    seasonId: 4
  },
  29: {
    id: 29,
    description: "Meadowlands",
    duration: '55:38',
    seqNo: 4,
    seasonId: 4
  },
  30: {
    id: 30,
    description: "College",
    duration: '55:38',
    seqNo: 5,
    seasonId: 4
  },
  31: {
    id: 31,
    description: "Pax soprano",
    duration: '55:12',
    seqNo: 6,
    seasonId: 4
  },
  32: {
    id: 32,
    description: "Down neck",
    duration: '54:07',
    seqNo: 7,
    seasonId: 4
  },
  33: {
    id: 33,
    description: "The legend of Tennessee",
    duration: '57:32',
    seqNo: 8,
    seasonId: 4
  },
  34: {
    id: 34,
    description: "Boca",
    duration: '56:28',
    seqNo: 9,
    seasonId: 4
  },
  35: {
    id: 35,
    description: "A hit is a hit",
    duration: '54:38',
    seqNo: 10,
    seasonId: 4
  },

  // Avatar: The last air bender
  36: {
    id: 36,
    description: "The boy in the iceberg",
    duration: '27:54',
    seqNo: 1,
    seasonId: 5
  },
  37: {
    id: 37,
    description: "The avatar returns",
    duration: '25:31',
    seqNo: 2,
    seasonId: 5
  },
  38: {
    id: 38,
    description: "The southern air temple",
    duration: '28:19',
    seqNo: 3,
    seasonId: 5
  },
  39: {
    id: 39,
    description: "The warriors of Kyoshi",
    duration: '27:05',
    seqNo: 4,
    seasonId: 5
  },
  40: {
    id: 40,
    description: "The king of Omashu",
    duration: '25:38',
    seqNo: 5,
    seasonId: 5
  },
  41: {
    id: 41,
    description: "Imprisoned",
    duration: '25:12',
    seqNo: 6,
    seasonId: 5
  },
  42: {
    id: 42,
    description: "The spirit world: Winter solstice",
    duration: '24:07',
    seqNo: 7,
    seasonId: 5
  },
  43: {
    id: 43,
    description: "Avatar roku: Winter solstice",
    duration: '27:32',
    seqNo: 8,
    seasonId: 5
  },
  44: {
    id: 44,
    description: "The water bending scroll",
    duration: '26:28',
    seqNo: 9,
    seasonId: 5
  },
  45: {
    id: 45,
    description: "Jet",
    duration: '24:38',
    seqNo: 10,
    seasonId: 5
  },

  // Planet Earth
  46: {
    id: 46,
    description: "From pole to p[ole",
    duration: '57:54',
    seqNo: 1,
    seasonId: 6
  },
  47: {
    id: 47,
    description: "Mountains",
    duration: '55:31',
    seqNo: 2,
    seasonId: 6
  },
  48: {
    id: 48,
    description: "Fresh water",
    duration: '58:19',
    seqNo: 3,
    seasonId: 6
  },
  49: {
    id: 49,
    description: "Caves",
    duration: '57:05',
    seqNo: 4,
    seasonId: 6
  },
  50: {
    id: 50,
    description: "Deserts",
    duration: '56:53',
    seqNo: 5,
    seasonId: 6
  },
  51: {
    id: 51,
    description: "Ice worlds",
    duration: '55:52',
    seqNo: 6,
    seasonId: 6
  },
  52: {
    id: 52,
    description: "Great plains",
    duration: '58:17',
    seqNo: 7,
    seasonId: 6
  },
  53: {
    id: 53,
    description: "Jungles",
    duration: '57:47',
    seqNo: 8,
    seasonId: 6
  },
  54: {
    id: 54,
    description: "The shallow seas",
    duration: '59:22',
    seqNo: 9,
    seasonId: 6
  },
  55: {
    id: 55,
    description: "Seasonal Forests",
    duration: '57:07',
    seqNo: 10,
    seasonId: 6
  },
  56: {
    id: 56,
    description: "Ocean deep",
    duration: '54:39',
    seqNo: 11,
    seasonId: 6
  },
};

export function findAllUsers() {
  return <any[]> Object.values(USERS);
}

export function findAllSeasons() {
  return Object.values(SEASONS);
}

export function findSeasonById(seasonId: number) {
  return SEASONS[seasonId];
}

export function findEpisodesForSeason(seasonId: number) {
  return Object.values(EPISODES).filter(episode => episode.seasonId == seasonId);
}

export function authenticate(email: string, password: string) {

  const user: any = Object.values(USERS).find(user => user.email === email);

  if (user && user.password == password) {
    return user;
  } else {
    return undefined;
  }
}

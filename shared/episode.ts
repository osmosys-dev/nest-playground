export interface Episode {
  id: number;
  description: string;
  duration: string;
  seqNo: number;
  seasonId: number;
}

export function compareEpisodes(e1: Episode, e2: Episode) {
  const compareSeasons = e1.seasonId - e2.seasonId;

  if (compareSeasons > 0) {
    return 1;
  } else if (compareSeasons < 0) {
    return -1;
  } else {
    return e1.seqNo - e2.seqNo;
  }
}

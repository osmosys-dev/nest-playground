export interface Season {
  _id: string;
  url: string;
  iconUrl: string;
  description: string;
  longDescription?: string;
  category: string;
  promo: boolean;
  seqNo: number;
  episodesCount: number;
}

export function compareSeasons(s1: Season, s2: Season) {
  const compare = s1.seqNo - s2.seqNo;

  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else return 0;
}

import { Document } from "mongoose";

export interface Season extends Document{
  _id: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  category: string;
  episodesCount: number;
  seqNo: number;
  url: string;
  promo: boolean;
}

export function compareSeasons(s1: Season, s2: Season) {
  const compare = s1.seqNo - s2.seqNo;

  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else return 0;
}



import * as mongoose from 'mongoose'

export const SeasonsSchema = new mongoose.Schema({
    description: String,
    longDescription: String,
    imageUrl: String,
    category: String,
    episodesCount: Number,
    seqNo: Number,
    url: String,
    promo: Boolean,
})
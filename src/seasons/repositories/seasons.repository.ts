import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Season } from "shared/season";

export class SeasonsRepository {
    constructor(@InjectModel('Season') private seasonModel: Model<Season> ) {
        
    }

    async  findAll() {
        return this.seasonModel.find()     
    }
}
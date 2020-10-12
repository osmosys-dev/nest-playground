import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Season } from "shared/season";

export class SeasonsRepository {
    constructor(@InjectModel('Season') private seasonModel: Model<Season> ) {
        
    }
    
    async findAll(): Promise<Season[]> {
        return this.seasonModel.find()     
    }
    
    async updateSeason(seasonId: string, updatedData: Partial<Season>): Promise<Season> {
        return this.seasonModel.findOneAndUpdate({_id: seasonId}, updatedData,{new: true, useFindAndModify: false})
    }

}
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Season } from "shared/season";
import { SeasonsRepository } from "../repositories/seasons.repository";

@Controller({path:'seasons'})
export class SeasonsController {
    constructor(private seasonDB: SeasonsRepository){}
    @Post()
    async addSeason(@Body() newData:Partial<Season>) {
        return this.seasonDB.addSeason(newData)
    }

    @Get()
    async getAllSeasons(): Promise<Season[]> {
        return this.seasonDB.findAll()
    }

    @Put(':seasonId')
    async updateSeason(
        @Param('seasonId') seasonId: string, 
        @Body() updatedData: Partial<Season>
        ): Promise<Season>{
            return this.seasonDB.updateSeason(seasonId, updatedData)
    }

    @Delete(':seasonId')
    async deleteSeason(@Param('seasonId') seasonId: string){
        return this.seasonDB.deleteSeason(seasonId)
    }

}
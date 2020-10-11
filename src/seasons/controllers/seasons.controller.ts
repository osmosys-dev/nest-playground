import { Controller, Get } from "@nestjs/common";
import { Season } from "shared/season";
import { SeasonsRepository } from "../repositories/seasons.repository";

@Controller({})
export class SeasonsController {
    constructor(private seasonDB: SeasonsRepository){}

    @Get('api/seasons')
    async getAllSeasons(): Promise<Season[]> {
        return this.seasonDB.findAll()
    }

}
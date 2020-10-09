import { Controller, Get } from "@nestjs/common";
import { findAllSeasons } from "dummy-database";
import { Season } from "shared/season";

@Controller({})
export class SeasonsController {

    @Get('api/seasons')
    async getAllSeasons(): Promise<Season[]> {
        return findAllSeasons()
    }

}
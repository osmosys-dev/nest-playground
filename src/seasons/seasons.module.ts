import { Module } from "@nestjs/common";
import { SeasonsController } from "./controllers/seasons.controller";

@Module({
    controllers:[SeasonsController]
})
export class SeasonsModule {

}
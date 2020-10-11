import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SeasonsController } from "./controllers/seasons.controller";
import { SeasonsSchema } from "./schemas/seasons.schema";

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: 'Season',
                schema: SeasonsSchema
            }
        ])
    ],
    controllers:[SeasonsController]
})
export class SeasonsModule {

}
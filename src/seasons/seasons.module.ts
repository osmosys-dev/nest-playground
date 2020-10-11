import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SeasonsController } from "./controllers/seasons.controller";
import { SeasonsRepository } from "./repositories/seasons.repository";
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
    controllers:[SeasonsController],
    providers: [SeasonsRepository]
})
export class SeasonsModule {

}
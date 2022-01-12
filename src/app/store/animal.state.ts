
import { State } from "@ngxs/store";
import { AnimalGetInterface } from "../model/AnimalGet.model";
import { AnimalAddInterface } from "../model/AnimalAdd.model";
import { Injectable } from "@angular/core";

export interface ZooStateModel {
    GetAnimal: AnimalGetInterface[],
    AddAnimal: AnimalAddInterface[]
}

@State<ZooStateModel>({
    name: "Zoo",
    defaults: {
        GetAnimal: [],
        AddAnimal: []
    }
})

@Injectable()

export class ZooState {

}
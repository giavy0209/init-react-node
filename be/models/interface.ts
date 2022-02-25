import { ObjectId } from "mongoose";

export interface IModel1 {
    field1 : string,
    field2 : number,
    field3 : boolean,
    field4 : ObjectId,
    field5 : {
        subfield1 : string,
        subfield2 : number,
        subfield3 : boolean,
        subfield4 : ObjectId,
        subfield5 : [ObjectId]
    }
}

export interface IModel2 {
    field1 : string,
    field2 : number,
    field3 : boolean,
    field4 : ObjectId,
    field5 : {
        subfield1 : string,
        subfield2 : number,
        subfield3 : boolean,
        subfield4 : ObjectId,
        subfield5 : [ObjectId]
    }
}
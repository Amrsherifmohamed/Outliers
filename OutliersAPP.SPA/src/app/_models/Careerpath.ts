import { CareerDetails } from "./CareerDetails";

export interface Careerpath{
    id:number;
    pahtname:string;
    category:string;
    description:string;
    paths:CareerDetails[];
}

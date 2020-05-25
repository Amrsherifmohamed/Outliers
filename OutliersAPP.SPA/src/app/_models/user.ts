import { Photo } from "./photo";

export interface User {
    id: number;
    userName: string;
    knownAs: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    photoURL: string;
    city: string;
    skills?: string;
    intrestedJobe?: string;
    phoneNumber?: string;
    experience?: string;
    country: string;
    interests?: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
    roleName: string;
    roles?: string[];


}

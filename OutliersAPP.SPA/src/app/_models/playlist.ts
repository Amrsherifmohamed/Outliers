import { Video } from "./video";

export interface Playlist {
  Id:number;
  Name:string;
  dateAdded:Date;
  userPhotoUrl:string;
  videoUrl:string;
  description:string;
  category:string;
  profName: string;
  profCity: string;
  profCountry: string;
  profInfo: string;
  profPhone:string;
  videos?: Video[];

}

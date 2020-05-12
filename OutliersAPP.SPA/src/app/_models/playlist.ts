import { Video } from "./video";

export interface Playlist {
  id:number;
  name:string;
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
  video?: Video[];

}

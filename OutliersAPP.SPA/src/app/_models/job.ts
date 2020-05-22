import { User } from "./user";

export interface Job {
  id: number;
  userId: number;
  user: User;
  jobTitle: string;
  experienceNeeded: string;
  salary: number;
  jobType: string;
  jobRequirements: string;
  careerLevel: string;
  vacancies: string;
  jobDescription: string;
  city: string;
  country: string;
  userPhotoUrl:string;
  companyName: string;
  jobRole: string;
  companyCity: string;
  companyCountry: string;
  companyInfo: string;
  companyPhone:string;
  created: Date;
}

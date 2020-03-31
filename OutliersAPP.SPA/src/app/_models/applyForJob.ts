import { Job } from "./job"
import { User } from "./user"

export interface ApplyForJob {
  id: number;
  jobId: number;
  userId: number;
  job: Job;
  user: User;
  msg: string;
  applyDate: Date;
  jobTitle:string;
  userName:string;
}

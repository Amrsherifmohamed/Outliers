import { Post } from "./Post";

export interface Comment{
    id:number;
    postId:number;
    userId:number;
    userPhotoUrl:string;
    UserName:string;
    userKnownAs:string;
    description:string;
    commentTime:Date;
    // postid:Post;
}

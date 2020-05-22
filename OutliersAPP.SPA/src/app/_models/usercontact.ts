
export interface UserContact

{
   id:number;
   senderId:number;
   senderKnownAs:string;
   senderPhotoUrl:string;
   suject:string;
   email:string;
   content:string;
   isRead:boolean;
   dateAdded:Date;
}
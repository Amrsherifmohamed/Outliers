export interface AdminContact

{
   id:number;
   recipientId:number;
   suject:string;
   content:string;
   isRead:boolean;
   dateAdded:Date;
}
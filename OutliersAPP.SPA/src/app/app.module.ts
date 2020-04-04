import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BsDropdownModule, TabsModule, BsDatepickerModule, PaginationModule, ButtonsModule, ModalModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxGalleryModule } from 'ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import {TimeAgoPipe} from 'time-ago-pipe';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvidor } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';

import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import { ListResolver } from './_resolvers/lists.resolver';
import { MessageResolver } from './_resolvers/message.resolver';
import { MemberMessagesComponent } from './members/member-messages/member-messages.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { HasRoleDirective } from './_directives/has-role.directive';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { PhotoManagementComponent } from './admin/photo-management/photo-management.component';
import { AdminService } from './_services/admin.service';
import { RolesModalComponent } from './admin/roles-modal/roles-modal.component';
import { MemberProfileComponent } from './members/member-profile/member-profile.component';
import { MemberHomeComponent } from './members/member-home/member-home.component';
import { MemberChatComponent } from './members/member-chat/member-chat.component';
import { MemberLoginComponent } from './members/member-login/member-login.component';
import { PostCardComponent } from './post/post-card/post-card.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostResolver } from './_resolvers/post.resolver';
import { PostMemberResolver } from './_resolvers/post-member.resolver';
import { PostFollwerResolver } from './_resolvers/postfollwer.resolver';
import { CommentCardComponent } from './post/comment-card/comment-card.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { CommentResolver } from './_resolvers/comment.resolver';
import { PostDetailResolver } from './_resolvers/post-detail.resolver';
import { MemberFollownigResolver } from './_resolvers/member-following.resolver';
import { MemberFollowingcardComponent } from './members/member-followingcard/member-followingcard.component';
import { MemberFollowinglistComponent } from './members/member-followinglist/member-followinglist.component';
import { JobEditResolver } from './_resolvers/job-edit.resolver';
import { JobService } from './_services/job.service';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { JobAddComponent } from './jobs/job-add/job-add.component';
import { CompanyAppliersComponent } from './jobs/company-appliers/company-appliers.component';
import { JobEditComponent } from './jobs/job-edit/job-edit.component';
import { CompanyDashboardComponent } from './jobs/company-dashboard/company-dashboard.component';
import { CompanyDashboardResolver } from './_resolvers/company-dashboard.resolver';
import { JobDetailResolver } from './_resolvers/job-detail.resolver';
import { JobListResolver } from './_resolvers/job-list.resolver';
import { JobAppliersResolver } from './_resolvers/job-appliers.resolver';
import { MemberChatroomComponent } from './members/member-chatroom/member-chatroom.component';
import { MemberChatroomcardComponent } from './members/member-chatroomcard/member-chatroomcard.component';
import { MemberChatdetailComponent } from './members/member-chatdetail/member-chatdetail.component';


export function tokenGetter() {
   return localStorage.getItem('token');
 }

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      ListsComponent,
      MessagesComponent,
      MemberCardComponent,
      MemberDetailComponent,
      MemberEditComponent,
      PhotoEditorComponent,
      TimeAgoPipe,
      MemberMessagesComponent,
      PaymentComponent,
      AdminPanelComponent,
      HasRoleDirective,
      UserManagementComponent,
      PhotoManagementComponent,
      RolesModalComponent,
      MemberProfileComponent,
      MemberHomeComponent,
      MemberChatComponent,
      MemberLoginComponent,
      PostCardComponent,
      PostListComponent,
      CommentCardComponent,
      PostDetailComponent,
      MemberFollowingcardComponent,
      MemberFollowinglistComponent,
      JobListComponent,
      JobDetailsComponent,
      JobAddComponent,
      CompanyAppliersComponent,
      JobEditComponent,
      CompanyDashboardComponent,
      MemberChatroomComponent,
      MemberChatroomcardComponent,
      MemberChatdetailComponent,

   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      FileUploadModule,
      NgxGalleryModule,
      PaginationModule.forRoot(),
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      ButtonsModule.forRoot(),
      ModalModule.forRoot(),

      RouterModule.forRoot(appRoutes),
      TabsModule.forRoot(),
      JwtModule.forRoot({
         config: {
           tokenGetter: tokenGetter,
           whitelistedDomains: ['localhost:5000'],
           blacklistedRoutes: ['localhost:5000/api/auth']
         }
       })

   ],
   providers: [
      AuthService,
      ErrorInterceptorProvidor,
      AlertifyService,
      AuthGuard,
      PreventUnsavedChangesGuard,
      UserService,
      MemberDetailResolver,
      MemberListResolver,
      MemberEditResolver,
      ListResolver,
      MessageResolver,
      AdminService,
      PostResolver,
      PostMemberResolver,
      PostFollwerResolver,
      CommentResolver,
      PostDetailResolver,
      MemberFollownigResolver,
      JobService,
      JobDetailResolver,
      JobListResolver,
      CompanyDashboardResolver,
      JobAppliersResolver,
      JobEditResolver,
   ],
   entryComponents:[RolesModalComponent],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard';
import { ListResolver } from './_resolvers/lists.resolver';
import { MessageResolver } from './_resolvers/message.resolver';
import { PaymentComponent } from './payment/payment.component';
import { MessagesGuard } from './_guards/messages.guard';
import { ChargeGuard } from './_guards/charge.guard';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { MemberProfileComponent } from './members/member-profile/member-profile.component';
import { MemberHomeComponent } from './members/member-home/member-home.component';
import { MemberChatComponent } from './members/member-chat/member-chat.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostResolver } from './_resolvers/post.resolver';
import { ContactsEditReadmsgResolver } from './_resolvers/Contacts-edit-readmsg.resolver';
import { PostMemberResolver } from './_resolvers/post-member.resolver';
import { PostFollwerResolver } from './_resolvers/postfollwer.resolver';
import { CommentResolver } from './_resolvers/comment.resolver';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostDetailResolver } from './_resolvers/post-detail.resolver';
import { MemberFollownigResolver } from './_resolvers/member-following.resolver';
import { JobAddComponent } from './jobs/job-add/job-add.component';
import { JobDetailResolver } from './_resolvers/job-detail.resolver';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { JobEditResolver } from './_resolvers/job-edit.resolver';
import { JobEditComponent } from './jobs/job-edit/job-edit.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { MakeUsercontactsReadComponent } from './Contacts/make-usercontacts-read/make-usercontacts-read.component';
import { JobListResolver } from './_resolvers/job-list.resolver';
import { JobAppliersResolver } from './_resolvers/job-appliers.resolver';
import { CompanyAppliersComponent } from './jobs/company-appliers/company-appliers.component';
import { CompanyDashboardComponent } from './jobs/company-dashboard/company-dashboard.component';
import { CompanyDashboardResolver } from './_resolvers/company-dashboard.resolver';
import { MemberChatdetailComponent } from './members/member-chatdetail/member-chatdetail.component';
import { RegisterComponent } from './register/register.component';
import { AddPlaylistComponent } from './playlist/add-playlist/add-playlist.component';
import { ProfDashboardComponent } from './playlist/prof-dashboard/prof-dashboard.component';
import { ProfDashboardResolver } from './_resolvers/prof-dashboard.resolver';
import { UpdatePlaylistComponent } from './playlist/update-playlist/update-playlist.component';
import { PlaylistEditResolver } from './_resolvers/playlist-edit.resolver';
import { DetailsPlaylistComponent } from './playlist/details-playlist/details-playlist.component';
import { PlaylistDetailResolver } from './_resolvers/playlist-detail.resolver';
import { AddVideoComponent } from './video/add-video/add-video.component';

import { FreshDashboardComponent } from './career-path/fresh-dashboard/fresh-dashboard.component';
import { CareerpathResolver } from './_resolvers/Career-path.resolver';
import { ListPlaylistComponent } from './playlist/list-playlist/list-playlist.component';
import { PlaylistCategoryResolver } from './_resolvers/playlist-category.resolver';
import { PlaylistListComponent } from './playlist/playlist-list/playlist-list.component';
import { PlaylistWithVideoViewComponent } from './playlist/playlist-with-video-view/playlist-with-video-view.component';
import { PlaylistvideosResolver } from './_resolvers/playlistvideos.resolver';

import { ContactUsComponent } from './Contacts/contact-us/contact-us.component';
import { UserAllcontactsComponent } from './Contacts/user-allcontacts/user-allcontacts.component';
import { ContactsListResolver } from './_resolvers/Contacts-list.resolver';
import { UserContactsUnreadComponent } from './Contacts/user-contacts-unread/user-contacts-unread.component';
import { ContactsListUnreadResolver } from './_resolvers/Contacts-list-unread.resolver';
import { UserContactsDetailsComponent } from './Contacts/user-contacts-details/user-contacts-details.component';
import { ContactsDetailResolver } from './_resolvers/Contacts-details.resolver';
import { AdminSendMsgComponent } from './Contacts/admin-send-msg/admin-send-msg.component';
import { AdminAllmessagesComponent } from './Contacts/admin-allmessages/admin-allmessages.component';
import { AdminMessagesUnreadComponent } from './Contacts/admin-messages-unread/admin-messages-unread.component';
import { AdminMessageDetailComponent } from './Contacts/admin-message-detail/admin-message-detail.component';
import { AdminContactsListResolver } from './_resolvers/AdminContacts-list.resolver';
import { AdminContactsListUnreadResolver } from './_resolvers/AdminContacts-list-unread.resolver';
import { AdminContactsDetailResolver } from './_resolvers/AdminContacts-details.resolver';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    // , canActivate: [AuthGuard],
    children: [
      {
        path: 'members', component: MemberListComponent, resolve: {
          users: MemberListResolver
        }
      },
      {
        path: 'member/edit', component: MemberEditComponent, resolve: {
          user: MemberEditResolver
        }, canDeactivate: [PreventUnsavedChangesGuard]
      },
      {
        path: 'members/profile', component: MemberProfileComponent,resolve:{
          user:MemberEditResolver,post:PostResolver
        }
      },
      {
        path: 'member/post/comment/:id', component: PostDetailComponent,resolve:{
          post:PostDetailResolver,comment:CommentResolver
        }
      },
      {
        path: 'members/chat', component: MemberChatComponent
      },
      {
        path: 'members/home', component: MemberHomeComponent,resolve:{
          post:PostFollwerResolver,posts:PostResolver,following:MemberFollownigResolver
        }
      },
      {
        path: 'members/:id', component: MemberDetailComponent, resolve: {
          user: MemberDetailResolver,post:PostMemberResolver
        }
      },
      {
        path: 'chat/:id', component: MemberChatdetailComponent, resolve: {
          user: MemberDetailResolver,follow:MemberFollownigResolver
        }
      },
      {
        path: 'lists', component: ListsComponent, resolve: {
          users: ListResolver
        }
      },
      {
        path: 'addjob', component: JobAddComponent
      },
      {
        path: 'jobs/:id', component: JobDetailsComponent, resolve: {
          job: JobDetailResolver
        }
      },
      {
        path: 'job/edit/:id', component: JobEditComponent, resolve: {
          job: JobEditResolver
        }
      },
      {
        path: 'addplaylist', component: AddPlaylistComponent
      },
      {
        path: 'addvideo', component: AddVideoComponent
      },
      {
        path: 'playlist/:id', component: DetailsPlaylistComponent, resolve: {
          playlists: PlaylistDetailResolver
        }
      },
      {
        path: 'playlist/edit/:id', component: UpdatePlaylistComponent, resolve: {
          playlists: PlaylistEditResolver
        }
      },
      {
        path: 'list_playlist/:category', component: PlaylistListComponent,resolve:{
          playlist:PlaylistCategoryResolver
        }
      },
      {
        path: 'list_playlist_video/:id', component: PlaylistWithVideoViewComponent,resolve:{
          playlist:PlaylistvideosResolver
        }
      },
      {
        path: 'profdashboard', component:ProfDashboardComponent, resolve: {
          profdashboard: ProfDashboardResolver
        }
      },
      {
        path: 'dashboard', component:CompanyDashboardComponent, resolve: {
          dashboard: CompanyDashboardResolver
        }
      },
      {
        path: 'Freshdashboard', component:FreshDashboardComponent, resolve: {
          careerpath:CareerpathResolver
        }
      },
      {
        path: 'jobs', component: JobListComponent, resolve: {
          jobs: JobListResolver
        }
      },
      {
        path: 'chatroom', component: MemberChatComponent
      },
      {
        path: 'jobappliers', component:CompanyAppliersComponent, resolve: {
          jobappliers: JobAppliersResolver
        }
      },
      
      // Contacts
      {
        path: 'contactus', component:ContactUsComponent
      },
      {
        path: 'allcontacts', component: UserAllcontactsComponent, resolve: {
          contactus: ContactsListResolver
        }
      },
      {
        path: 'contactsunread', component: UserContactsUnreadComponent, resolve: {
          contactus: ContactsListUnreadResolver
        }
      },
      {
        path: 'contact/:id', component: UserContactsDetailsComponent, resolve: {
          contactus: ContactsDetailResolver
        }
      },

         // Contact From Admin
      
         {
          path: 'msgfromadmin', component: AdminAllmessagesComponent, resolve: {
            contact: AdminContactsListResolver
          }
        },
        {
          path: 'contactunread', component: AdminMessagesUnreadComponent, resolve: {
            contactus: AdminContactsListUnreadResolver
          }
        },
        {
          path: 'contacts/:id', component: AdminMessageDetailComponent, resolve: {
            contact: AdminContactsDetailResolver
          }
        },


      { path: 'messages', component: MessagesComponent, resolve: { messages: MessageResolver } },
      { path: 'charge', component: PaymentComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'admin', component: AdminPanelComponent, data: { roles: ['Admin'] } }
    ]
  },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

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
import { JobListResolver } from './_resolvers/job-list.resolver';
import { JobAppliersResolver } from './_resolvers/job-appliers.resolver';
import { CompanyAppliersComponent } from './jobs/company-appliers/company-appliers.component';
import { CompanyDashboardComponent } from './jobs/company-dashboard/company-dashboard.component';
import { CompanyDashboardResolver } from './_resolvers/company-dashboard.resolver';
export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always'
    , canActivate: [AuthGuard],
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
        path: 'dashboard', component:CompanyDashboardComponent, resolve: {
          dashboard: CompanyDashboardResolver
        }
      },
      {
        path: 'jobs', component: JobListComponent, resolve: {
          jobs: JobListResolver
        }
      },
      {
        path: 'jobappliers', component:CompanyAppliersComponent, resolve: {
          jobappliers: JobAppliersResolver
        }
      },


      { path: 'messages', component: MessagesComponent, resolve: { messages: MessageResolver } },
      { path: 'charge', component: PaymentComponent },
      { path: 'admin', component: AdminPanelComponent, data: { roles: ['Admin', 'Moderator'] } }
    ]
  },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

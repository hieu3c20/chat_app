import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { TestErrorComponent } from './errors/test-error/test-error.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AdminGuard } from './_guards/admin.guard';
import { AuthGuard } from './_guards/auth.guard';
import { PreventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard';
import { MemberDetailedResolver } from './_resolvers/member-detailed.resolver';
import { NewFeedsComponent } from './new-feeds/new-feeds.component';
import { VideoComponent } from './video/video.component';
import { ShopCategoryComponent } from './shop-category/shop-category.component';
import { GameComponent } from './game/game.component';
import { CommunityComponent } from './community/community.component';
import { BodyPageComponent } from './body-page/body-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', 
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'members', component: BodyPageComponent},
      {path: 'members/:username', component: MemberDetailComponent, resolve: {member: MemberDetailedResolver}},
      {path: 'member/edit', component: MemberEditComponent, canDeactivate: [PreventUnsavedChangesGuard]},

      // {path: 'member/new-feeds', component: NewFeedsComponent},
      {path: 'videos', component: VideoComponent},
      {path: 'shop-category', component: ShopCategoryComponent},
      {path: 'games', component: GameComponent},
      {path: 'lists', component: ListsComponent},
      {path: 'community', component: CommunityComponent},


      {path: 'messages', component: MessagesComponent},
      {path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuard]},
    ]
  },
  {path: 'errors', component: TestErrorComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

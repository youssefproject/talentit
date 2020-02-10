import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { EditprofileComponent } from "./editprofile/editprofile.component";
import { AccountProfilePictureComponent } from "../../component/account/box/account-profile-picture/account-profile-picture.component";
import { AccountCoordonneComponent } from "../../component/account/box/account-coordonne/account-coordonne.component";
//import { MwlUtilsCalendarHeaderComponent } from './editprofile/mwl-utils-calendar-header/mwl-utils-calendar-header.component';
// import { MatButtonModule } from '@angular/material/button';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatIconModule } from '@angular/material/icon';
// import { MatTabsModule } from '@angular/material/tabs';
import { AccountCalendarComponent } from "../../component/account/box/account-calendar/account-calendar.component";
import { MwlUtilsCalendarHeaderComponent } from "../../component/account/box/account-calendar//mwl-utils-calendar-header/mwl-utils-calendar-header.component";
import { CalendarModule } from 'angular-calendar';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { SharedModule } from "../../shared/shared.module";
import { AboutComponent } from './about/about.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PhotosVideosComponent } from './photos-videos/photos-videos.component';

const routes: Routes = [
  {
    path: "",
    component: ProfileComponent,
    pathMatch: "full"
  },
  {
    path: "about",
    component: ProfileComponent,
    pathMatch: "full"
  },
  {
    path: "references",
    component: ProfileComponent,
    pathMatch: "full"
  },
  {
    path: "photos",
    component: ProfileComponent,
    pathMatch: "full"
  }, 
  {
    path: "availability",
    component: ProfileComponent,
    pathMatch: "full"
  },
  {
    path: "edit",
    component: EditprofileComponent,
    pathMatch: "full"
  },
  {
    path: "edit/general",
    component: EditprofileComponent,
    pathMatch: "full"
  },
  {
    path: "edit/contract",
    component: EditprofileComponent,
    pathMatch: "full"
  },
  {
    path: "edit/calendar",
    component: EditprofileComponent,
    pathMatch: "full"
  },
  {
    path: "edit/press",
    component: EditprofileComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    CommonModule,
    TagInputModule,
    FormsModule,
    // MatButtonModule,
    // MatDividerModule,
    // MatIconModule,
    //MatTabsModule,
    CalendarModule.forRoot(),
    SharedModule,
    DragAndDropModule,
    RouterModule.forChild(routes)],
  declarations: [
    ProfileComponent,
    EditprofileComponent,
    AccountProfilePictureComponent,
    AccountCoordonneComponent,
    AccountCalendarComponent,
    // MwlUtilsCalendarHeaderComponent,
    MwlUtilsCalendarHeaderComponent,
    AboutComponent,
    TimelineComponent,
    PhotosVideosComponent
  ], exports: [
    DragAndDropModule
  ]
})
export class ProfileModule { }

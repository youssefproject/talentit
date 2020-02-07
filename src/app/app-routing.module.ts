import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./layout/admin/admin.component";
import { AuthComponent } from "./layout/auth/auth.component";
import { AuthGuardService as AuthGuard } from "./services/auth.guard";
import { GuestGuardService as GuestGuard } from "./services/guest.guard";
import { ActivateGuardService as ActivateGuard } from "./services/activate.guard";
import { BrandGuardService as BrandGuard } from "./services/brand.guard";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
        canActivate: [ActivateGuard, AuthGuard]
      },
      {
        path: "home",
        loadChildren: "./theme/home/home.module#HomeModule",
        canActivate: [AuthGuard, ActivateGuard]
      },
      {
        path: "quick-start",
        loadChildren: "./theme/quick-start/quick-start.module#QuickStartModule",
        canActivate: [AuthGuard, ActivateGuard, BrandGuard]
      },

      {
        path: "inbox",
        loadChildren: "./theme/inbox/inbox.module#InboxModule",
        canActivate: [AuthGuard, ActivateGuard]
      },

      {
        path: "inbox/:idE",
        loadChildren: "./theme/inbox/inbox.module#InboxModule",
        canActivate: [AuthGuard, ActivateGuard]
      },

      {
        path: "quote-requests",
        loadChildren: "./theme/inbox/inbox.module#InboxModule",
        canActivate: [AuthGuard, ActivateGuard]
      },
      {
        path: "quote-requests/:idE",
        loadChildren: "./theme/inbox/inbox.module#InboxModule",
        canActivate: [AuthGuard, ActivateGuard]
      },
      {
        path: "booked-events",
        loadChildren: "./theme/inbox/inbox.module#InboxModule",
        canActivate: [AuthGuard, ActivateGuard]
      },
      {
        path: "booked-events/:idE",
        loadChildren: "./theme/inbox/inbox.module#InboxModule",
        canActivate: [AuthGuard, ActivateGuard]
      },

      {
        path: "review",
        loadChildren: "./theme/inbox/inbox.module#InboxModule",
        canActivate: [AuthGuard, ActivateGuard]
      },

      {
        path: "review/:idE",
        loadChildren: "./theme/inbox/inbox.module#InboxModule",
        canActivate: [AuthGuard, ActivateGuard]
      },
      {
        path: "archived",
        loadChildren: "./theme/inbox/inbox.module#InboxModule",
        canActivate: [AuthGuard, ActivateGuard]
      },
      {
        path: "archived/:idE",
        loadChildren: "./theme/inbox/inbox.module#InboxModule",
        canActivate: [AuthGuard, ActivateGuard]
      },
      {
        path: "event",
        loadChildren: "./theme/event/event.module#EventsModule",
        canActivate: [AuthGuard, ActivateGuard]
      },
      {
        path: "event/:idE",
        loadChildren: "./theme/event/event.module#EventsModule",
        canActivate: [AuthGuard, ActivateGuard]
      },
      {
        path: "profile",
        loadChildren: "./theme/profile/profile.module#ProfileModule",
        canActivate: [AuthGuard, ActivateGuard]
      },

      {
        path: "profile/edit",
        loadChildren: "./theme/profile/profile.module#ProfileModule",
        canActivate: [AuthGuard, ActivateGuard]
      },
      {
        path: "search",
        loadChildren: "./theme/search/search.module#SearchNewModule",
        canActivate: [AuthGuard, ActivateGuard]
      },
      {
        path: "search/:idE",
        loadChildren: "./theme/search/search.module#SearchNewModule",
        canActivate: [AuthGuard, ActivateGuard]
      }
    ]
  },
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "auth",
        loadChildren: "./theme/auth/auth.module#AuthModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

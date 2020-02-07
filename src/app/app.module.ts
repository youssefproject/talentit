import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminComponent } from "./layout/admin/admin.component";
import { AuthComponent } from "./layout/auth/auth.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { MenuItems } from "./shared/menu-items/menu-items";
import { BreadcrumbsComponent } from "./layout/admin/breadcrumbs/breadcrumbs.component";
import { NavbarComponent } from "./component/navbar/navbar.component";
import { MenuProfileComponent } from "./component/menu-profile/menu-profile.component";
import { AuthGuardService as AuthGuard } from "./services/auth.guard";
import { GuestGuardService as GuestGuard } from "./services/guest.guard";
import { BrandGuardService as BrandGuard } from "./services/brand.guard";
import { ActivateGuardService as ActivateGuard } from "./services/activate.guard";

import { AuthService } from "./services/auth.service";
import { ParseService } from "./services/parse.service";
import { ParseFunctionService } from "./services/parsefunction.service";
import { NotificationsComponent } from "./component/notifications/notifications.component";
import { MessagesComponent } from "./component/messages/messages.component";
import { NotificationService } from "./services/notification.service";
import { DaysAgoPipe } from "./pipes/day-ago";
import { QuickButtonsComponent } from "./component/quick-buttons/quick-buttons.component";
import { EventBoxComponent } from "./component/event-box/event-box.component";
import { HomeComponent } from "./theme/home/home.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    BreadcrumbsComponent,
    NavbarComponent,
    MenuProfileComponent,
    NotificationsComponent,
    MessagesComponent,
    DaysAgoPipe,
    QuickButtonsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    MenuItems,
    AuthGuard,
    GuestGuard,
    AuthService,
    ActivateGuard,
    BrandGuard,
    ParseService,
    ParseFunctionService,
    NotificationService,
    EventBoxComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

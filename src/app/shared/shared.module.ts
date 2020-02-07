import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToggleFullScreenDirective } from "./fullscreen/toggle-fullscreen.directive";
import { AccordionAnchorDirective } from "./accordion/accordionanchor.directive";
import { AccordionLinkDirective } from "./accordion/accordionlink.directive";
import { AccordionDirective } from "./accordion/accordion.directive";
import { HttpClientModule } from "@angular/common/http";
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule
} from "ngx-perfect-scrollbar";
import { TitleComponent } from "../layout/admin/title/title.component";
import { CardComponent } from "./card/card.component";
import { CardToggleDirective } from "./card/card-toggle.directive";
import { ModalBasicComponent } from "./modal-basic/modal-basic.component";
import { ModalAnimationComponent } from "./modal-animation/modal-animation.component";
import { SpinnerComponent } from "./spinner/spinner.component";
import { ClickOutsideModule } from "ng-click-outside";
import { LinkTriggerDirective } from "../layout/admin/admin.component";
import { EventBoxComponent } from "../component/event-box/event-box.component";
import { QuickEventBoxComponent } from "../component/quick-event-box/quick-event-box.component";
import { ProfileBoxComponent } from "../component/profile-box/profile-box.component";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    HttpClientModule,
    PerfectScrollbarModule,
    ClickOutsideModule
  ],
  exports: [
    NgbModule,
    ToggleFullScreenDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    LinkTriggerDirective,
    CardToggleDirective,
    HttpClientModule,
    PerfectScrollbarModule,
    TitleComponent,
    CardComponent,
    ModalBasicComponent,
    ModalAnimationComponent,
    SpinnerComponent,
    ClickOutsideModule,
    EventBoxComponent,
    QuickEventBoxComponent,
    ProfileBoxComponent
  ],
  declarations: [
    ToggleFullScreenDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    LinkTriggerDirective,
    CardToggleDirective,
    TitleComponent,
    CardComponent,
    ModalBasicComponent,
    ModalAnimationComponent,
    SpinnerComponent,
    EventBoxComponent,
    QuickEventBoxComponent,
    ProfileBoxComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SharedModule {}

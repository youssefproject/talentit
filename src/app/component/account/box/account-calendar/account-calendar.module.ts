import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCalendarComponent } from './account-calendar.component';

import {SharedModule} from '../../../../shared/shared.module';
import {CalendarModule} from 'angular-calendar';
import {MwlUtilsCalendarHeaderComponent} from './mwl-utils-calendar-header/mwl-utils-calendar-header.component';
import {TagInputModule} from 'ngx-chips';
import {FormsModule} from '@angular/forms';
import {DragAndDropModule} from 'angular-draggable-droppable';

@NgModule({
  imports: [
    CommonModule,
   
    SharedModule,
    CalendarModule.forRoot(),
    TagInputModule,
    FormsModule,
    DragAndDropModule
  ],
  exports: [
    DragAndDropModule
  ],
  declarations: [AccountCalendarComponent, MwlUtilsCalendarHeaderComponent]
})
export class AcountCalendarModule { }

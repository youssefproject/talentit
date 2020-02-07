import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mwl-utils-calendar-header',
  templateUrl: './mwl-utils-calendar-header.component.html',
  styleUrls: ['./mwl-utils-calendar-header.component.scss']
})
export class MwlUtilsCalendarHeaderComponent {

  constructor() { }
  @Input() view: string;

  @Input() viewDate: Date;

  @Input() locale = 'en';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();
  ngOnInit() {
  }

}

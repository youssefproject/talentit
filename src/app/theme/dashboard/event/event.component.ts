import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  EventEmitter,
  Output,
  ViewEncapsulation
} from "@angular/core";
import { animate, style, transition, trigger } from "@angular/animations";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "ng2-validation";
import {
  NgbCalendar,
  NgbDateParserFormatter,
  NgbDateStruct,
  NgbTabset,
  NgbTabChangeEvent
} from "@ng-bootstrap/ng-bootstrap";
import { Location } from "@angular/common";
import { ParseService } from "../../../services/parse.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastData, ToastOptions, ToastyService } from "ng2-toasty";
import { ParseFunctionService } from "../../../services/parsefunction.service";
import { EventsConnect } from "../../../models/eventsconnect.model";
import { Guest } from "../../../models/guest.model";

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one &&
  two &&
  two.year === one.year &&
  two.month === one.month &&
  two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two
    ? false
    : one.year === two.year
      ? one.month === two.month
        ? one.day === two.day ? false : one.day < two.day
        : one.month < two.month
      : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two
    ? false
    : one.year === two.year
      ? one.month === two.month
        ? one.day === two.day ? false : one.day > two.day
        : one.month > two.month
      : one.year > two.year;

const now = new Date();

export class Cmyk {
  constructor(
    public c: number,
    public m: number,
    public y: number,
    public k: number
  ) {}
}

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: [
    "./event.component.scss",
    "../../../../assets/icon/icofont/css/icofont.scss",
    "../../../../../node_modules/ng2-toasty/style-bootstrap.css",
    "../../../../../node_modules/ng2-toasty/style-default.css",
    "../../../../../node_modules/ng2-toasty/style-material.css"
  ],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger("fadeInOutTranslate", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("400ms ease-in-out", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        style({ transform: "translate(0)" }),
        animate("400ms ease-in-out", style({ opacity: 0 }))
      ])
    ])
  ]
})
export class EventComponent implements OnInit {
  public model: any;
  modelCustomDay: any;
  isLoading: boolean = true;
  displayMonths = 3;
  navigation = "select";

  hoveredDate: NgbDateStruct;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;

  disabled = true;

  @Input() testRangeDate: Date;

  toggle = false;
  public lastColor: string;
  public rgbaText: string;

  public color = "#2889e9";
  public color2 = "hsla(300,82%,52%)";
  public color3 = "#fff500";
  public color4 = "rgb(236,64,64)";
  public color5 = "rgba(45,208,45,1)";

  public color13 = "rgba(0, 255, 0, 0.5)";
  public color14 = "rgb(0, 255, 255)";
  public color15 = "#a51ad633";

  public basicColor = "#4099ff";
  public showColorCode = "#db968d";
  public showColorCodeHSAL = "hsl(149,27%,65%)";
  public showColorCodeRGBA = "rgb(221,14,190)";
  public changeMeColor = "#523698";

  public arrayColors: any = {};
  public selectedColor = "color";

  modelPopup: NgbDateStruct;
  public date: { year: number; month: number };

  modelDisabled: NgbDateStruct = {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate()
  };

  public cmyk: Cmyk = new Cmyk(0, 0, 0, 0);

  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }

  myForm: FormGroup;
  submitted: boolean;
  typeSelected: string = "couc";

  position = "bottom-right";
  title: string;
  msg: string;
  showClose = true;
  theme = "bootstrap";
  type2 = "default";
  closeOther = false;
  addToast(options) {
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        /* added */
        console.log(options);
      },
      onRemove: (toast: ToastData) => {
        /* removed */
      }
    };

    switch (options.type) {
      case "default":
        this.toastyService.default(toastOptions);
        break;
      case "info":
        this.toastyService.info(toastOptions);
        break;
      case "success":
        this.toastyService.success(toastOptions);
        break;
      case "wait":
        this.toastyService.wait(toastOptions);
        break;
      case "error":
        this.toastyService.error(toastOptions);
        break;
      case "warning":
        this.toastyService.warning(toastOptions);
        break;
    }
  }

  constructor(
    private _location: Location,
    private parseService: ParseService,
    private activatedRoute: ActivatedRoute,
    private _cdRef: ChangeDetectorRef,
    private router: Router,
    private toastyService: ToastyService,
    private parseFun: ParseFunctionService
  ) {
    const name = new FormControl("", Validators.required);
    const type = new FormControl("");
    const date = new FormControl("", Validators.required);
    const start = new FormControl("");
    const end = new FormControl("");
    const place = new FormControl("");
    const desc = new FormControl("");

    const password = new FormControl("", Validators.required);
    const gender = new FormControl("", Validators.required);
    const email = new FormControl("", [Validators.required, Validators.email]);
    const rpassword = new FormControl("", [
      Validators.required,
      CustomValidators.equalTo(password)
    ]);
    /*this.myForm = new FormGroup({
      name: name,
      email: email,
      password: password,
      rpassword: rpassword,
      gender: gender
    });*/
    this.myForm = new FormGroup({
      name: name,
      type: type,
      date: date,
      start: start,
      end: end,
      place: place,
      desc: desc
    });
  }
  onSubmit() {
    if (this.submitted) {
      return;
    }
    this.submitted = true;
    if (this.type == "add") {
      this.addEvent();
    } else if (this.type == "edit") {
      this.editEvent();
    }
  }
  editEvent() {
    console.log(this.myForm);
    let name = this.myForm.get("name").value;
    let type = this.myForm.get("type").value;
    let date: NgbDateStruct = this.myForm.get("date").value;
    let start = this.myForm.get("start").value;
    let end = this.myForm.get("end").value;
    let place = this.myForm.get("place").value;
    let desc = this.myForm.get("desc").value;
    this.parseService
      .updateEvent(
        this.idE,
        name,
        type,
        date.year +
          "-" +
          this.toInteger(date.month) +
          "-" +
          this.toInteger(date.day),
        start,
        end,
        place,
        desc
      )
      .subscribe(
        success => {
          console.log("update " + success.id);
          this.addToast({
            title: "Parfait",
            msg: "L'évènement a bien été mis à jour",
            timeout: 5000,
            theme: "default",
            position: "bottom-right",
            type: "success"
          });

          this.submitted = false;
        },
        error => {
          console.log(error);
          this.submitted = false;
        },
        () => {}
      );
  }

  toInteger(value: any): string {
    return ("0" + `${value}`).slice(-2);
  }

  addEvent() {
    console.log(this.myForm);
    let name = this.myForm.get("name").value;
    let type = this.myForm.get("type").value;
    let date: NgbDateStruct = this.myForm.get("date").value;
    let start = this.myForm.get("start").value;
    let end = this.myForm.get("end").value;
    let place = this.myForm.get("place").value;
    let desc = this.myForm.get("desc").value;

    console.log("date " + JSON.stringify(this.myForm.get("date").value));
    this.parseService
      .addEvent(
        name,
        type,
        date.year +
          "-" +
          this.toInteger(date.month) +
          "-" +
          this.toInteger(date.day),
        start,
        end,
        place,
        desc
      )
      .subscribe(
        success => {
          console.log("success " + success.id);
          this.idE = success.id;
          this.type = "edit";
          if (this.tabs == "") {
            this.tabs = "event";
          }
          this.action_event = "Editer votre évènement";
          this.addToast({
            title: "Parfait",
            msg: "L'évènement a été crée avec succès",
            timeout: 5000,
            theme: "default",
            position: "bottom-right",
            type: "success"
          });
          this._location.replaceState(
            "/dashboard/event/edit/" + this.tabs + "/" + success.id
          );
          this.submitted = false;
        },
        error => {
          console.log(error);
          this.submitted = false;
        },
        () => {}
      );
  }
  activeIdString: any;
  idE: string = "";
  type: string = "";
  tabs: string = "";

  param1: string;
  param2: string;
  param3: string;
  action_event: string = "Ajouter un nouvel évènement";

  @ViewChild("tabs") ngbTabSet;
  ngOnInit() {
    this.param1 = this.activatedRoute.snapshot.params.idE;
    this.param2 = this.activatedRoute.snapshot.params.type;
    this.param3 = this.activatedRoute.snapshot.params.tabs;
    console.log("console " + this.param1);
    this.checkParams();
    this.getGuest();
  }
  ngAfterViewInit() {}
  changeTabs() {
    if (this.ngbTabSet) {
      if (this.tabs != "") {
        if (this.tabs == "guest") {
          //this.getGuest()
        }
        this.ngbTabSet.select(this.tabs);
        this._cdRef.detectChanges();
      }
    }
  }
  onTabChange($event: NgbTabChangeEvent) {
    this.tabs = $event.nextId;
    if (this.type == "edit") {
      this._location.replaceState(
        "/dashboard/event/edit/" + this.tabs + "/" + this.idE
      );
    }
    if (this.tabs == "guest") {
      //this.getGuest()
    }
    console.log($event);
  }
  cancel() {
    //this._location.back();
    this.router.navigate(["dashboard/home"]);
  }
  checkParams() {
    switch (this.param1) {
      case "add":
        //OK
        this.isLoading = false;
        this.type = this.param1;
        break;
      case "edit":
        //OK
        this.action_event = "Editer votre évènement";
        this.type = this.param1;
        switch (this.param2) {
          case "event":
          case "guest":
          case "payment":
          case "settings":
          case "activity":
            //OK
            this.tabs = this.param2;
            if (this.param3 != undefined) {
              this.idE = this.param3;
              //alors probablement un ID
              this.downloadEvent();
            } else {
              this.type = "add";
              this.action_event = "Ajouter un nouvel évènement";
              this._location.replaceState("/dashboard/event/add");
              this.isLoading = false;
            }
            break;
          default:
            this.tabs = "";

            if (this.param2 != undefined) {
              this.idE = this.param2;
              //alors probablement un ID
              this.downloadEvent();
            } else {
              this.type = "add";
              this.action_event = "Ajouter un nouvel évènement";
              this.isLoading = false;
              this._location.replaceState("/dashboard/event/add");
            }
            break;
        }
        break;
      default:
        this.type = "add";
        this.action_event = "Ajouter un nouvel évènement";
        this.isLoading = false;
        this._location.replaceState("/dashboard/event/add");
        break;
    }
  }
  downloadEvent() {
    this.parseService.getEvent(this.idE).then(result => {
      if (result == undefined) {
        //pas la permission ou n'existe plus
        this.action_event = "Ajouter un nouvel évènement";
        this.isLoading = false;
        this.type = "add";
        this.idE = "";
        this._location.replaceState("/dashboard/event/add");
      } else {
        let date: Date = result.get("date");
        var theDate: NgbDateStruct = {
          day: date.getDate(),
          month: date.getMonth() + 1,
          year: date.getUTCFullYear()
        };
        console.log(date);

        console.log(theDate);

        this.myForm.get("name").setValue(result.get("name"));
        this.myForm.get("place").setValue(result.get("place"));
        this.myForm.get("desc").setValue(result.get("description"));
        this.myForm.get("date").setValue(theDate);
        this.myForm.get("type").setValue(result.get("type"));
        this.myForm.get("start").setValue(result.get("start"));
        this.myForm.get("end").setValue(result.get("finish"));
        this.isLoading = false;
        this.changeTabs();
      }

      /* for(let event in theResults){
        let theEvent : Event
        theEvent.countryFR = event.get('countryFR');
        this.coursesObservable.push(theEvent);
      }*/
      //this.coursesObservable = result;
    });
  }
  addGuest() {
    this.router.navigate(["dashboard/search"], {
      queryParams: { id: this.idE }
    });
  }

  @Output() updateValue: EventEmitter<any> = new EventEmitter();

  //GUESTCONNECT
  guest = [];
  isLoadingGuest: boolean = false;
  getGuest() {
    if (this.idE == "") {
      this.isLoadingGuest = true;
      return;
    }
    this.isLoadingGuest = false;
    this.guest = [];
    this.parseService.getEventsConnect(this.idE).then(result => {
      this.isLoadingGuest = true;
      console.log("result2 " + result);
      let theResults: Promise<any> = result;

      for (let i = 0; i < result.length; i++) {
        let object = result[i];
        let theNotif: EventsConnect = object; //new Guest();
        theNotif = this.parseFun.getConnect(object);
        //let theEvent: Event = new Event();

        this.guest.push(theNotif);
      }
    });
  }
  isSendInvitation: boolean = false;
  guestSelected: Guest;
  sendInvitation(theEvent: EventsConnect) {
    if (this.isSendInvitation) {
      return;
    }
    this.isSendInvitation = true;
    this.parseService.changeStatusConnectsEvent(theEvent.id, 1).subscribe(
      success => {
        this.isSendInvitation = false;
        this.addToast({
          title: "Envoyé!",
          msg: "L'invitation a bien été envoyé à " + theEvent.guest.name,
          timeout: 5000,
          theme: "default",
          position: "bottom-right",
          type: "success"
        });
        this.getGuest();
      },
      error => {
        this.isSendInvitation = false;
        console.log(error);
      },
      () => {}
    );
  }

  removeThisGuest(theEvent: EventsConnect) {
    this.parseService.removeConnectsEvent(theEvent.id).subscribe(
      success => {
        this.addToast({
          title: "Parfait",
          msg: theEvent.guest.name + " a été supprimé de votre évènement",
          timeout: 5000,
          theme: "default",
          position: "bottom-right",
          type: "success"
        });
        this.getGuest();
      },
      error => {
        console.log(error);
      },
      () => {}
    );
  }
}

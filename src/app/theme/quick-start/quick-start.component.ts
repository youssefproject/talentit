import { Component, OnInit, OnDestroy } from "@angular/core";
import { Event } from "../../models/event.model";
import { NgForm } from "@angular/forms";
import { ParseService } from "../../services/parse.service";
import { Router } from "@angular/router";
import { ToastData, ToastOptions, ToastyService } from "ng2-toasty";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/timer";

import {
  NgbCalendar,
  NgbDateParserFormatter,
  NgbDateStruct
} from "@ng-bootstrap/ng-bootstrap";
import { ColorPickerService, Rgba } from "ngx-color-picker";

import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

//import { ToastData, ToastOptions, ToastyService } from "ng2-toasty";
//import { ParseFunctionService } from "../../services/parsefunction.service";

@Component({
  selector: "app-quick-start",
  templateUrl: "./quick-start.component.html",
  styleUrls: ["./quick-start.component.scss"],
  animations: [
    trigger("quick-start-perfect-anim", [
      state("on", style({ opacity: 0 })),
      state("off", style({ opacity: 1 })),
      transition("on => off", animate("100ms ease-in")),
      transition("off => on", animate("500ms ease-out"))
    ])
  ]
})
export class QuickStartComponent implements OnInit {
  //answerSelected: any;
  listQuestions = Array<any>();
  questionSelected: string;
  position = "bottom-right";
  objSelected: any;
  typeEvent = Array<any>();
  i: number = 1;
  j: Array<number> = [];
  answers: Array<any> = [];
  Hours = Array<any>();
  submitted: boolean;
  messageError: String;
  //placeholderSelected: string;
  //show: boolean = false;
  isCreate: boolean = false;
  event: Event = new Event();
  messageSuccess: boolean = true;
  public quickStartPerfectAnim: string;
  constructor(
    private parseService: ParseService,
    private toastyService: ToastyService,
    private router: Router
  ) {
    this.quickStartPerfectAnim = "off";
  }

  ngOnInit() {
    let question1 = {
      question: "Quel nom voulez-vous donner à votre événement ?",
      answer: "",
      placeholder: "Un joli nom pour le décrire",
      type: "Nom",
      warning: "Ce champ ne peut pas être vide"
    };
    let question2 = {
      question: "Quel est le type d'évènement ?",
      answer: "",
      placeholder: "Type",
      type: "Type",
      warning: "Ce champ ne peut pas être vide"
    };

    console.log(question1.question);
    let question3 = {
      question: "Combien de participants y seront présents ?",
      answer: "",
      show: "non",
      placeholder: "Nombre de participants",
      type: "nb participants",
      warning: "Ce champ ne peut pas être vide"
    };
    let question4 = {
      question: "Dans quelle ville aura lieu l'évènement?",
      answer: "",
      placeholder: "Indiquer une ville",
      type: "Adresse",
      warning: "Ce champ ne peut pas être vide"
    };

    //this.objSelected = this.listQuestions[this.i];
    let question5 = {
      question: "Connaissez-vous l'adresse exacte de l'évènement?",
      answer: "",
      placeholder: "Si jamais vous avez déjà l'adresse",
      type: "Adresse"
    };
    let question6 = {
      question: " Quelle est la date de l'évènement ?",
      answer: "",
      placeholder: "Précisez le jour",
      type: "Date",
      warning: "Ce champ ne peut pas être vide"
    };
    let question9 = {
      question: "Êtes-vous flexible pour la date ?",
      answer: "",
      placeholder: "Date",
      type: "Radio"
    };

    let question7 = {
      question: "A quelle heure commencera l'évènement ?",
      answer: "",
      placeholder: "Heure de début",
      type: "Début",
      warning: "Ce champ ne peut pas être vide"
    };
    let question8 = {
      question: "Combien de temps va durer l'évènement ?",
      answer: new Date(),
      placeholder: "Début",
      type: "Duration",
      warning: "Ce champ ne peut pas être vide"
    };
    let question10 = {
      question: "Souhaitez-vous donner plus de détails ?",
      answer: "",
      placeholder: "Décrivez votre évènement",
      type: "Details"
    };
    this.listQuestions.push(question1);
    this.objSelected = this.listQuestions[this.i - 1];
    this.questionSelected = this.objSelected.question;
    this.listQuestions.push(question2);
    this.listQuestions.push(question3);
    this.listQuestions.push(question4);
    this.listQuestions.push(question5);
    this.listQuestions.push(question6);
    this.listQuestions.push(question7);
    this.listQuestions.push(question8);
    this.listQuestions.push(question9);
    this.listQuestions.push(question10);
    this.j.push(this.listQuestions[this.i - 1].type);

    this.answers.push(this.listQuestions[this.i - 1].answer);

    this.typeEvent = [
      { id: 1, type: "Soirée Discothèque" },
      { id: 2, type: "Soirée Restaurant" },
      { id: 3, type: "Soirée Privée" },
      { id: 4, type: "Soirée Anniversaire" }
    ];
    this.Hours = [
      { id: 1, h: "00:00" },
      { id: 2, h: "01:00" },
      { id: 3, h: "02:00" },
      { id: 4, h: "03:00" },
      { id: 5, h: "04:00" },
      { id: 6, h: "06:00" },
      { id: 7, h: "07:00" },
      { id: 8, h: "08:00" },
      { id: 9, h: "09:00" },
      { id: 10, h: "10:00" },
      { id: 11, h: "11:00" },
      { id: 12, h: "12:00" },
      { id: 13, h: "13:00" },
      { id: 14, h: "14:00" },
      { id: 15, h: "15:00" },
      { id: 16, h: "16:00" },
      { id: 17, h: "17:00" },
      { id: 18, h: "18:00" },
      { id: 19, h: "19:00" },
      { id: 20, h: "20:00" },
      { id: 21, h: "21:00" },
      { id: 22, h: "22:00" },
      { id: 23, h: "23:00" }
    ];
    //if(this.i==7)
    //this.router.navigate(['/Dashboard/home']);
    this.quickStartPerfectAnim = "on";
  }
  nextStep() {
    this.isCreate = true;
    this.quickStartPerfectAnim = "off";
    setTimeout(() => {
      //<<<---    using ()=> syntax
      this.messageSuccess = false;
      this.quickStartPerfectAnim = "on";
    }, 2000);
  }


  suivant(createeventForm: NgForm) {
    console.log(
      "this.listQuestions[this.i - 1] ",
      this.i,
      this.listQuestions[this.i - 1]
    );

    if (
      this.i == 1 ||
      this.i == 2 ||
      this.i == 3 ||
      this.i == 4 ||
      this.i == 6 ||
      this.i == 7 ||
      this.i == 8
    ) {
      if (this.listQuestions[this.i - 1].answer == "") {
        this.messageError = this.listQuestions[this.i - 1].warning;
        return;
      }
    }
    this.messageError = "";
    if (this.i == 10) {
      this.addEvent();
      //this.router.navigate(["/home"]);
    }

    this.i++;

    this.objSelected = this.listQuestions[this.i - 1];

    this.j.push(this.listQuestions[this.i - 1].type);
    this.answers.push(this.listQuestions[this.i - 1].answer);

    console.log(this.listQuestions[this.i - 1].answer);
  }

  precedent(createeventForm: NgForm) {
    this.i--;

    this.objSelected = this.listQuestions[this.i - 1];
    this.answers.pop();
    this.j.pop();

    if (this.i == 0) {
      this.i = 0;
    }
  }

  /*resetForm(createeventForm?: NgForm) {
    if (createeventForm != null) createeventForm.reset();
    this.parseService.event = {
      id: null,
      name: "",
      type: "",
      theDate: new Date(),
      start: "",
      finish: "",
      place: "",
      description: "",
      guest: ""
    };
  }
  */

  addEvent() {
    let name = this.listQuestions[0].answer;
    let type = this.listQuestions[1].answer;
    let date = this.listQuestions[5].answer;
    let start = this.listQuestions[7].answer;
    let end = this.listQuestions[8].answer;
    let place = this.listQuestions[3].answer;
    let desc = this.listQuestions[9].answer;

    this.parseService
      .addEvent(name, type, date, start, end, place, desc)
      .subscribe(
        success => {
          console.log("success");
          //this.router.navigate(["/home"]);
          this.nextStep();
          /*this.addToast({
            title: "Parfait",
            msg: "L'évènement a été crée avec succès",
            timeout: 5000,
            theme: "default",
            position: "bottom-right",
            type: "success"
          });*/
        },
        error => {
          console.log(error);
          //this.router.navigate(["/home"]);
        },
        () => {}
      );
  }

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

  /*ngOnInit() {
    this.resetForm();
  }*/
}

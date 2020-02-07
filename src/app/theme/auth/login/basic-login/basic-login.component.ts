import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ParseService } from "../../../../services/parse.service";
import { Event } from "../../../../models/event.model";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../../../../services/auth.service";
import { Router } from "@angular/router";
import { ToastData, ToastOptions, ToastyService } from "ng2-toasty";

@Component({
  selector: "app-basic-login",
  templateUrl: "./basic-login.component.html",
  styleUrls: [
    "./basic-login.component.scss",
    "../../../../../../node_modules/ng2-toasty/style-bootstrap.css",
    "../../../../../../node_modules/ng2-toasty/style-default.css",
    "../../../../../../node_modules/ng2-toasty/style-material.css"
  ],
  encapsulation: ViewEncapsulation.None
})
export class BasicLoginComponent implements OnInit {
  coursesObservable = [];

  constructor(
    private parseService: ParseService,
    private authService: AuthService,
    private router: Router,
    private toastyService: ToastyService
  ) {
    /*this.parseService.getEvents().then((result)=>{
      console.log(result);
      let theResults : Promise<any> = result;

      for (let i = 0; i < result.length; i++) {
        let object = result[i];
        let theEvent : Event = new Event()
        console.log(object.get('place'));
        //theEvent.countryFR = object.get('place');
        this.coursesObservable.push(theEvent);
      }



     /* for(let event in theResults){
        let theEvent : Event
        theEvent.countryFR = event.get('countryFR');
        this.coursesObservable.push(theEvent);
      }
      //this.coursesObservable = result;
    })*/
  }
  position = "bottom-right";
  title: string;
  msg: string;
  showClose = true;
  theme = "bootstrap";
  type = "default";
  closeOther = false;

  ngOnInit() {}

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
  logout() {
    this.authService.logout().subscribe(result => alert("logout"));
    console.log(this.parseService.currentUser);
  }
  login(credit) {
    this.authService.login(credit.email, credit.password).subscribe(
      success => {
        if (success) {
          console.log(credit.email);
          this.router.navigate(["home"]);
        }
      },
      error => {
        this.addToast({
          title: "Erreur",
          msg: error.message,
          timeout: 5000,
          theme: "bootstrap",
          position: "bottom-right",
          type: "error"
        });
        console.log(error);
      }
    );
  }
}

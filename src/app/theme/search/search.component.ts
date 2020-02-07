import * as _ from "lodash";
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  ViewEncapsulation
} from "@angular/core";
import { Guest } from "../../models/guest.model";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ParseService } from "../../services/parse.service";
import { ParseFunctionService } from "../../services/parsefunction.service";
import { isNumber } from "@ng-bootstrap/ng-bootstrap/util/util";
import { ToastData, ToastOptions, ToastyService } from "ng2-toasty";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: [
    "./search.component.scss",
    "../../../../node_modules/ng2-toasty/style-default.css"
  ],
  encapsulation: ViewEncapsulation.None
})
export class SearchNewComponent implements OnInit, AfterViewInit {
  size: number;
  isTrueSet: boolean;
  idE: string = "";
  guest: Guest;
  isLoading: boolean = true;
  myForm: FormGroup;
  dispo: string;
  messageError: String;
  prixmax: number = 8000;
  warningNumber: string = "this is not a valid number";
  region: string;
  //sex: string;
  gender: number;
  show: boolean;

  //parse
  profiles = [];
  error = "";
  isLoadingGuest: boolean = false;
  position = "bottom-right";
  firstLoading: boolean = true;

  people = []; //liste des influenceurs parsées
  filteredpeople = []; // liste des influenceurs rechérchés

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private parseService: ParseService,
    private parseFunction: ParseFunctionService,
    private actRoute: ActivatedRoute,
    private toastyService: ToastyService
  ) {
    if (this.actRoute.snapshot.params.idE != undefined) {
      this.idE = this.actRoute.snapshot.params.idE;
    }
  }

  ngAfterViewInit() {}

  toastSuccess() {
    this.addToast({
      title: "",
      msg: "Demande de devis envoyée",
      timeout: 15000,
      theme: "default",
      position: "bottom-right",
      type: "success"
    });
  }
  toastError() {
    this.addToast({
      title: "",
      msg: "Demande déjà envoyée",
      timeout: 15000,
      theme: "default",
      position: "bottom-right",
      type: "error"
    });
  }
  ngOnInit() {
    this.gender = 0;
    this.show = false;
    //let prixmax=8000;
    console.log(isNumber(this.prixmax));
    this.route.queryParams.subscribe(params => {
      // Defaults to 0 if no query param provided.
      //this.idE = params["id"];
    });
    this.myForm = this.formBuilder.group({
      gender: "0"
    });

    this.downloadGuest(this.people, this.gender);
    this.filteredpeople = this.people;
    this.size = this.people.length;
  }
  onSubmit(gender: string) {
    if (!isNumber(this.prixmax)) {
      this.messageError = this.warningNumber;
      return;
    }
    this.people = [];
    this.downloadGuest(this.people, this.gender);
    this.size = this.people.length;

    //this.filteredpeople=[];
    //this.downloadGuest(this.filteredpeople,this.gender);

    //this.filteredpeople= (gender) ? this.people.filter(influ => influ.get("isMan")) : this.people;
  }

  /*searchByName(query: string){ 
    this.show=true;   // il faut rechercher l'influenceur par son nom et prenom, donc à back4app, il faut pas oublier de changer les données en nomm/prenom et ensuite ici, il faut utiliser ou pour faire la recherche sur le nom et prenom
   // this.filteredpeople= (query) ? this.people.filter(influ => influ.get("name").toLowerCase().includes(query.toLowerCase())) : this.people;
  }*/
  searchByRegion(query: string) {
    //this.show=true;   // il faut rechercher l'influenceur par son nom et prenom, donc à back4app, il faut pas oublier de changer les données en nomm/prenom et ensuite ici, il faut utiliser ou pour faire la recherche sur le nom et prenom
    //this.searchpeople= (query) ? this.people.filter(influ => influ.get("name").toLowerCase().includes(query.toLowerCase())) : this.people;
  }
  searchBySex(gender: string) {
    //this.isTrueSet = (this.sex == "true");
    console.log("dekhlat");
    this.show = true; // il faut rechercher l'influenceur par son nom et prenom, donc à back4app, il faut pas oublier de changer les données en nomm/prenom et ensuite ici, il faut utiliser ou pour faire la recherche sur le nom et prenom
    // this.searchpeople= (query) ? this.people.filter(influ => influ.get("isMan").inludes(this.isTrueSet)) : this.people;
  }

  downloadGuest(people: any, gender: number) {
    this.isLoadingGuest = false;
    this.profiles = [];
    this.parseService.getGuest(gender).then(result => {
      console.log("getGuest ", result);
      result.forEach(element => {
        console.log(element);
        people.push(element);
      });
    });
  }
  /*searchG(){
    let gender = this.myForm.get("gender").value
    this.listProfile.downloadGuest(gender)
    console.log(this.myForm.get("gender").value);
  }*/

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
}

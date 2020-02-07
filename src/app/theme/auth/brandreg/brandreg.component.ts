import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Parse } from "parse";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { Router } from "@angular/router";
import { ParseService } from "../../../services/parse.service";
@Component({
  selector: "app-brandreg",
  templateUrl: "./brandreg.component.html",
  styleUrls: ["./brandreg.component.scss"],
  animations: [
    trigger("quick-start-perfect-anim", [
      state("on", style({ opacity: 0 })),
      state("off", style({ opacity: 1 })),
      transition("on => off", animate("100ms ease-in")),
      transition("off => on", animate("500ms ease-out"))
    ])
  ]
})
export class BrandregComponent implements OnInit {
  public quickStartPerfectAnim: string;
  i: number;
  gender: string;
  type: number;
  name: string;

  lastname: string;
  celebrityname: string = "";
  city: string;
  website: string;
  adresse: string;
  brandname: string;
  brandadresse: string;
  numsiren: string;
  tel: string;
  messageSuccess: boolean = true;
  messageError: string = "";
  isCreate: boolean = false;
  nomgerant: string;
  actualRoute = "";
  social: number;
  constructor(private _router: Router, private parseService: ParseService) {
    this.quickStartPerfectAnim = "off";
    //Parse.User.current().fetch();
    //console.log("userconnecte ", Parse.User.current());
    var tab = _router.url.split("/");
    if (tab.length == 4) this.actualRoute = tab[3];
  }

  ngOnInit() {
    this.nomgerant = "";
    this.city = "";
    this.name = "";
    this.lastname = "";
    this.adresse = "";
    this.brandname = "";
    this.brandadresse = "";
    this.numsiren = "";
    this.tel = "";

    this.i = 1;
    console.log(this.i);
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
  gender1() {
    this.gender = "homme";
    this.i++;
  }
  gender2() {
    this.gender = "femme";
    this.i++;
  }
  type1() {
    this.type = 0;
    this.i++;
  }
  type2() {
    this.type = 1;
    this.i++;
  }
  type3() {
    this.type = 2;
    this.i++;
  }
  manager() {
    this.type = 3;
    this.i++;
  }
  celebrite() {
    this.type = 4;
    this.i++;
  }
  facebook() {
    this.social = 1;
    this.i++;
  }
  twitter() {
    this.social = 2;
    this.i++;
  }
  youtube() {
    this.social = 3;
    this.i++;
  }
  snapchat() {
    this.social = 4;
    this.i++;
  }
  info(brandregForm: NgForm) {
    if (this.name == "" || this.lastname == "") {
      this.messageError = "Ces champs ne peuvent pas étre vide";
      return;
    }

    this.messageError = "";
    this.i++;
  }

  infobrand(brandregForm: NgForm) {
    console.log("wa7ed");

    if (
      (this.type == 0 || this.type == 1 || this.type == 2) &&
      (this.brandname == "" || this.brandadresse == "")
    ) {
      this.messageError = "Ces champs ne peuvent pas étre vide";
      return;
    }

    if (this.type == 3 || this.type == 4) {
      //console.log("3iw");
      this.messageError = "Ces champs ne peuvent pas étre vide";
      return;
    }

    this.messageError = "";
    this.i++;
  }
  un() {
    this.i = 1;
  }
  deux() {
    this.i = 2;
  }
  trois() {
    this.i = 3;
  }
  quatre() {
    this.i = 4;
  }
  terminer(brandregForm: NgForm) {
    if (this.tel == "") {
      this.messageError = "Ces champs ne peuvent pas étre vide";
      return;
    }
    this.messageError = "";
    this.i++;
    console.log(
      this.gender,
      this.type,
      this.name,
      this.lastname,
      this.celebrityname,
      this.city,
      this.adresse,
      this.social,
      this.tel,
      this.brandname,
      this.brandadresse,
      this.numsiren,
      this.nomgerant
    );
    //console.log(this.gender, this.type, this.name, this.lastname,this.adresse, this.brandname, this.brandadresse, this.numsiren, this.nomgerant, this.tel );
    this.addUser(
      this.gender,
      this.type,
      this.name,
      this.lastname,
      this.celebrityname,
      this.city,
      this.adresse,
      this.social,
      this.tel,
      this.brandname,
      this.brandadresse,
      this.numsiren,
      this.nomgerant
    );
  }
  addUser(
    gender: string,
    type: number,
    name: string,
    lastname: string,
    celebrityname: string,
    city: string,
    adresse: string,
    social: number,
    tel: string,
    brandname: string,
    brandadresse: string,
    numsiren: string,
    nomgerant: string
  ) {
    var isMan: boolean = true;
    gender = this.gender;
    type = this.type;
    name = this.name;
    adresse = this.adresse;
    lastname = this.lastname;
    city = this.city;
    celebrityname = this.celebrityname;
    social = this.social;
    tel = this.tel;
    brandname = this.brandname;
    brandadresse = this.brandadresse;
    numsiren = this.numsiren;
    nomgerant = this.nomgerant;

    if (gender != "homme") {
      isMan = false;
    }
    let theUser = Parse.User.current();
    theUser.set("isMan", isMan);
    theUser.set("type", type);
    theUser.set("social", social);
    theUser.set("firstname", name);
    theUser.set("lastName", lastname);
    theUser.set("city", city);
    theUser.set("celebrityname", celebrityname);
    theUser.set("tel", tel);
    theUser.set("brandname", brandname);
    theUser.set("brandadresse", brandadresse);
    theUser.set("numsiren", numsiren);
    theUser.set("profileFilled", true);

    theUser.set("nomgerant", nomgerant);

    theUser.save();
  }
  /*addUserBrand(
    gender: string,
    type: number,
    name: string,
    lastname: string,
    adresse: string,
    brandname: string,
    brandadresse: string,
    numsiren: string,
    nomgerant: string,
    tel: string
  ) {
    gender = this.gender;
    type = this.type;
    name = this.name;
    lastname = this.lastname;
    brandname = this.brandname;
    brandadresse = this.brandadresse;
    numsiren = this.numsiren;
    nomgerant = this.nomgerant;
    this.tel = tel;

    tel = this.tel;
  }*/
}

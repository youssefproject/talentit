import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ParseService } from '../../../services/parse.service';
@Component({
  selector: 'app-prestareg',
  templateUrl: './prestareg.component.html',
  styleUrls: ['./prestareg.component.scss']
})
export class PrestaregComponent implements OnInit {

  social: string;
  public quickStartPerfectAnim: string;
  i: number;
  gender: boolean;
  type: Number;
  name: string;
  email: string;
  password: string;
  lastname: string;

  namecompany: string;
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

  constructor(private parseService: ParseService) { }

  ngOnInit() {


    this.nomgerant = "";
    this.email = "";
    this.password = "";
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

    this.gender = true;
    this.i++;

  }
  gender2() {

    this.gender = false;
    this.i++;
  }
  type1() {
    //particulier
    this.type = 1;
    this.i++;

  }
  type2() {
    //entreprise
    this.type = 2;
    this.i++;

  }
  type3() {
    //booker
    this.type = 3;
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
    if (this.namecompany == "" || this.brandadresse == "") {
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
  facebook() {
    //facebook
    this.social = "facebook";
    this.i++;
  }
  twitter() {
    //twitter
    this.social = "twitter";
    this.i++;
  }
  youtube() {
    //youtube
    this.social = "youtube";
    this.i++;
  }
  snapchat() {
    //snapchat
    this.social = "snapchat";
    this.i++;
  }
  terminer() {
    if (this.tel == "") {
      this.messageError = "Ces champs ne peuvent pas étre vide";
      return;
    }

    this.messageError = "";
    this.register();
    //this.i++;
  }

  register() {
    console.log(this.email, this.password, this.gender, this.type, this.name, this.lastname, this.brandadresse, this.social, this.tel);
    this.parseService.registerPresta(this.email, this.password, this.gender, this.type, this.name, this.lastname, this.brandadresse, this.social, this.tel)
      .subscribe(result => {
        this.i++;
      });
  }

}

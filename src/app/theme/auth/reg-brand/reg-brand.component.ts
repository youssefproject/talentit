import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-reg-brand',
  templateUrl: './reg-brand.component.html',
  styleUrls: ['./reg-brand.component.scss']
})
export class RegBrandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let lastname: string='';
    let name: string='';
    let email: string='';
    let password: string='';
    let verifypassword: string='';
  }

  onSumit(regbrandForm: NgForm){}

}

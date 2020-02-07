import { Injectable } from "@angular/core";
import { ParseService } from './parse.service'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class AuthService {
  constructor(private auth$: ParseService) {}

  userIsLoggedIn() {
    if(this.auth$.currentUser == null){
      return false;
    }else{
      return true;
    }
  }
  login(email:string, password:string) {
    return this.auth$.login(email,password)
  }
  logout(): Observable<boolean> {
	    return this.auth$.logout()
   }
}

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

























// loginbtn:boolean;
//   logoutbtn:boolean;
  
//   constructor(private dataService: AuthService) {
//   dataService.getLoggedInName.subscribe(name => this.changeName(name));
//   if(this.dataService.isLoggedIn())
//   {
//   console.log("loggedin");
//   this.loginbtn=false;
//   this.logoutbtn=true
//   }
//   else{
//   this.loginbtn=true;
//   this.logoutbtn=false
//   }
  
//   }
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
  
//   private changeName(name: boolean): void {
//   this.logoutbtn = name;
//   this.loginbtn = !name;
//   }
//   logout()
//   {
//   this.dataService.deleteToken();
//   window.location.href = window.location.href;
//   }

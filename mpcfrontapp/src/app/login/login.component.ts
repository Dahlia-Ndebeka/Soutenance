import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authForm : FormGroup;
  invalidLogin : boolean = false;
  message: any;
  token: void;

  constructor(private fb: FormBuilder, private toastr : ToastrService, private authService : AuthService, private router : Router) { 
  }    

  ngOnInit(): void {
    this.authForm = this.fb.group({
      codeCompte: ['', Validators.required],
      motDePasse: ['', Validators.required]
    });
  }

  auth(authForm){
    const loginData = {
      codeCompte: this.authForm.controls.codeCompte.value,
      motDePasse: this.authForm.controls.motDePasse.value
    };
    
    this.authService.login(loginData).subscribe((data : any) =>{
      // this.message = data.message;

      if (data.token) {
        window.localStorage.setItem('token', data.token);
        this.toastr.success(data.message);

        // On vérifie le role de l'utilisateur
        if (data.token == 'admin') {
          console.log("Bienvenue M. l'administrateur");
          this.router.navigate(['admin']);
        }else if(data.token == 'formateur' || data.token == 'apprenant'){
          this.router.navigate(['user']);
        }

      }else{
        // this.invalidLogin = true;
        this.toastr.info(data.message);
        // alert(data.message)
      }

    })

  }

  get codeCompte() { return this.authForm.get('codeCompte'); }
  get motDePasse() { return this.authForm.get('motDePasse'); }


  ValidatecodeCompte(){
    return this.codeCompte.valid || this.codeCompte.untouched;
  }

  ValidatemotDePasse(){
    return this.motDePasse.valid || this.motDePasse.untouched;
  }

}





























// authForm : FormGroup;
//   // codeCompte = new FormControl();
//   // motDePasse = new FormControl();

//   constructor(private fb: FormBuilder, private toastr : ToastrService, private dataService : AuthService, private router : Router) { 

//     this.authForm = this.fb.group({
//       codeCompte: ['', Validators.required],
//       motDePasse: ['', Validators.required]
//     });
//   }    

//   ngOnInit(): void {
//   }

//   auth(authForm){
//     this.dataService.userlogin(authForm.value.codeCompte,authForm.value.motDePasse).pipe(first()).subscribe(
//     data => {
//       // const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
//       // this.router.navigate([redirect]);
//     },
//     error => {
//       alert("User name or motDePasse is incorrect")
//     });
//   }

//   get codeCompte() { return this.authForm.get('codeCompte'); }
//   get motDePasse() { return this.authForm.get('motDePasse'); }


//   ValidatecodeCompte(){
//     return this.codeCompte.valid || this.codeCompte.untouched;
//   }

//   ValidatemotDePasse(){
//     return this.motDePasse.valid || this.motDePasse.untouched;
//   }

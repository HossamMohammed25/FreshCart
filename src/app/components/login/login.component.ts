import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

 isLoading:boolean=false;
msgError:string = '';
msgSuccess:boolean= false;
private readonly _AuthService= inject(AuthService)
private readonly _FormBuilder= inject(FormBuilder)
private readonly _router= inject(Router)
loginForms:FormGroup = this._FormBuilder.group({
  email: [null, [Validators.required, Validators.email]],
  password: [null ,[Validators.required, Validators.pattern( /^\w{6,}$/)]]
})

loginSubmit():void{
  if(this.loginForms.valid){
    this.isLoading= true;
      this._AuthService.loginForm(this.loginForms.value).subscribe({
      next: (res) => {
        this.isLoading=false
        if(res.message == 'success'){
          this.msgSuccess=true;
          localStorage.setItem('userToken', res.token)

          this._AuthService.saveUserData()
          

          setTimeout(() => {
            this._router.navigate(['/home'])
          }, 1000);
        }
      },
      error: (err:HttpErrorResponse) => {
        // console.log(err.error.message);
        this.msgError = err.error.message
        this.isLoading =false
        return this.loginForms.invalid
      }
    })
  }else{
    this.loginForms.markAllAsTouched();
  }
}

}

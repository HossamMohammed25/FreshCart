import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _AuthService = inject(AuthService)
  private readonly _Router = inject(Router)
  steps:number =1;
  isLoading:boolean=false;

  verifyEmail:FormGroup = this._FormBuilder.group({
    email:[null ,[Validators.required, Validators.email]]
  })
  verifyCode:FormGroup = this._FormBuilder.group({
    resetCode:[null ,[Validators.required, Validators.pattern(/^[0-9]{6}$/)]]
  })
  resetPassword:FormGroup = this._FormBuilder.group({
    email:[null ,[Validators.required, Validators.email]],
  newPassword:[ null,[Validators.required, Validators.pattern( /^\w{6,}$/)]],

  })

  verifyEmailSubmit():void{

    let emailValue= this.verifyEmail.get('email')?.value
    this.resetPassword.get('email')?.patchValue(emailValue)
    this.isLoading = true;
    this._AuthService.setEmailVerify(this.verifyEmail.value).subscribe({
      next: (res) => {
        this.isLoading=false;
        if(res.statusMsg==='success'){
          this.steps=2;


        }
      }

    })

  }

  verifyCodeSubmit():void{
    this.isLoading = true;
    this._AuthService.setCodeVerify(this.verifyCode.value).subscribe({
      next: (res) => {
        this.isLoading=false;
        // console.log(res);
        if(res.status === 'Success'){
          this.steps=3;
        }
      }
    })

  }

  resetPasswordSubmit():void{
    this.isLoading = true;
    this._AuthService.setResetPassword(this.resetPassword.value).subscribe({
      next: (res) => {
        this.isLoading=false;
        // console.log(res);
        localStorage.setItem('userToken', res.token)
        this._AuthService.saveUserData();
        this._Router.navigate(['/home']);


      } 
    })
  }

  

}

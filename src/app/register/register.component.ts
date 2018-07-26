import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { LoginComponent } from '../login/login.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[RegisterService]
})
export class RegisterComponent  {
  firstName;
  lastName;
  emailId;
  password;
  mobileNumber;
  registerResponse = {message:""};
  constructor(private registerService:RegisterService,private router:Router)
  {

  }
  registerUser(registerForm){
    console.log("register user called");
    console.log(registerForm);
    let userDetails={
      "firstName" : registerForm.value.firstName,
      "lastName" : registerForm.value.lastName,
      "emailId" : registerForm.value.emailId,
      "password" : registerForm.value.password,
      "mobileNumber" : registerForm.value.mobileNumber,
    }
    console.log(userDetails);
    this.registerService.goAndRegisterUser(userDetails)
    .subscribe(

     (response) =>
          this.registerResponse=response.json(),
        (error) =>
        {
          alert("Registration failed due to technical challenges");
       }
  
    )  
    ;
    this.router.navigate(['login']);
    this.firstName="";
    this.lastName="";
    this.emailId="";
    this.password="";
    this.mobileNumber="";
  }

}






// import { Component, OnInit } from '@angular/core';
// import {Router} from '@angular/router';
// import { RegisterService } from '../register.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css'],
//   providers:[RegisterService]
// })
// export class RegisterComponent {

//   firstName;
//   lastName;
//   emailId;
//   password;
//   mobileNumber;
//   registerResponse = {message:""};
//   constructor(private registerService:RegisterService,private router:Router)
//   {

//   }
//   registerUser(){
//     console.log("register user called");
//     console.log(this.firstName);
//     let userDetails={
//       "firstName" : this.firstName,
//       "lastName" : this.lastName,
//       "emailId" : this.emailId,
//       "password" : this.password,
//       "mobileNumber" : this.mobileNumber,
//     }
//     console.log(userDetails);
//     this.registerService.goAndRegisterUser(userDetails)
//     .subscribe(

//      (response) =>
//           this.registerResponse=response.json(),
//         (error) =>
//         {
//           alert("Registration failed due to technical challenges");
//        }
  
//     )  
//     ;
//     this.router.navigate(['login']);
//     this.firstName="";
//     this.lastName="";
//     this.emailId="";
//     this.password="";
//     this.mobileNumber="";
//   }


// }

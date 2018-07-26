import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent  {

  emailId;
  password;
  authenticationResponse={message: ''};

  constructor(private loginService:LoginService, private router:Router){}

  authenticateUser(loginForm){
    console.log("authenticateUser");
    var userDet= {
      emailId:loginForm.value.emailId,
      password:loginForm.value.password
    }
    this.loginService.loginCheck(userDet)
    .subscribe(
      (response) => {
        this.authenticationResponse=response.json();
          console.log("res:"+this.authenticationResponse.message);
         if(this.authenticationResponse.message === "login successful")
         {
             this.router.navigate(['gallery']);      
         }
        }
    ),
    (error) =>
    {
      alert("try again!!");
    }
  }
}



// import { Component, OnInit } from '@angular/core';
// import { LoginService } from '../login.service';
// import {Router} from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
//   providers:[LoginService]
// })
// export class LoginComponent  {

//   emailId;
//   password;
//   authenticationResponse={message: ''};

//   constructor(private loginService:LoginService, private router:Router){}


//   loginDetails(loginForm){

//     console.log("inside login form");
//     console.log(loginForm.emailId);

//       console.log("authenticateUser");
     
//       var userDet= {
//         emailId:loginForm.value.emailId,
//         password:loginForm.value.password
//       }
//       this.loginService.loginCheck(userDet)
//       .subscribe(
//         (response) => {
//           this.authenticationResponse=response.json();
//             console.log("res:"+this.authenticationResponse.message);
//            if(this.authenticationResponse.message === "login successful")
//            {
//                this.router.navigate(['gallery']);      
//            }
//           }
//       ),
//       (error) =>
//       {
//         alert("try again!!");
//       }
    
    
//     loginForm.reset();
//   }
// }
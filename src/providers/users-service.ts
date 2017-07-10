import { Injectable } from '@angular/core';
import * as firebase from 'firebase'



@Injectable()
export class UsersService {

public fireAuth: any;
public userProfile: any;

  constructor() {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('users');
  }

SignUpUser(email:any, password:any){
    return this.fireAuth.createUserWithEmailAndPassword(email,password).then((newUser) => {
      // signIn the user
      this.fireAuth.signInWithEmailAndPassword(email,password).then((authUser) =>{
        //successfully login, create user profile
        this.userProfile.child(authUser.uid).set({
          email: email
        });
      });
    });
}

LoginUser(email: string,password:string): any{
    return this.fireAuth.signInWithEmailAndPassword(email, password);
}

logoutUser(){
  return this.fireAuth.signOut();
}


}

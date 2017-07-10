import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';
import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    //this.rootPage = TabsPage;

  // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCyZX69AOZtvKXkGzWbrcAaW3EtlBvoQ44",
      authDomain: "ion-fireblogger.firebaseapp.com",
      databaseURL: "https://ion-fireblogger.firebaseio.com",
      projectId: "ion-fireblogger",
      storageBucket: "ion-fireblogger.appspot.com",
      messagingSenderId: "494657863060"
  };
  firebase.initializeApp(config);

  //check the user is logged in or not
  firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.rootPage = TabsPage;
      }
      else{
        this.rootPage = Login;
      }
  });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }
}

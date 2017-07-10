import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersService } from '../../providers/users-service'
import { UserProfile } from '../user-profile/user-profile'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public _UsersService: UsersService) {
  }

  userProfile(){
    this.navCtrl.push(UserProfile);
  }

}

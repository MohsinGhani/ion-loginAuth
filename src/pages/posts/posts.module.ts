import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Posts } from './posts';

@NgModule({
  declarations: [
    Posts,
  ],
  imports: [
    IonicPageModule.forChild(Posts),
  ],
  exports: [
    Posts
  ]
})
export class PostsModule {}

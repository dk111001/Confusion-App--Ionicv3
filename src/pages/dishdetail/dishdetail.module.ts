import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DishdetailPage } from './dishdetail';
import { CommentPage } from '../comment/comment';

@NgModule({
  declarations: [
    DishdetailPage,
    CommentPage
  ],
  imports: [
    IonicPageModule.forChild(DishdetailPage),
  ],
})
export class DishdetailPageModule {}

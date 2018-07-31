import { Item } from './../../models/item/item.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {

  item: Item

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: ShoppingListService) {
  }

  ionViewWillLoad() {
    // that's how we get a param from another page
    this.item = this.navParams.get('item');
  }

  saveItem(item: Item){
    this.service.editItem(item).then(
      () => {this.navCtrl.setRoot('HomePage')}
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { ShoppingListService } from './../../services/shopping-list/shopping-list.service';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item/item.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  shoppingList$: Observable<Item[]>

  constructor(
    public navCtrl: NavController,
    private shopping: ShoppingListService
  ) {

  }

  ngOnInit() {
    this.shoppingList$ = this.shopping
    .getShoppingList() // returns a firebase DB List
    /*.snapshotChanges() //returns key => value pairs of that chamged list from DB
    .subscribe(changes => {
      return changes.map(change => {
        let retorno = {
          key: change.payload.key,
          ...change.payload.val()
        };
        console.log(retorno);
        return retorno;
      });
    });*/
    .valueChanges();
    console.log(this.shoppingList$);
  }

}

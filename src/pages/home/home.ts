import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { map } from 'rxjs/operators';

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
    // if we just want to show the data, .valueChanges() is all we need
    .snapshotChanges() // all of this to retrieve data and metadata (which mantains database reference to updates)
    .pipe(
      map(items => {            // <== new way of chaining
        return items.map(a => {
          const data = a.payload.val();
          const key = a.payload.key;
          return {key, ...data};           // or {key, ...data} in case data is Obj
        });
    }));
    //console.log(this.shoppingList$);
  }

}

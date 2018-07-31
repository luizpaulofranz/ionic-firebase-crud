import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Item } from './../../models/item/item.model';

@Injectable()
export class ShoppingListService {

  // which part of firebase we will access
  private shoppingListRef;

  constructor(private db: AngularFireDatabase) {
    // <Item> added to cast
    this.shoppingListRef = this.db.list<Item>('shopping-list');
  }

  // returns the list of shoping items
  getShoppingList() {
    return this.shoppingListRef;
  }

  addItem(item: Item){
    return this.shoppingListRef.push(item);
  }

  editItem(item: Item){
    return this.shoppingListRef.update(item.key, item);
  }

  removeItem(item: Item){
    return this.shoppingListRef.remove(item.key);
  }

}

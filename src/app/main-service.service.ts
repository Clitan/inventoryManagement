import { Injectable } from '@angular/core';
import { purchase } from './Interface/purchase';
import { sale } from './Interface/sale';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  loginUserName:string;
  purchaseData: purchase[] = [{
    id: 1,
    suplier: 'clitan',
    itemName: 'food',
    quantity: 1,
    billDate: "20-7-2019"
  },
  {
    id: 2,
    suplier: 'clitan',
    itemName: 'cold',
    quantity: 1,
    billDate: "20-7-2019"
  }
]

salesData: sale[] = [{
  id: 1,
  customer: 'clitan',
  itemName: 'food',
  quantity: 1,
  billDate: "20-7-2019"
},{
  id: 2,
  customer: 'clitan',
  itemName: 'food',
  quantity: 1,
  billDate: "20-7-2019"
},]
  constructor() { }
}

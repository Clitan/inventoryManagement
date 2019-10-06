import { Injectable } from '@angular/core';
import { purchase } from './Interface/purchase';
import { sale } from './Interface/sale';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

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
  constructor(private route:Router) {
   }

   showDialogBox(Message :string , type:any){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    })
    
    Toast.fire({
      type: type,
      title: Message
    })
   }

}

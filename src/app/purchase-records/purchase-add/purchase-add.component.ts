import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainServiceService } from 'src/app/main-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-add',
  templateUrl: './purchase-add.component.html',
  styleUrls: ['./purchase-add.component.scss']
})
export class PurchaseAddComponent implements OnInit {

  item: FormControl = new FormControl("",
    Validators.required);
  supplier: FormControl = new FormControl("",
    Validators.required);
  billdate: FormControl = new FormControl("",
    Validators.required);
  quantity: FormControl = new FormControl("",
    Validators.required);

  newPurchase: FormGroup = new FormGroup({
    suplier: this.supplier,
    itemName: this.item,
    quantity: this.quantity,
    billDate: this.billdate
  })
  constructor(private service: MainServiceService, private route: Router) { }

  ngOnInit() {
  }

  addNewPurchase() {
    this.service.purchaseData.push(this.newPurchase.value);
    this.back();
  }

  back() {
    this.route.navigate(['record/purchase'])
  }
}

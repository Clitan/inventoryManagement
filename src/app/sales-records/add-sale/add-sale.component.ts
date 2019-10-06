import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/main-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.scss']
})
export class AddSaleComponent implements OnInit {

  item: FormControl = new FormControl("",
    Validators.required);
  customer: FormControl = new FormControl("",
    Validators.required);
  billdate: FormControl = new FormControl("",
    Validators.required);
  quantity: FormControl = new FormControl("",
    Validators.required);

  newSale: FormGroup = new FormGroup({
    customer: this.customer,
    itemName: this.item,
    quantity: this.quantity,
    billDate: this.billdate
  })
  constructor(private service: MainServiceService, private route: Router) { }

  ngOnInit() {
  }

  addNewSale() {
    this.newSale.patchValue({

    })
    this.service.salesData.push(this.newSale.value);
    this.back();
  }

  back() {
    this.route.navigate(['record/sales'])
  }
}

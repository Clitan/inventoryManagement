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
  Id: FormControl = new FormControl('' + this.service.salesData.length+1);
  item: FormControl = new FormControl("",
    Validators.required);
  customer: FormControl = new FormControl("",
    Validators.required);
  billdate: FormControl = new FormControl("",
    Validators.required);
  quantity: FormControl = new FormControl("", [
    Validators.required,
    Validators.pattern('[0-9]*')]);

  newSale: FormGroup = new FormGroup({
    id: this.Id,
    customer: this.customer,
    itemName: this.item,
    quantity: this.quantity,
    billDate: this.billdate
  })
  constructor(private service: MainServiceService, private route: Router) { }

  ngOnInit() {
  }

  addNewSale() {
    this.service.salesData.push(this.newSale.value);
    this.back();
    console.log(this.newSale.value)
  }

  back() {
    this.route.navigate(['record/sales'])
  }
}

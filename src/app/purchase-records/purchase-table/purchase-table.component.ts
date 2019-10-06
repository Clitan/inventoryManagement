import { Component, OnInit, ViewChild } from '@angular/core';
import { MainServiceService } from 'src/app/main-service.service';
import { purchase } from 'src/app/Interface/purchase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-table',
  templateUrl: './purchase-table.component.html',
  styleUrls: ['./purchase-table.component.scss']
})
export class PurchaseTableComponent implements OnInit {
  purchase_data:purchase[];
  constructor(private service : MainServiceService,private route:Router) {
    this.purchase_data=service.purchaseData;
  }

  ngOnInit() {
  
  }
  addNew(){
this.route.navigate(['record/purchase/add'])
  }
}


import {  OnInit, Component } from '@angular/core';
import { MainServiceService } from 'src/app/main-service.service';
import { sale } from 'src/app/Interface/sale';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-table',
  templateUrl: './sales-table.component.html',
  styleUrls: ['./sales-table.component.scss']
})
export class SalesTableComponent implements OnInit {
sales_data:sale[];
  constructor(private service:MainServiceService,private route:Router) { 
    this.sales_data = service.salesData;
  }

  ngOnInit() {
  }

  newSale(){
    this.route.navigate(['record/sales/add'])
  }

}

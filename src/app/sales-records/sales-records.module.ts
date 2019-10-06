import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRecordsRoutingModule } from './sales-records-routing.module';
import { AddSaleComponent } from './add-sale/add-sale.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SalesTableComponent } from './sales-table/sales-table.component';


@NgModule({
  declarations: [AddSaleComponent,SalesTableComponent],
  imports: [
    CommonModule,
    SalesRecordsRoutingModule,
    ReactiveFormsModule
  ]
})
export class SalesRecordsModule { }

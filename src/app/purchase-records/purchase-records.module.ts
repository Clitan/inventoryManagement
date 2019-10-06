import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRecordsRoutingModule } from './purchase-records-routing.module';
import { PurchaseTableComponent } from './purchase-table/purchase-table.component';
import {MatTableModule} from '@angular/material/table';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SalesTableComponent } from '../sales-records/sales-table/sales-table.component';
import { PurchaseAddComponent } from './purchase-add/purchase-add.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PurchaseTableComponent,PurchaseAddComponent],
  imports: [
    CommonModule,
    PurchaseRecordsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class PurchaseRecordsModule { }

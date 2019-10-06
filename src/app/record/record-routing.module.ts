import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PurchaseRecordsModule } from '../purchase-records/purchase-records.module';
import { SalesTableComponent } from '../sales-records/sales-table/sales-table.component';
import { PurchaseAddComponent } from '../purchase-records/purchase-add/purchase-add.component';
import { PurchaseTableComponent } from '../purchase-records/purchase-table/purchase-table.component';
import { AddSaleComponent } from '../sales-records/add-sale/add-sale.component';




const routes: Routes = [
  {
    path: "record",
    component: LayoutComponent,
    children: [
      {
        path: 'purchase',
        component: PurchaseTableComponent,
      },
      {
        path: 'sales',
        component: SalesTableComponent,

      },
      {
        path: 'purchase/add',
        component: PurchaseAddComponent,

      },
      {
        path: 'sales/add',
        component: AddSaleComponent,

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), PurchaseRecordsModule],
  exports: [RouterModule]
})
export class RecordRoutingModule { }

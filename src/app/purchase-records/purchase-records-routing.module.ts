import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseTableComponent } from './purchase-table/purchase-table.component';
import { SalesTableComponent } from '../sales-records/sales-table/sales-table.component';


const routes: Routes = [
  {
    path:'purchase',
    component:PurchaseTableComponent
  },
  {
    path:'sales',
    component:SalesTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRecordsRoutingModule { }

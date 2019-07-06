import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';
import { ListOrderComponent } from './list-order/list-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { SelectCustomerComponent } from './select-customer/select-customer.component';

const routes: Routes = [
  { path: 'orders', component: ListOrderComponent },
  { path: 'orders/new', component: EditOrderComponent },
  { path: 'select-customer', component: SelectCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { OrderService, Customer } from '../order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-select-customer',
  templateUrl: './select-customer.component.html',
  styleUrls: ['./select-customer.component.scss']
})
export class SelectCustomerComponent implements OnInit {
  customers$: Observable<Customer[]>;

  constructor(private readonly orderService: OrderService) { }

  ngOnInit() {
    this.customers$ = this.orderService.getAllCustomers();
  }

}

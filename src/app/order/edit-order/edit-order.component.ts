import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Order } from '../order.model';
import { OrderService, Company, OperationType, Customer } from '../order.service';
import { Observable, from, of } from 'rxjs';
import { startWith, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {
  cabecalhoForm: FormGroup;
  itemForm: FormGroup;
  companies$: Observable<Company[]>;
  operationTypes$: Observable<OperationType[]>;
  customers: Customer[] = [];
  filteredOptions$: Observable<Customer[]>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly orderService: OrderService,
  ) { }

  ngOnInit() {
    this.cabecalhoForm = this.fb.group({
      company: [''],
      operationType: [''],
      customer: [''],
    });
    this.itemForm = this.fb.group({
      product: [''],
      quantity: [''],
      price: [''],
    });

    this.companies$ = this.orderService.getAllCompanies();
    this.operationTypes$ = this.orderService.getAllOperationsType();
    this.orderService.getAllCustomers().subscribe(
      (customers: Customer[]) => this.customers = customers
    );

    this.filteredOptions$ = this.cabecalhoForm.get('customer').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): Customer[] {
    const filterValue = value.toLowerCase();
    return this.customers.filter(customer => customer.name.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    const newOrder: Order = {
      cabecalho: {
        company: this.cabecalhoForm.get('company').value,
        operationType: this.cabecalhoForm.get('operationType').value,
        customer: this.cabecalhoForm.get('customer').value,
      },
      items: [{
        product: this.itemForm.get('product').value,
        quantity: this.itemForm.get('quantity').value,
        price: this.itemForm.get('price').value,
      }],
    };
    this.orderService.addOrder(newOrder);
    this.cabecalhoForm.reset();
    this.itemForm.reset();
  }
}

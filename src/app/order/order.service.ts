import { Injectable } from '@angular/core';
import { Order, Cabecalho, Item } from './order.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Company {
  name: string;
}

export interface OperationType {
  description: string;
}

export interface Customer {
  name: string;
  cnpj: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private readonly db: AngularFirestore,
  ) { }

  addOrder(order: Order) {
    const { cabecalho, items } = order;
    this.db.collection<Cabecalho>('order').add(cabecalho).then(
      value => {
        items.forEach(item => {
          this.db.doc<Cabecalho>(`order/${value.id}`).collection<Item>('item').add(item);
        });
      }
    );
  }

  getAllCompanies(): Observable<Company[]> {
    return this.db.collection<Company>('company').valueChanges();
  }

  getAllOperationsType(): Observable<OperationType[]> {
    return this.db.collection<OperationType>('operationType').valueChanges();
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.db.collection<Customer>('customer').valueChanges();
  }
}

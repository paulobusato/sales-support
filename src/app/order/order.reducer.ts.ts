import { createReducer, on, Action } from '@ngrx/store';
import { addOrder, addCompanies } from './order.actions.ts';
import { Order } from './order.model';
import { Company, OperationType, Customer } from './order.service';

export interface State {
  orders: Order[];
  companies: Company[];
  operationsType: OperationType[];
  customers: Customer[];
}

export const initialState: State = {
  orders: [],
  companies: [],
  operationsType: [],
  customers: [],
};

const orderReducer = createReducer(
  initialState,
  on(addOrder, (state, action: Order) => ({ ...state, orders: [
    ...state.orders,
    { cabecalho: action.cabecalho, items: action.items }
  ]
  })),
  on(addCompanies, (state, action) => ({ ...state, companies: [
    ...action.companies
  ] })),
 );

export function reducer(state: State | undefined, action: Action) {
  return orderReducer(state, action);
}

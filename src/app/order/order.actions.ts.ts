import { createAction, props } from '@ngrx/store';
import { Order } from './order.model';
import { Company } from './order.service';

export const addOrder = createAction(
  '[Order Component] Add a new order',
  props<Order>(),
);

export const addCompanies = createAction(
  '[Order Component] Add empresas',
  props<{ companies: Company[]}>(),
);

export interface Cabecalho {
  company: string;
  operationType: string;
  customer: string;
}

export interface Item {
  product: string;
  quantity: number;
  price: number;
}

export interface Order {
  cabecalho: Cabecalho;
  items: Item[];
}

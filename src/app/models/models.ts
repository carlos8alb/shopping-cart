export interface Product {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  images:      string[];
  creationAt:  Date;
  updatedAt:   Date;
  category:    Category;
}

export interface Category {
  id:         number;
  name:       CategoryName;
  image:      string;
  creationAt: Date;
  updatedAt:  Date;
}

export enum CategoryName {
  Electronics = "Electronics",
  Nuevo = "nuevo",
  Others = "Others",
  Shoes = "Shoes",
  Text = "text",
  UnNuevoNombreee = "un nuevo nombreee",
}

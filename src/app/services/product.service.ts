import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URL = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=50';
  private http = inject(HttpClient);

  constructor() { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL);
  }

}

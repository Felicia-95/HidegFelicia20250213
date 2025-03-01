import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service'; 

interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  stock: number;
}


@Component({
  selector: 'app-products',

  templateUrl: './products.component.html',
  standalone:'false',
  styleUrls: ['./products.component.css'],
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';


  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.apiUrl);
  }
}


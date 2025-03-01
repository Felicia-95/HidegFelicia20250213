import { Injectable } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';




interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  stock: number;
}



interface ProductResponse {
  products: Product[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.apiUrl);
  }
}






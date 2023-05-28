import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { IProduct } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiLink = "http://localhost:3000/products/"
  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<any> {
    return this.http.get(this.apiLink)
  }
  getProduct(id: number | undefined): Observable<any> {
    return this.http.get(this.apiLink + id)
  }
  removeProduct(id: number | undefined): Observable<any> {
    return this.http.delete(this.apiLink + id)
  }
  createProduct(data: IProduct): Observable<any> {
    return this.http.post(this.apiLink, data)
  }
  updateProduct(data: IProduct): Observable<any> {
    return this.http.put(this.apiLink + data.id, data)
  }
}

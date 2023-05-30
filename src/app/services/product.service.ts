import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IProduct } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURL = "http://localhost:3000/products/"
  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<any> {
    return this.http.get(this.baseURL)
  }
  getSingleProduct(id: number | undefined): Observable<any> {
    return this.http.get(this.baseURL + id)
  }
  removeProduct(id: number | undefined): Observable<any> {
    return this.http.delete(this.baseURL + id)
  }
  createProduct(data: IProduct): Observable<any> {
    return this.http.post(this.baseURL, data)
  }
  updateProduct(data: IProduct): Observable<any> {
    return this.http.put(this.baseURL + data.id, data)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IProduct } from './product';
import { IProductDto } from './products.dto';
import { getParamsFromObject } from '../params/get-params-from-object';

@Injectable({
  providedIn: 'root'
})

export class ProductsApiService {

  constructor(private readonly http: HttpClient) { }

  getProducts$(subcategoryId?: string | null): Observable<IProduct[]> {
    return this.http.get<IProductDto>(`/products`, {
      params: getParamsFromObject({ subcat: subcategoryId }),
    })
      .pipe(map(({ data }) => data.items))
  }

  getProduct$(id: string): Observable<IProduct | undefined> {
    return this.http.get<{ data: IProduct }>(`/product/${id}`).pipe(map(({ data }) => data))
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProductsService {

  constructor(private _http: HttpClient) {
  }

  list() {
    return this._http.get('/api/products');
  }

  get (id: string) {
    return this._http.get(`/api/product/${id}`);
  }
}

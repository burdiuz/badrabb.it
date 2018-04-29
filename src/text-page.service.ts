import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TextPageService {
  constructor(private _http: HttpClient) {
  }

  get(label: string) {
    return this._http.get(`/api/${label}`);
  }
}

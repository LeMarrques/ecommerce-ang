import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constants';
import { newProduct } from '../../pages/admin/products/new-product.model';

@Injectable({
  providedIn: 'root',

})
export class ProductService {


  constructor(private http: HttpClient) { }

  getAllCategory(){
    return this.http.get(Constant.url + Constant.METHOS.GET_ALL_CATEGORY);
  }

  getAllProducts(){
    return this.http.get(Constant.url + Constant.METHOS.GET_ALL_PRODUCT);
  }

  saveNewProduct(obj: newProduct){
    return this.http.post(Constant.url + Constant.METHOS.GET_ALL_CATEGORY, obj);
  }
}

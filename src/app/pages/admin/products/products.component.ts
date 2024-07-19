import { ProductService } from './../../../services/products/product.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { newProduct } from './new-product.model';
import { FormsModule } from '@angular/forms';
import { Constant } from '../../../services/constants';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  //TODO: ALTERAR A COR DA BARRA DA LISTA, ALINHAR PRODUTOS O MAXIMO POSSIVEL

isSidePainelVisible: boolean = false;

 productObj: newProduct = {
  "productId": 0,
  "productSku": "",
  "productName": "",
  "productPrice": 0,
  "productShortName": "",
  "productDescription": "",
  "createdDate": new Date(),
  "deliveryTimeSpan": "",
  "categoryId": 0,
  "productImageUrl": "",
};


//TODO: CRIAR MODEL PARA CATEGORIAS e PRODUTO E SUBSTITUIR O ANY (pode usar o arquivo model q já existe):
categoryList: any [] = [];
productList: any [] = [];

constructor (private ProductService: ProductService){}

ngOnInit(): void {
  this.getAllCategory();
  this. getAllProducts();
}


// QUANDO CLICA NO NEW FECHA TAMBÉM, MAS É SÓ PRA ABRIR //
// TODO: AJEITAR FUNÇÃO //
  openSidePainel() {
    this.isSidePainelVisible = !this.isSidePainelVisible;
  }

  //TODO: CRIAR FUNÇÃO PARA FECHAR O PAINEL DE NOVO PRODUTO//

  closeSidePainel(){}

  getAllCategory(){
    this.ProductService.getAllCategory().subscribe((resp: any)=> {
      this.categoryList = resp.data;
    })
  }

  getAllProducts(){
    this.ProductService.getAllProducts().subscribe((resp: any)=> {
      this.productList = resp.data;
    })
  }

  onSave(){
    this.ProductService.saveNewProduct(this.productObj).subscribe((resp:any)=>{
      if(resp.result){
        alert("Produto criado com sucesso");
        this.getAllProducts();

      } else {
        alert(resp.message);
      }
    })
  }

  onEdit(item: any){
    this.productObj = item;
    this.openSidePainel();
  }

}

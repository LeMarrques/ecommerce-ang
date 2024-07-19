export class newProduct{

  constructor(
 public productId: number,
 public productSku: string,
 public productName: string,
 public productPrice: number,
 public productShortName: string,
 public productDescription: string,
 public createdDate: Date,
 public deliveryTimeSpan: string,
 public categoryId: number,
 public productImageUrl: string,

){}
}

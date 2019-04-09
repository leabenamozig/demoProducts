import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ResponseProductSearch } from '../response';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   response: ResponseProductSearch;

 /* products: Product[] = [
      { name: 'Pro camera', price: 200},
      { name: 'Camera', price: 120}
  ];
*/
  constructor(private productService: ProductService) { }

  ngOnInit() {
     this.getProducts();
  }

  getProducts(): void {
    this.productService.getResponse()
    .subscribe(response => this.response = response);
  }

}

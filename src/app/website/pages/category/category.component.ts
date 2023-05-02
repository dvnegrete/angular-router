import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryID: string | null = null;
  limit = 10;
  offset = 0;
  products: Product[] = [];
  productId : string | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {

  }
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap( params => {
        this.categoryID = params.get('id');
        if (this.categoryID) {
          return this.productService.getByCategory(this.categoryID, this.limit, this.offset)
        }
        return [];
      })
    ).subscribe( data => {
      this.products = data;
    })
    
    this.route.queryParamMap.subscribe( params => {
      this.productId = params.get('product');
    })
  }

}

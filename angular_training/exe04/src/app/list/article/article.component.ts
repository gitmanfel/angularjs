import { Component, OnInit, Input, } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  cartService: CartService;
  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  updateCart() {
    this.cartService.updateTotal(this.article.price);
    console.log('updateCart');
  }
  ngOnInit() {
  }
}

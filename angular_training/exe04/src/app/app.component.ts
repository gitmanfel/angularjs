import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Article } from './models/article.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  articles: Article[];
  cartService: CartService;
  title = 'Services';
  constructor(cartService: CartService) {
    this.cartService = cartService;
  }
  ngOnInit(): void {
    this.articles = this.cartService.articles;
  }
}

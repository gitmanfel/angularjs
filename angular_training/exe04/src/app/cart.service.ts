import { Injectable } from '@angular/core';
import { Article } from './models/article.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  articles: Article[];
  totalCart: number;
  constructor() {
    this.articles = [];
    this.articles.push(
      new Article('/assets/images/image1.jpg', 'chaussure 1', 100),
      new Article('/assets/images/image2.jpg', 'chaussure 2'),
      new Article('/assets/images/image3.jpg', 'chaussure 3', 250)
    );
    this.totalCart = 0;
  }
  updateTotal(value) {
    this.totalCart += value;
  }
}

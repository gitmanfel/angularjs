import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @Output() addArticleToCart: EventEmitter<number>;
  constructor() {
    this.addArticleToCart = new EventEmitter();
   }

  updateCart() {
    console.log('updateCart');
    this.addArticleToCart.emit(this.article.price);
  }
  ngOnInit() {
  }
}

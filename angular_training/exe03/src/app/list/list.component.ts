import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() articles: Article[];
  @Output() addArticleToCart: EventEmitter<number>;
  constructor() {
    this.addArticleToCart = new EventEmitter();
   }

  ngOnInit() {
  }
  addArticleToCartList(value) {
    console.log('addArticleToCartList');
    console.log(value);
    this.addArticleToCart.emit(value);
  }
}

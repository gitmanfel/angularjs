import { Component } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  articles: Article[];
  totalCart: number;
  title = 'exe03';
  constructor() {
    this.articles = [];
    this.articles.push(
      new Article('/assets/images/image1.jpg', 'chaussure 1', 100),
      new Article('/assets/images/image2.jpg', 'chaussure 2'),
      new Article('/assets/images/image3.jpg', 'chaussure 3', 250)
    );
    this.totalCart = 0;
  }
  changeTotal(value) {
    this.totalCart += value;
  }
}

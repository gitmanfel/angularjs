import { Component } from '@angular/core';
import { Article } from './models/article.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  articles: Article[];
  title = 'exe02';
  constructor() {
    this.articles = [];
    this.articles.push(
      new Article('test d\'article',
        'http://www.technocite.be', 40),
      new Article('test d\'article2',
        'http://www.technocite.be', 50),
      new Article('test d\'article3',
        'http://www.technocite.be', 30),
      new Article('test d\'article4', 'http://www.technocite.be', 20)
    );
  }

  sortedArticles() {
    return this.articles.sort((a: Article, b: Article) => b.vote - a.vote);
    // return this.articles.sort(function (a: Article , b: Article){
    //   return  b.vote - a.vote;
    // });
  }

}

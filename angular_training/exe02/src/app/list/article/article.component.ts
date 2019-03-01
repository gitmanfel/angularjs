import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/article.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  constructor() { }

  ngOnInit() {
  }

  voteUp(): boolean {
    this.article.vote++;
    return false;
  }

  voteDown(): boolean{
    this.article.vote--;
    return false;
  }
}

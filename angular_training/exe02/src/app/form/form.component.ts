import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() articles: Article[];
  constructor() { }
  ngOnInit() {
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement){
    const article = new Article(title.value, link.value, 20);
    this.articles.push(article);
    title.value=link.value='';
    return false;
  }
}

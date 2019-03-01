import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../interfaces/article.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() articles: Article[];
  constructor() { }

  ngOnInit() {
  }

}

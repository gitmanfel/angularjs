export class Article {
  title: string;
  link: string;
  vote: number;
  constructor(title: string, link: string, vote: number) {
    this.link = link;
    this.title = title;
    this.vote = vote;
  }
}

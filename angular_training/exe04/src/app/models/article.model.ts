export class Article {
  img: string;
  label: string;
  price: number;
  constructor(img: string, label: string, price: number = 10) {
    this.img = img;
    this.label = label;
    this.price = price;
  }
}

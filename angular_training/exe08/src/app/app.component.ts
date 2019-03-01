import { Component } from '@angular/core';
import { from, of, Observable, range, interval, fromEvent, merge, } from 'rxjs/';
import { repeat, last, debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'exe08';
  constructor() {
    // const values: Array<string> = ['data1', 'data2'];
    // const observable: Observable<string> = from(values);
    // const observable: Observable<number> = of(500);
    // const observable: Observable<number> = range(0,500);
    // const observable: Observable<number> = interval(500);
    // const observable: Observable<number> = range(1, 3).pipe(repeat(3))
    // const observable: Observable<any> = fromEvent(document, 'keyup');
    // const observable: Observable<any> = fromEvent(document, 'mouse');
    // observable.subscribe(
    //   val => { console.log(val); },
    //   err => { console.log(err); },
    //   () => { console.log('completed'); }
    // )
    const mouse: Observable<any> = fromEvent(document, 'mouse');
    const position = mouse.pipe(debounceTime(1000)).pipe(map(data => console.log(data)));
    // position.subscribe((e) => { console.log(e) })

  }
}

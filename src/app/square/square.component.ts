import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent  {
  fixture(fixture: any) {
    throw new Error('Method not implemented.');
  }
  @Input () value: 'Bones' | 'Pumpkin'

}
  //constructor() { }

  //ngOnInit(): void { }

//import { Component, Input } from '@angular/core';

//@Component({
  //selector: 'app-square',
 // template: `
   // <button nbButton *ngIf="!value">{{ value }}</button>
   // <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
   // <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  
  //styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
//})
//export class SquareComponent  {

 // @Input() value: 'X' | 'O';

//}
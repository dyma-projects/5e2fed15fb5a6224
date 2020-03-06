import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  public countValue: number = 0;

  @Output('countChange') public countChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public increment () {
    this.countValue++;
    this.countChange.emit({
      value: this.countValue
    });
  }

  public decrement () {
    this.countValue--;
    this.countChange.emit({
      value: this.countValue
    });
  }

}

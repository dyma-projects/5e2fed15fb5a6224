import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;

  @ViewChild('myInput') public inputEl: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  valueChange() {
    console.log("valueChange");
    if (this.inputEl) {
      this.valeur = this.inputEl.nativeElement.value;
    }
  }
}

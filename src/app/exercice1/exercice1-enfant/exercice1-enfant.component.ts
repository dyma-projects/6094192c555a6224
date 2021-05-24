import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public currentValue: number;
  @Output() public numberChangeEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  addOne() {
    this.currentValue++;
    this.numberChangeEvent.emit(this.currentValue);
    // console.log("add one");
  }

  subtractOne() {
    this.currentValue--;
    this.numberChangeEvent.emit(this.currentValue);
    // console.log("subtract one");
  }
}

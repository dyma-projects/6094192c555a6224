import { Component, OnInit } from "@angular/core";
import { Event } from "@angular/router";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public compteur: number = 0;

  constructor() {}

  ngOnInit() {}
  numberChanged(event: number) {
    // console.log("number changed");
    //console.log(event);
    this.compteur = event;
  }
}

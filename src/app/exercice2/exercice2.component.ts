import { Component, OnInit, ElementRef, ViewChild, Input } from "@angular/core";
import {} from "@angular/core";

@Component({
  selector: "app-exercice2",
  templateUrl: "./exercice2.component.html",
  styleUrls: ["./exercice2.component.css"],
})
export class Exercice2Component implements OnInit {
  @Input() inputText: string;
  @ViewChild("inputRef", { static: false }) el: ElementRef<HTMLInputElement>;
  public valeur: string;

  constructor() {}
  ngOnInit() {}

  // Je n'ai pas réussi à mettre à jour 'valeur' sans faire la méthode applyChange() avec event keyup

  applyChange() {
    this.valeur = this.el.nativeElement.value;
  }
}

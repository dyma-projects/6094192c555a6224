import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Input,
} from "@angular/core";
import {} from "@angular/core";

@Component({
  selector: "app-exercice2",
  templateUrl: "./exercice2.component.html",
  styleUrls: ["./exercice2.component.css"],
})
export class Exercice2Component implements OnInit, AfterViewInit {
  @ViewChild("inputRef", { static: false }) el: ElementRef<HTMLInputElement>;
  public valeur: string;

  constructor() {}
  ngOnInit() {}

  ngAfterViewInit(): void {
    console.log("el: ", this.el);
    // this.valeur = this.el.nativeElement.value;
  }

  // Je n'ai pas réussi à mettre à jour 'valeur' sans une trichérie, comme le bouton
  // J'ai essayé les hooks, mais rien n'a marché

  applyChange() {
    console.log("el2: ", this.el);
    this.valeur = this.el.nativeElement.value;
  }
}

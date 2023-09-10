import { Component } from '@angular/core';
import {ViewportScroller} from "@angular/common";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss']
})
export class TopOfPageComponent {

  protected readonly faArrowUp = faArrowUp;
  constructor(private viewportScroller: ViewportScroller) {}

  public goToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}

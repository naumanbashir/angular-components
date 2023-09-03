import {Component, Input} from '@angular/core';
import {AccordionItem} from "./accordion-item.interface";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() public items: AccordionItem[] = [];
  public faAngleDown = faAngleDown;

  public toggle(item: AccordionItem) {
    item.isExpanded = !item.isExpanded;
  }

  protected readonly faAngleUp = faAngleUp;
}

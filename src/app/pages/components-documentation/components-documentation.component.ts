import { Component } from '@angular/core';
import {AccordionItem} from "../../components/accordion/accordion-item.interface";

@Component({
  selector: 'app-components-documentation',
  templateUrl: './components-documentation.component.html',
  styleUrls: ['./components-documentation.component.scss']
})
export class ComponentsDocumentationComponent {
  progressValue: number = 25;

  public accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Example 1 Content',
      isExpanded: false
    },
    {
      title: 'Example 2',
      content: 'Example 3 Content',
      isExpanded: false
    }
  ];
}

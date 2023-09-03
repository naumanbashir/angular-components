import { Component } from '@angular/core';
import {AccordionItem} from "./components/accordion/accordion-item.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angular-compnents';
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

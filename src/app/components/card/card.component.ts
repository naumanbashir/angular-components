import {Component, Input} from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public title: string = '';
  @Input() public icon: string = '';
  @Input() public subTitle: string = '';
  protected readonly icons = icons;
  // @ts-ignore
  public iconClass;

  ngOnInit(){
    this.setIconClass();
  }

  setIconClass() {
    // @ts-ignore
    this.iconClass = this.icons[this.icon]
  }

}

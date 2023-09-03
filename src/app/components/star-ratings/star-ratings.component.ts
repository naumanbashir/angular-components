import {Component, Input} from '@angular/core';
import {faStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
import {faStar as faStarReg} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss']
})
export class StarRatingsComponent {
  @Input() public rating: number = 5;
  public maxRating: number = 5;

  protected readonly faStar = faStar;
  protected readonly faStarReg = faStarReg;
  protected readonly faStarHalfAlt = faStarHalfAlt;

  public get fullStars(): number[]
  {
    console.log(Math.floor(4.9))
    let totalFullStars = Math.floor(this.rating);
    return Array(totalFullStars).fill(0)
  }

  public get halfStar(): boolean
  {
    return ((this.rating - Math.floor(this.rating)) >= 0.5)
  }

  public get emptyStars(): number[]
  {
    let totalEmptyStarts = this.maxRating - Math.round(this.rating)
    return Array(totalEmptyStarts).fill(0)
  }
}

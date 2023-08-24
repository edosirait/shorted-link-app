import { Component } from '@angular/core';
import CONSTANTS from "../../constants/app.constants";

const {
  workingLogo,
  contentTitleText,
  contentText,
} = CONSTANTS
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  workingLogo: string = workingLogo;
  contentTitleText: string = contentTitleText;
  contentText: string = contentText;
}

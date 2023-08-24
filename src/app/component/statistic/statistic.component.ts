import { Component } from '@angular/core';
import CONSTANTS from "../../constants/app.constants";

const {
  fullyCustomLogo,
  recognitionLogo,
  advancedText,
  contentAdvancedText,
  recordDetailLogo,
  detailRecordText,
  recognitionText,
  detailRecognitionText,
  contentRecordText,
  customizableText,
  contentCustomizableText,

} = CONSTANTS

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent {
  fullyCustomLogo: string = fullyCustomLogo;
  recognitionLogo: string = recognitionLogo;
  recognitionText: string = recognitionText;
  detailRecognitionText: string = detailRecognitionText;
  advancedText: string = advancedText;
  contentAdvancedText: string = contentAdvancedText;
  recordDetailLogo: string = recordDetailLogo;
  detailRecordText: string = detailRecordText;
  contentRecordText: string = contentRecordText;
  customizableText: string = customizableText;
  contentCustomizableText: string = contentCustomizableText;
}

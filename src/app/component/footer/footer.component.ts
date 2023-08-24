import { Component } from '@angular/core';
import CONSTANTS from "../../constants/app.constants";

const {
  whiteLogo,
  twitterLogo,
  instagramLogo,
  facebookLogo,
  pinterestLogo,
  featuresText,
  resourcesText,
  linkShorteningText,
  brandedLinksText,
  analyticsText,
  blogText,
  developersText,
  supportText,
  companyText,
  aboutText,
  ourTeamText,
  careersText,
  contactText,
} = CONSTANTS

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  whiteLogo: string = whiteLogo;
  featuresText: string = featuresText;
  resourcesText: string = resourcesText;
  linkShorteningText: string = linkShorteningText;
  brandedLinksText: string = brandedLinksText;
  analyticsText: string = analyticsText;
  blogText: string = blogText;
  developersText: string = developersText;
  supportText: string = supportText;
  companyText: string = companyText;
  aboutText: string = aboutText;
  ourTeamText: string = ourTeamText;
  careersText: string = careersText;
  contactText: string = contactText;
  twitterLogo: string = twitterLogo;
  instagramLogo: string = instagramLogo;
  pinterestLogo: string = pinterestLogo;
  facebookLogo: string = facebookLogo;
}

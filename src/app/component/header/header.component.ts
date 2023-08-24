import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import CONSTANTS from "../../constants/app.constants";

const {
  shortlyLogo,
  hamburgerLogo,
  closeLogo,
  featuresText,
  pricingText,
  resourcesText,
  loginText,
  signUpText,
} = CONSTANTS

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit{
  @ViewChild('mobileHamburger') mobileHamburger: ElementRef = {} as ElementRef;
  @ViewChild('headerNavigation') primaryNavigation: ElementRef = {} as ElementRef;
  mobileNavigation: Record<string, string> = {};

  logo: string = shortlyLogo;
  hamburger: string = hamburgerLogo;
  closeLogo: string = closeLogo;
  featuresText: string = featuresText;
  pricingText: string = pricingText;
  resourcesText: string = resourcesText;
  loginText: string = loginText;
  signUpText: string = signUpText;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.listen(this.mobileHamburger.nativeElement, 'click', () => {
      this.primaryNavigation.nativeElement.toggleAttribute(
        'display-mobile-nav'
      );
    });
  }

}

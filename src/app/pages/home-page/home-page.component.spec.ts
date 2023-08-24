import { ComponentFixture, TestBed } from '@angular/core/testing';import { AppComponent } from 'src/app/app.component';
import { ContentComponent } from 'src/app/component/content/content.component';
import { FooterComponent } from 'src/app/component/footer/footer.component';
import { HeaderComponent } from 'src/app/component/header/header.component';
import { ShortenFeatureComponent } from 'src/app/component/shorten-feature/shorten-feature.component';
import { StatisticComponent } from 'src/app/component/statistic/statistic.component';
import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let fixture: ComponentFixture<HomePageComponent>;
  let homePageComponent: HomePageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        ContentComponent,
        ShortenFeatureComponent,
        StatisticComponent,
        FooterComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    homePageComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(homePageComponent).toBeTruthy();
  });

  it('should render the header component', () => {
    const headerElement = fixture.nativeElement.querySelector('app-header');
    expect(headerElement).toBeTruthy();
  });

  it('should render the content component', () => {
    const contentElement = fixture.nativeElement.querySelector('app-content');
    expect(contentElement).toBeTruthy();
  });

  it('should render the shorten feature component', () => {
    const shortenFeatureElement = fixture.nativeElement.querySelector('app-shorten-feature');
    expect(shortenFeatureElement).toBeTruthy();
  });

  it('should render the statistic component', () => {
    const statisticElement = fixture.nativeElement.querySelector('app-statistic');
    expect(statisticElement).toBeTruthy();
  });

  it('should render the footer component', () => {
    const footerElement = fixture.nativeElement.querySelector('app-footer');
    expect(footerElement).toBeTruthy();
  });
});

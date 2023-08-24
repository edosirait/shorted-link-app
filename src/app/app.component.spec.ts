import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderModule } from './component/header/header.module';
import { ContentModule } from './component/content/content.module';
import { StatisticModule } from './component/statistic/statistic.module';
import { ShortenFeatureModule } from './component/shorten-feature/shorten-feature.module';
import { FooterModule } from './component/footer/footer.module';

beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        HeaderModule, 
        ContentModule,
        StatisticModule,
        ShortenFeatureModule,
        FooterModule,
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  });

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(appComponent).toBeTruthy();
  });

  it(`should have as title 'shortly'`, () => {
    expect(appComponent.title).toEqual('shortly');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ShortenFeatureComponent } from './shorten-feature.component';
import { ShortlinkServices } from '../../services/shortlink-services/shortlink.services';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { DataUrl } from 'src/app/models/shorten';

describe('ShortenFeatureComponent', () => {
  let component: ShortenFeatureComponent;
  let fixture: ComponentFixture<ShortenFeatureComponent>;
  let shortlinkService:jasmine.SpyObj<ShortlinkServices>;

  beforeEach(async () => {
    const mockShortlinkService = jasmine.createSpyObj('ShortlinkServices', ['shorted']);
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [ShortenFeatureComponent],
      providers: [{
        provide: ShortlinkServices, useValue: mockShortlinkService
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Ignore unrecognized custom elements
    }).compileComponents();

    fixture = TestBed.createComponent(ShortenFeatureComponent);
    component = fixture.componentInstance;
    shortlinkService = TestBed.inject(ShortlinkServices) as jasmine.SpyObj<ShortlinkServices>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit method', () => {
    const mockDataUrl = {
      original_link: 'https://www.example.com',
      full_short_link: 'https://shrtco.de/abc123',
      short_link: 'https://shrtco.de/abc123',
      full_share_link: 'https://9qr.de/abc123',
      share_link: 'https://9qr.de/abc123',
      code: 'abc123',
    };
    shortlinkService.shorted.and.returnValue(of(mockDataUrl as any));

    component.url.original_link = 'https://www.example.com';
    component.onSubmit();
    expect(component.shortLinks.length).toBe(1);
  });

  it('should call copyLink method and update copied property', () => {
    const mockDataUrl: DataUrl = {
      original_link: 'https://www.example.com',
      full_short_link: 'https://shrtco.de/abc123',
      copied: false, // Add the copied property
    } as any;

    // Add some sample data links to the shortLinks array
    component.shortLinks = [mockDataUrl, mockDataUrl, mockDataUrl];

    const copyTextSpy = spyOn(navigator.clipboard, 'writeText');

    // Call the copyLink method with a specific index
    component.copyLink(mockDataUrl.full_short_link, 1);

    // Verify that clipboard.writeText was called
    expect(copyTextSpy).toHaveBeenCalledWith(mockDataUrl.full_short_link);

    // Verify that the copied property is updated to true for the clicked link
    expect(component.shortLinks[1].copied).toBe(true);
  });
});

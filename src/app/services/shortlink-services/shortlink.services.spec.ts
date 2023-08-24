import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShortlinkServices } from './shortlink.services';
import { DataResponse, DataUrl } from '../../models/shorten';

describe('ShortlinkServices', () => {
  let service: ShortlinkServices;
  let httpTestingController: HttpTestingController;
  let apiURL: string = 'https://api.shrtco.de/v2';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShortlinkServices],
    });

    service = TestBed.inject(ShortlinkServices);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return shorted URL', () => {
    const mockUrl = 'https://www.example.com';
    const mockResponse: DataResponse = {
      ok: true,
      result: {
        code: 'abc123',
        short_link: 'https://shrtco.de/abc123',
        full_short_link: 'https://shrtco.de/abc123',
        short_link2: 'https://9qr.de/abc123',
        full_short_link2: 'https://9qr.de/abc123',
        full_share_link: 'https://9qr.de/abc123',
        original_link: 'https://xprivate.education/',
        share_link: 'https://9qr.de/abc123',
        copied: false,
      },
    };

    service.shorted(mockUrl).subscribe((data: DataUrl) => {
      expect(data.short_link).toBe(mockResponse.result.short_link);
    });

    const req = httpTestingController.expectOne(`${apiURL}/shorten?url=${mockUrl}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});

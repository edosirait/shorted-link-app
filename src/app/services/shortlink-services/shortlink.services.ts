import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {DataResponse, DataUrl} from "../../models/shorten";

@Injectable({
  providedIn: 'root',
})
export class ShortlinkServices {
  private apiURL: string = 'https://api.shrtco.de/v2';
  constructor(private http: HttpClient) {}

  shorted(url: string): Observable<DataUrl> {
    return this.http.get<DataResponse>(`${this.apiURL}/shorten?url=${url}`)
      .pipe(
        map((linkResponse: DataResponse) => {
          return linkResponse.result;
        })
      );
  }
}

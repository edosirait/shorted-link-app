import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {DataUrl} from "../../models/shorten";
import {ShortlinkServices} from "../../services/shortlink-services/shortlink.services";
import CONSTANTS from "../../constants/app.constants";
import Swal from 'sweetalert2'


const {
  shortenText,
  yourLinksText,
  pleaseAddText,
} = CONSTANTS
@Component({
  selector: 'app-shorten-feature',
  templateUrl: './shorten-feature.component.html',
  styleUrls: ['./shorten-feature.component.scss']
})
export class ShortenFeatureComponent {
  shortenText: string = shortenText;
  yourLinksText: string = yourLinksText;
  pleaseAddText: string = pleaseAddText;
  shortLinks: DataUrl[] = [];
  url: DataUrl = {} as DataUrl;
  showError: boolean = false;
  hasClickedButton: boolean = false;

  constructor(
    private shortLinkServices: ShortlinkServices,
    ) {}

  onSubmit(): void {
    this.hasClickedButton = true;
    if (!this.url.original_link) {
      this.showError = true;
    } else {
      this.shortLinkServices.shorted(this.url.original_link).subscribe({
        next: (val: DataUrl) => {
          this.shortLinks.push(val);
        },
        complete: () => {
          this.url.original_link = '';
          console.log('Request completed');
        },
        error: (err) => {
          console.error(err);
          const message = err.error.error;
          Swal.fire({
            title: 'Error!',
            text: message,
            confirmButtonText: 'Close',
          });
        },
      });
      this.showError = false;
    }
  }

  onInput() {
    this.showError = false;
  }

  copyLink(link: string, index: number): void {
    navigator.clipboard.writeText(link);
    this.shortLinks.map(data => data.copied = false)
    this.shortLinks[index].copied = true;
  }

}

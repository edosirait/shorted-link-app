import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenFeatureComponent } from "./shorten-feature.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ShortlinkServices } from "../../services/shortlink-services/shortlink.services";


@NgModule({
  declarations: [ShortenFeatureComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ShortlinkServices],
  exports: [ShortenFeatureComponent]
})
export class ShortenFeatureModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from "./home-page.component";
import {HeaderModule} from "../../component/header/header.module";
import {HomePageRoutingModule} from "./home-page-routing.module";
import {ContentModule} from "../../component/content/content.module";
import {ShortenFeatureModule} from "../../component/shorten-feature/shorten-feature.module";
import {StatisticModule} from "../../component/statistic/statistic.module";
import {FooterModule} from "../../component/footer/footer.module";

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    HomePageRoutingModule,
    ContentModule,
    ShortenFeatureModule,
    StatisticModule,
    FooterModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MainSliderComponent } from "./components/main-slider/main-slider.component";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { ReviewComponent } from "./components/review/review.component";
import {FaqModule} from "../../shared/modules/faq/faq.module";
import {FeedbackComponent} from "./components/feedback/feedback.component";
import {ReactiveFormsModule} from "@angular/forms";
import {IConfig, NgxMaskModule} from "ngx-mask";

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    HomeComponent,
    ReviewComponent,
    MainSliderComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    FaqModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
})
export class HomeModule { }

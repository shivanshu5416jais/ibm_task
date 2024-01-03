import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ShipmentsearchComponent } from './shipmentsearch/shipmentsearch.component';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    ShipmentsearchComponent
  ],
  exports: [
    CommonModule,
    TranslateModule
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule.forChild({

      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    FormsModule
  ]
})
export class HomeModule { }

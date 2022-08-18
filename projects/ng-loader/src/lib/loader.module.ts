

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlareLoaderComponent } from './loader.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FlareLoaderComponent,
  ],
  exports: [
    FlareLoaderComponent,
  ],
})
export class FlareLoaderModule {
}

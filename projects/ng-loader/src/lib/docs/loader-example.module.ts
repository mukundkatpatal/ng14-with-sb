
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FlareLoaderModule } from '../loader.module';
import { LoaderExample } from './loader-example.component';

@NgModule({
  imports: [
    CommonModule,
    FlareLoaderModule,
  ],
  declarations: [LoaderExample],
  exports: [LoaderExample],
})
export class FlareLoaderExampleModule {
}

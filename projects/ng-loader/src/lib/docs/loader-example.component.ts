
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { map, scan, takeWhile, filter, startWith, mapTo, shareReplay } from 'rxjs/operators';
import { interval } from 'rxjs';

import { LoaderMode } from '../loader.model';

@Component({
  selector: 'flare-loader-example',
  template: `
    <flare-loader [value]="value$ | async" [isLoading]="loading$ | async" [mode]="mode">
      <div>
        Some Content which will show after loading is completed
      </div>
    </flare-loader>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderExample {

  public isLoading = true;

  public mode = LoaderMode.Determinate;

  public value$ = interval(2000).pipe(
    map(() => Math.floor(Math.random() * 10) + 1),
    scan((acc, value) => Math.min(acc + value, 100)),
    takeWhile((value) => value !== 100, true),
    shareReplay(1),
  );

  public loading$ = this.value$.pipe(
    filter(v => v >= 100),
    mapTo(false),
    startWith(true),
  );

}

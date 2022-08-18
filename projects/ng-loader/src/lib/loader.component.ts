import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { LoaderMode } from './loader.model';

@Component({
  selector: 'flare-loader',
  templateUrl: 'loader.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlareLoaderComponent {

  /**
   * When false, the content in the <ng-template> will be shown.
   * Default is true.
   */
  @Input()
  public isLoading = true;

  /**
   * Current value of the progress.
   * Should be between 0 to 100.
   * default: 0
   */
  @Input()
  public value = 0;
  /**
   * Enum representing state as either `determinate` or `indeterminate`.
   * Defines the mode of progress.
   * For showing static progress or dynamic use the mode `determinate` in conjunction with the `value` input.
   * Default: indeterminate.
   */
  @Input()
  public mode: LoaderMode = LoaderMode.Indeterminate;

  @Input()
  public set customStyles(value: string | string[] | Set<string> | { [klass: string]: any }) {
    this.styles = value;
  }

  public styles: string | string[] | Set<string> | { [klass: string]: any } = {};

  /**
   * For internal use.
   */
  public readonly loaderModes = LoaderMode;

}

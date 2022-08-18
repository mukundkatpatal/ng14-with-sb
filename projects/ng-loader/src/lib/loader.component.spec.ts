/*
 *  Copyright © 2022 - present Boeing. All rights reserved.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectorRef } from '@angular/core';
import { By } from '@angular/platform-browser';

import { FlareLoaderComponent } from './loader.component';
import { LoaderMode } from './loader.model';

describe('LoaderComponent', () => {
  let component: FlareLoaderComponent;
  let fixture: ComponentFixture<FlareLoaderComponent>;
  let changeDetectorRef: ChangeDetectorRef;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlareLoaderComponent],
    });
    fixture = TestBed.createComponent(FlareLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    changeDetectorRef = fixture.componentRef.injector.get(ChangeDetectorRef);
  });

  it('should create loader component', () => {
    expect(component).toBeDefined();
  });

  it('should show default loader when `isLoading` input is true', () => {
    component.isLoading = true;
    const loader = fixture.debugElement.query(By.css('.progressbar'));
    expect(loader).not.toBeNull();
  });

  it('should have progress-determinate css class applied when the mode is determinate', () => {
    component.mode = LoaderMode.Determinate;

    changeDetectorRef.detectChanges();

    const loader = fixture.debugElement.query(By.css('.progressbar-determinate'));
    expect(loader).not.toBeNull();
  });

  it('should be able to show a static progress value when a specific value is passed', () => {
    component.mode = LoaderMode.Determinate;
    component.value = 50;

    changeDetectorRef.detectChanges();

    const loaderProgresssValue = fixture.debugElement.query(By.css('.progressbar-value')).nativeElement as HTMLElement;
    expect(loaderProgresssValue).not.toBeNull();
    expect(loaderProgresssValue.style.width).toEqual('50%');
  });

  it('should not show loader when loading is set to false', () => {
    component.isLoading = false;

    changeDetectorRef.detectChanges();

    const loaderProgresssValue = fixture.debugElement.query(By.css('.progressbar'));
    expect(loaderProgresssValue).toBeNull();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoviemanagerMovieBucketComponent } from './moviemanager-movie-bucket.component';

describe('MoviemanagerMovieBucketComponent', () => {
  let component: MoviemanagerMovieBucketComponent;
  let fixture: ComponentFixture<MoviemanagerMovieBucketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviemanagerMovieBucketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviemanagerMovieBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

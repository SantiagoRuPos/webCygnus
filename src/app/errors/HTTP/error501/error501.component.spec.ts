import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error501Component } from './error501.component';

describe('Error501Component', () => {
  let component: Error501Component;
  let fixture: ComponentFixture<Error501Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Error501Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Error501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

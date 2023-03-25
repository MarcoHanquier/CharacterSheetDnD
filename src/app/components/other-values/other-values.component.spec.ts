import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherValuesComponent } from './other-values.component';

describe('OtherValuesComponent', () => {
  let component: OtherValuesComponent;
  let fixture: ComponentFixture<OtherValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherValuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

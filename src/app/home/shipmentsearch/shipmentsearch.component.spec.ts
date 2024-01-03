import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsearchComponent } from './shipmentsearch.component';

describe('ShipmentsearchComponent', () => {
  let component: ShipmentsearchComponent;
  let fixture: ComponentFixture<ShipmentsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDevicefComponent } from './add-devicef.component';

describe('AddDevicefComponent', () => {
  let component: AddDevicefComponent;
  let fixture: ComponentFixture<AddDevicefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDevicefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDevicefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

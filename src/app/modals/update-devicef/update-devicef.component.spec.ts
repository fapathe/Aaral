import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDevicefComponent } from './update-devicef.component';

describe('UpdateDevicefComponent', () => {
  let component: UpdateDevicefComponent;
  let fixture: ComponentFixture<UpdateDevicefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDevicefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDevicefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

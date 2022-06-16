import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPadlockComponent } from './add-padlock.component';

describe('AddPadlockComponent', () => {
  let component: AddPadlockComponent;
  let fixture: ComponentFixture<AddPadlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPadlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPadlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

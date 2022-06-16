import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePadlockComponent } from './update-padlock.component';

describe('UpdatePadlockComponent', () => {
  let component: UpdatePadlockComponent;
  let fixture: ComponentFixture<UpdatePadlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePadlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePadlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

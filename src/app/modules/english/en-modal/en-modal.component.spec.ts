import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnModalComponent } from './en-modal.component';

describe('EnModalComponent', () => {
  let component: EnModalComponent;
  let fixture: ComponentFixture<EnModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

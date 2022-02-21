import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkelatonComponent } from './skelaton.component';

describe('SkelatonComponent', () => {
  let component: SkelatonComponent;
  let fixture: ComponentFixture<SkelatonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkelatonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkelatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

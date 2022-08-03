import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwindComponent } from './twind.component';

describe('TwindComponent', () => {
  let component: TwindComponent;
  let fixture: ComponentFixture<TwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

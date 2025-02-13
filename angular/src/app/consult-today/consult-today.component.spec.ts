import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultTodayComponent } from './consult-today.component';

describe('ConsultTodayComponent', () => {
  let component: ConsultTodayComponent;
  let fixture: ComponentFixture<ConsultTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultTodayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

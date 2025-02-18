import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoTitreComponent } from './logo-titre.component';

describe('LogoTitreComponent', () => {
  let component: LogoTitreComponent;
  let fixture: ComponentFixture<LogoTitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoTitreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoTitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

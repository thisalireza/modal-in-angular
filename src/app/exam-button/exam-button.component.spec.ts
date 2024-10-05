import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamButtonComponent } from './exam-button.component';

describe('ExamButtonComponent', () => {
  let component: ExamButtonComponent;
  let fixture: ComponentFixture<ExamButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

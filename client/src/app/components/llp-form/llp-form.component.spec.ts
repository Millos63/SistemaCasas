import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LLPFormComponent } from './llp-form.component';

describe('LLPFormComponent', () => {
  let component: LLPFormComponent;
  let fixture: ComponentFixture<LLPFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LLPFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LLPFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

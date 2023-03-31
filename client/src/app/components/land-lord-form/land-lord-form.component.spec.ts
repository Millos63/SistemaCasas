import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandLordFormComponent } from './land-lord-form.component';

describe('LandLordFormComponent', () => {
  let component: LandLordFormComponent;
  let fixture: ComponentFixture<LandLordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandLordFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandLordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

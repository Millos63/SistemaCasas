import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandLordListComponent } from './land-lord-list.component';

describe('LandLordListComponent', () => {
  let component: LandLordListComponent;
  let fixture: ComponentFixture<LandLordListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandLordListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandLordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

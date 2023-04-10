import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlpListComponent } from './llp-list.component';

describe('LlpListComponent', () => {
  let component: LlpListComponent;
  let fixture: ComponentFixture<LlpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlpListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

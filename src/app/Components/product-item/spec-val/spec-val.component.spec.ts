import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecValComponent } from './spec-val.component';

describe('SpecValComponent', () => {
  let component: SpecValComponent;
  let fixture: ComponentFixture<SpecValComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecValComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

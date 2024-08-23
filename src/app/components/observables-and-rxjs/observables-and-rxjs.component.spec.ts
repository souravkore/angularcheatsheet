import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesAndRxjsComponent } from './observables-and-rxjs.component';

describe('ObservablesAndRxjsComponent', () => {
  let component: ObservablesAndRxjsComponent;
  let fixture: ComponentFixture<ObservablesAndRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObservablesAndRxjsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablesAndRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

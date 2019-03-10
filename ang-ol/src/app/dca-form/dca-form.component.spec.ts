import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DCAFormComponent } from './dca-form.component';

describe('DCAFormComponent', () => {
  let component: DCAFormComponent;
  let fixture: ComponentFixture<DCAFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DCAFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DCAFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

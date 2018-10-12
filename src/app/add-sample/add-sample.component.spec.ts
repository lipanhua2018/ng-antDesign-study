import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSampleComponent } from './add-sample.component';

describe('AddSampleComponent', () => {
  let component: AddSampleComponent;
  let fixture: ComponentFixture<AddSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

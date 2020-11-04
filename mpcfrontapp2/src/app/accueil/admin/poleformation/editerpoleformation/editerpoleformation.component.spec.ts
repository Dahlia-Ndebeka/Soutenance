import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerpoleformationComponent } from './editerpoleformation.component';

describe('EditerpoleformationComponent', () => {
  let component: EditerpoleformationComponent;
  let fixture: ComponentFixture<EditerpoleformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerpoleformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerpoleformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

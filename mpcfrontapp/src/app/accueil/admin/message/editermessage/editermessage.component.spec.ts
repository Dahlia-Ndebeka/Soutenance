import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditermessageComponent } from './editermessage.component';

describe('EditermessageComponent', () => {
  let component: EditermessageComponent;
  let fixture: ComponentFixture<EditermessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditermessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditermessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

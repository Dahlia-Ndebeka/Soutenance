import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemessageComponent } from './listemessage.component';

describe('ListemessageComponent', () => {
  let component: ListemessageComponent;
  let fixture: ComponentFixture<ListemessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListemessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

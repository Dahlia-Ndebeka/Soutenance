import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeragentComponent } from './editeragent.component';

describe('EditeragentComponent', () => {
  let component: EditeragentComponent;
  let fixture: ComponentFixture<EditeragentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeragentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeragentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

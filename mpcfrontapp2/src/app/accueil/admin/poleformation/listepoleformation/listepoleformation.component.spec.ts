import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepoleformationComponent } from './listepoleformation.component';

describe('ListepoleformationComponent', () => {
  let component: ListepoleformationComponent;
  let fixture: ComponentFixture<ListepoleformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListepoleformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListepoleformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

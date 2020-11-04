import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesujettechComponent } from './listesujettech.component';

describe('ListesujettechComponent', () => {
  let component: ListesujettechComponent;
  let fixture: ComponentFixture<ListesujettechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListesujettechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesujettechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

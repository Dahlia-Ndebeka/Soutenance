import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeagentComponent } from './listeagent.component';

describe('ListeagentComponent', () => {
  let component: ListeagentComponent;
  let fixture: ComponentFixture<ListeagentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeagentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

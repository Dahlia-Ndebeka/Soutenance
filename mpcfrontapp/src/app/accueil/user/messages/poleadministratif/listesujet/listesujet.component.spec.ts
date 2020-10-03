import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesujetComponent } from './listesujet.component';

describe('ListesujetComponent', () => {
  let component: ListesujetComponent;
  let fixture: ComponentFixture<ListesujetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListesujetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

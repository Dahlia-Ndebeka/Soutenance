import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesujetgesComponent } from './listesujetges.component';

describe('ListesujetgesComponent', () => {
  let component: ListesujetgesComponent;
  let fixture: ComponentFixture<ListesujetgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListesujetgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesujetgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

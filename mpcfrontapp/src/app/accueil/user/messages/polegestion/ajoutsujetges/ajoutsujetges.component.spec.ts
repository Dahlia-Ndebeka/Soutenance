import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutsujetgesComponent } from './ajoutsujetges.component';

describe('AjoutsujetgesComponent', () => {
  let component: AjoutsujetgesComponent;
  let fixture: ComponentFixture<AjoutsujetgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutsujetgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutsujetgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

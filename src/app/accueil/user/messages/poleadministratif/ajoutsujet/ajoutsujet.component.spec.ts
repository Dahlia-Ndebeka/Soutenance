import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutsujetComponent } from './ajoutsujet.component';

describe('AjoutsujetComponent', () => {
  let component: AjoutsujetComponent;
  let fixture: ComponentFixture<AjoutsujetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutsujetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutsujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

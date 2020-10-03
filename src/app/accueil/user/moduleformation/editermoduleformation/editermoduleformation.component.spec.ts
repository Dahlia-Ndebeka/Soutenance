import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditermoduleformationComponent } from './editermoduleformation.component';

describe('EditermoduleformationComponent', () => {
  let component: EditermoduleformationComponent;
  let fixture: ComponentFixture<EditermoduleformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditermoduleformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditermoduleformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

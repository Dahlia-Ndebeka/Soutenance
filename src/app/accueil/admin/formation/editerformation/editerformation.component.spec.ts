import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerformationComponent } from './editerformation.component';

describe('EditerformationComponent', () => {
  let component: EditerformationComponent;
  let fixture: ComponentFixture<EditerformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirmoduleformationComponent } from './voirmoduleformation.component';

describe('VoirmoduleformationComponent', () => {
  let component: VoirmoduleformationComponent;
  let fixture: ComponentFixture<VoirmoduleformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirmoduleformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirmoduleformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

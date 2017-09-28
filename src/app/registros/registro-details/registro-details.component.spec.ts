import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDetailsComponent } from './registro-details.component';

describe('RegistroDetailsComponent', () => {
  let component: RegistroDetailsComponent;
  let fixture: ComponentFixture<RegistroDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNotRegistroComponent } from './modal-not-registro.component';

describe('ModalNotRegistroComponent', () => {
  let component: ModalNotRegistroComponent;
  let fixture: ComponentFixture<ModalNotRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalNotRegistroComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNotRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

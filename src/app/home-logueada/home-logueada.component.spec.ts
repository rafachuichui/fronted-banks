import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLogueadaComponent } from './home-logueada.component';

describe('HomeLogueadaComponent', () => {
  let component: HomeLogueadaComponent;
  let fixture: ComponentFixture<HomeLogueadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLogueadaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLogueadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

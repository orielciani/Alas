import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfectoresComponent } from './efectores.component';

describe('EfectoresComponent', () => {
  let component: EfectoresComponent;
  let fixture: ComponentFixture<EfectoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfectoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EfectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

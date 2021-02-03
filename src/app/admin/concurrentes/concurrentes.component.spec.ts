import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcurrentesComponent } from './concurrentes.component';

describe('ConcurrentesComponent', () => {
  let component: ConcurrentesComponent;
  let fixture: ComponentFixture<ConcurrentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcurrentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcurrentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

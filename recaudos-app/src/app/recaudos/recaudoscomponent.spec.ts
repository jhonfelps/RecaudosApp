import { ComponentFixture, TestBed } from '@angular/core/testing';

import { recaudosComponent } from './recaudos.component';

describe('recaudosComponent', () => {
  let component: recaudosComponent;
  let fixture: ComponentFixture<recaudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ recaudosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(recaudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

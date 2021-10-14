import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcealerComponent } from './concealer.component';

describe('ConcealerComponent', () => {
  let component: ConcealerComponent;
  let fixture: ComponentFixture<ConcealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcealerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

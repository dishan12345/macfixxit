import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacbookRepairComponent } from './macbook-repair.component';

describe('MacbookRepairComponent', () => {
  let component: MacbookRepairComponent;
  let fixture: ComponentFixture<MacbookRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MacbookRepairComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacbookRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnsiteRepairComponent } from './onsite-repair.component';

describe('OnsiteRepairComponent', () => {
  let component: OnsiteRepairComponent;
  let fixture: ComponentFixture<OnsiteRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnsiteRepairComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnsiteRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

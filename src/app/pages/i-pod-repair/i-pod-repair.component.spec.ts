import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPodRepairComponent } from './i-pod-repair.component';

describe('IPodRepairComponent', () => {
  let component: IPodRepairComponent;
  let fixture: ComponentFixture<IPodRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IPodRepairComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IPodRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

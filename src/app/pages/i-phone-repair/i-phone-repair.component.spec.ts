import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPhoneRepairComponent } from './i-phone-repair.component';

describe('IPhoneRepairComponent', () => {
  let component: IPhoneRepairComponent;
  let fixture: ComponentFixture<IPhoneRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IPhoneRepairComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IPhoneRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

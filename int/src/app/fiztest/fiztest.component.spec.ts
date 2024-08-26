import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiztestComponent } from './fiztest.component';

describe('FiztestComponent', () => {
  let component: FiztestComponent;
  let fixture: ComponentFixture<FiztestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiztestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiztestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

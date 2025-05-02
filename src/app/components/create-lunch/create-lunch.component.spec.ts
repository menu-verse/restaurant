import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLunchComponent } from './create-lunch.component';

describe('CreateLunchComponent', () => {
  let component: CreateLunchComponent;
  let fixture: ComponentFixture<CreateLunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLunchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

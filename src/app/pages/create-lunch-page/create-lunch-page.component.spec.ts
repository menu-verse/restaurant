import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLunchPageComponent } from './create-lunch-page.component';

describe('CreateLunchPageComponent', () => {
  let component: CreateLunchPageComponent;
  let fixture: ComponentFixture<CreateLunchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLunchPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateLunchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

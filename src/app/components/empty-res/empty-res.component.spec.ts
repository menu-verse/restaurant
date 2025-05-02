import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyResComponent } from './empty-res.component';

describe('EmptyResComponent', () => {
  let component: EmptyResComponent;
  let fixture: ComponentFixture<EmptyResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyResComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmptyResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

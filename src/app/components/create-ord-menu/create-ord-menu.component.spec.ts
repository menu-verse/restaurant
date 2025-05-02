import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrdMenuComponent } from './create-ord-menu.component';

describe('CreateOrdMenuComponent', () => {
  let component: CreateOrdMenuComponent;
  let fixture: ComponentFixture<CreateOrdMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrdMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrdMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

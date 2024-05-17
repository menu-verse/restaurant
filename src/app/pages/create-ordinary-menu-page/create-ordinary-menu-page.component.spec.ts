import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrdinaryMenuPageComponent } from './create-ordinary-menu-page.component';

describe('CreateOrdinaryMenuPageComponent', () => {
  let component: CreateOrdinaryMenuPageComponent;
  let fixture: ComponentFixture<CreateOrdinaryMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrdinaryMenuPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrdinaryMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinaryMenuPageComponent } from './ordinary-menu-page.component';

describe('OrdinaryMenuPageComponent', () => {
  let component: OrdinaryMenuPageComponent;
  let fixture: ComponentFixture<OrdinaryMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdinaryMenuPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdinaryMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

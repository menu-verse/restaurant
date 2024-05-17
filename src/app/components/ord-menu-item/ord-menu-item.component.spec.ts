import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdMenuItemComponent } from './ord-menu-item.component';

describe('OrdMenuItemComponent', () => {
  let component: OrdMenuItemComponent;
  let fixture: ComponentFixture<OrdMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdMenuItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

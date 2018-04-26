import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuToggleComponent } from './mobile-menu-toggle.component';

describe('MobileMenuToggleComponent', () => {
  let component: MobileMenuToggleComponent;
  let fixture: ComponentFixture<MobileMenuToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileMenuToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMenuToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

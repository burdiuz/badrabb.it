import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizedProductCardComponent } from './localized-product-card.component';

describe('LocalizedProductCardComponent', () => {
  let component: LocalizedProductCardComponent;
  let fixture: ComponentFixture<LocalizedProductCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizedProductCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizedProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

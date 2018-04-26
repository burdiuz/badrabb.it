import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereToBuyPageComponent } from './where-to-buy-page.component';

describe('WhereToBuyPageComponent', () => {
  let component: WhereToBuyPageComponent;
  let fixture: ComponentFixture<WhereToBuyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereToBuyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereToBuyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

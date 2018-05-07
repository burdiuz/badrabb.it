import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizedSectionComponent } from './localized-section.component';

describe('LocalizedSectionComponent', () => {
  let component: LocalizedSectionComponent;
  let fixture: ComponentFixture<LocalizedSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizedSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

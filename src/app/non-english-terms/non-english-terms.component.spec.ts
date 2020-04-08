import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonEnglishTermsComponent } from './non-english-terms.component';

describe('NonEnglishTermsComponent', () => {
  let component: NonEnglishTermsComponent;
  let fixture: ComponentFixture<NonEnglishTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonEnglishTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonEnglishTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

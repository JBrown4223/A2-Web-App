import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishTermsComponent } from './english-terms.component';

describe('EnglishTermsComponent', () => {
  let component: EnglishTermsComponent;
  let fixture: ComponentFixture<EnglishTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

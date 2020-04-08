import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonEnglishTermDetailsComponent } from './non-english-term-details.component';

describe('NonEnglishTermDetailsComponent', () => {
  let component: NonEnglishTermDetailsComponent;
  let fixture: ComponentFixture<NonEnglishTermDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonEnglishTermDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonEnglishTermDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

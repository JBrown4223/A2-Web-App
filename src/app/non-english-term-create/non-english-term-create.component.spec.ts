import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonEnglishTermCreateComponent } from './non-english-term-create.component';

describe('NonEnglishTermCreateComponent', () => {
  let component: NonEnglishTermCreateComponent;
  let fixture: ComponentFixture<NonEnglishTermCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonEnglishTermCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonEnglishTermCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

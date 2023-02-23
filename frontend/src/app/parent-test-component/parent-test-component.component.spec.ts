import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTestComponentComponent } from './parent-test-component.component';

describe('ParentTestComponentComponent', () => {
  let component: ParentTestComponentComponent;
  let fixture: ComponentFixture<ParentTestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTestComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

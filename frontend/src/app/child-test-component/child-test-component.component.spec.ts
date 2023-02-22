import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTestComponentComponent } from './child-test-component.component';

describe('ChildTestComponentComponent', () => {
  let component: ChildTestComponentComponent;
  let fixture: ComponentFixture<ChildTestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTestComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

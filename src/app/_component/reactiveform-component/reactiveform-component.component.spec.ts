import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformComponentComponent } from './reactiveform-component.component';

describe('ReactiveformComponentComponent', () => {
  let component: ReactiveformComponentComponent;
  let fixture: ComponentFixture<ReactiveformComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveformComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveformComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

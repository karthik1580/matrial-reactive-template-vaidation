import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateformComponentComponent } from './templateform-component.component';

describe('TemplateformComponentComponent', () => {
  let component: TemplateformComponentComponent;
  let fixture: ComponentFixture<TemplateformComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateformComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateformComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

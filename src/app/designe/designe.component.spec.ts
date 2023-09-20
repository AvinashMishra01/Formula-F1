import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesigneComponent } from './designe.component';

describe('DesigneComponent', () => {
  let component: DesigneComponent;
  let fixture: ComponentFixture<DesigneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesigneComponent]
    });
    fixture = TestBed.createComponent(DesigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

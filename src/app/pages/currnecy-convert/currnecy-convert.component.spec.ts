import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrnecyConvertComponent } from './currnecy-convert.component';

describe('CurrnecyConvertComponent', () => {
  let component: CurrnecyConvertComponent;
  let fixture: ComponentFixture<CurrnecyConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrnecyConvertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrnecyConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

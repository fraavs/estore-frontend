import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavigaionComponent } from './sidenavigaion.component';

describe('SidenavigaionComponent', () => {
  let component: SidenavigaionComponent;
  let fixture: ComponentFixture<SidenavigaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavigaionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavigaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

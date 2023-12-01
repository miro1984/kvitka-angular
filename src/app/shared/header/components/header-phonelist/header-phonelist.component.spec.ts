import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPhonelistComponent } from './header-phonelist.component';

describe('HeaderPhonelistComponent', () => {
  let component: HeaderPhonelistComponent;
  let fixture: ComponentFixture<HeaderPhonelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderPhonelistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderPhonelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

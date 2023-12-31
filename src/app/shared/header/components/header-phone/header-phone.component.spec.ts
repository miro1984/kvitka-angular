import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPhoneComponent } from './header-phone.component';

describe('HeaderPhoneComponent', () => {
  let component: HeaderPhoneComponent;
  let fixture: ComponentFixture<HeaderPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderPhoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

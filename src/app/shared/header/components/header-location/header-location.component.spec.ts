import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLocationComponent } from './header-location.component';

describe('HeaderLocationComponent', () => {
  let component: HeaderLocationComponent;
  let fixture: ComponentFixture<HeaderLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

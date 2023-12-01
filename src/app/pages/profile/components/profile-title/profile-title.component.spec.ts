import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTitleComponent } from './profile-title.component';

describe('ProfileTitleComponent', () => {
  let component: ProfileTitleComponent;
  let fixture: ComponentFixture<ProfileTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

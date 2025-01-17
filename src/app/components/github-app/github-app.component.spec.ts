import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubAppComponent } from './github-app.component';

describe('GithubAppComponent', () => {
  let component: GithubAppComponent;
  let fixture: ComponentFixture<GithubAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GithubAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

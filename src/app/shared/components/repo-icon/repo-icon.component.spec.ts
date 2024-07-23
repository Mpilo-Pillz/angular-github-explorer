import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoIconComponent } from './repo-icon.component';

describe('RepoIconComponent', () => {
  let component: RepoIconComponent;
  let fixture: ComponentFixture<RepoIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepoIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

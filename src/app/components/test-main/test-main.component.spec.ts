import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMainComponent } from './test-main.component';

describe('TestMainComponent', () => {
  let component: TestMainComponent;
  let fixture: ComponentFixture<TestMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

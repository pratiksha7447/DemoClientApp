import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent], // ✅ Corrected from `imports` to `declarations`
      schemas: [NO_ERRORS_SCHEMA] // ✅ Prevents errors from unknown elements (optional)
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the title 'Angular18Practice'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular18Practice');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Angular18Practice');
  });
});

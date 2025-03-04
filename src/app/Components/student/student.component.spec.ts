import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentComponent } from './student.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Mock HttpClient if used
import { SharedServiceService } from '../services/shared-service.service'; // Adjust if needed

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // ✅ Import mock HttpClient if needed
      declarations: [StudentComponent], // ✅ Declare the component
      providers: [SharedServiceService] // ✅ Provide dependencies explicitly
    }).compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // ✅ Adding a basic test case
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

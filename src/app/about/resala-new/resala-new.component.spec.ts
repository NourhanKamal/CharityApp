import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResalaNewComponent } from './resala-new.component';

describe('ResalaNewComponent', () => {
  let component: ResalaNewComponent;
  let fixture: ComponentFixture<ResalaNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResalaNewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResalaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

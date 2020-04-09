import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CharityListComponent } from './charity-list.component';

describe('CharityListComponent', () => {
  let component: CharityListComponent;
  let fixture: ComponentFixture<CharityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CharityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

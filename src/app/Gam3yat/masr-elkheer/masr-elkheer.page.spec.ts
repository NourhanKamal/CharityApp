import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MasrElkheerPage } from './masr-elkheer.page';

describe('MasrElkheerPage', () => {
  let component: MasrElkheerPage;
  let fixture: ComponentFixture<MasrElkheerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasrElkheerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MasrElkheerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

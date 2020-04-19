import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MalyPage } from './maly.page';

describe('MalyPage', () => {
  let component: MalyPage;
  let fixture: ComponentFixture<MalyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MalyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

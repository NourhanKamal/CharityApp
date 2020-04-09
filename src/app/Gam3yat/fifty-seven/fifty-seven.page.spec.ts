import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiftySevenPage } from './fifty-seven.page';

describe('FiftySevenPage', () => {
  let component: FiftySevenPage;
  let fixture: ComponentFixture<FiftySevenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiftySevenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiftySevenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

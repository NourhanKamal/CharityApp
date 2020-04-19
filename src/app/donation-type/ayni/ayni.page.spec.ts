import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AyniPage } from './ayni.page';

describe('AyniPage', () => {
  let component: AyniPage;
  let fixture: ComponentFixture<AyniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AyniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

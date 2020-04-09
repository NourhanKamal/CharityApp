import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResalaPage } from './resala.page';

describe('ResalaPage', () => {
  let component: ResalaPage;
  let fixture: ComponentFixture<ResalaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResalaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

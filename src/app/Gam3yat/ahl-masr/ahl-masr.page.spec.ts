import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AhlMasrPage } from './ahl-masr.page';

describe('AhlMasrPage', () => {
  let component: AhlMasrPage;
  let fixture: ComponentFixture<AhlMasrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhlMasrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AhlMasrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

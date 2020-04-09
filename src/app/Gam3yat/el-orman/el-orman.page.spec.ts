import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElOrmanPage } from './el-orman.page';

describe('ElOrmanPage', () => {
  let component: ElOrmanPage;
  let fixture: ComponentFixture<ElOrmanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElOrmanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElOrmanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

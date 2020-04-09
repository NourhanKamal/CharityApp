import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BankElTa3amPage } from './bank-el-ta3am.page';

describe('BankElTa3amPage', () => {
  let component: BankElTa3amPage;
  let fixture: ComponentFixture<BankElTa3amPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankElTa3amPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BankElTa3amPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

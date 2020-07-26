import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StarReviewPage } from './star-review.page';

describe('StarReviewPage', () => {
  let component: StarReviewPage;
  let fixture: ComponentFixture<StarReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarReviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StarReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

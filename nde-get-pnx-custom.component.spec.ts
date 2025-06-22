import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdeGetPnxCustomComponent } from './nde-get-pnx-custom.component';

describe('NdeGetPnxCustomComponent', () => {
  let component: NdeGetPnxCustomComponent;
  let fixture: ComponentFixture<NdeGetPnxCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NdeGetPnxCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NdeGetPnxCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

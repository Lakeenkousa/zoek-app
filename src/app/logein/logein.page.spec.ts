import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogeinPage } from './logein.page';

describe('LogeinPage', () => {
  let component: LogeinPage;
  let fixture: ComponentFixture<LogeinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogeinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

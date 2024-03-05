import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZoekPage } from './zoek.page';

describe('ZoekPage', () => {
  let component: ZoekPage;
  let fixture: ComponentFixture<ZoekPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZoekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

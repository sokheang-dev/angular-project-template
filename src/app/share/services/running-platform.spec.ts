import { TestBed } from '@angular/core/testing';

import { RunningPlatform } from './running-platform';

describe('RunningPlatform', () => {
  let service: RunningPlatform;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunningPlatform);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should execute server callback on server platform', () => {
    const callback = jasmine.createSpy('serverCallback');
    service.server(callback);
    expect(callback).toHaveBeenCalled();
  });

  it('should execute browser callback on browser platform', () => {
    const callback = jasmine.createSpy('browserCallback');
    service.browser(callback);
    expect(callback).toHaveBeenCalled();
  });
});

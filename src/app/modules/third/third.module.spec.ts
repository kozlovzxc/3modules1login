import { ThirdModule } from './third.module';

describe('ThirdModule', () => {
  let thirdModule: ThirdModule;

  beforeEach(() => {
    thirdModule = new ThirdModule();
  });

  it('should create an instance', () => {
    expect(thirdModule).toBeTruthy();
  });
});

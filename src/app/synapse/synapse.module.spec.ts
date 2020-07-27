import {SynapseModule} from './synapse.module';

describe('SynapseModule', () => {
  let synapseModule: SynapseModule;

  beforeEach(() => {
    synapseModule = new SynapseModule();
  });

  it('should create an instance', () => {
    expect(synapseModule).toBeTruthy();
  });
});

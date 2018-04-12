import { renderComponent , expect } from '../test_helper';
import Monitor from '../../src/components/monitor';

describe('Monitor' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Monitor);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});

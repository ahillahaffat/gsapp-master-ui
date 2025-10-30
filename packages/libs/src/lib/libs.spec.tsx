import { render } from '@testing-library/react';

import GsAppLibs from './libs';

describe('GsAppLibs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GsAppLibs />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import GsAppUi from './ui';

describe('GsAppUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GsAppUi />);
    expect(baseElement).toBeTruthy();
  });
});

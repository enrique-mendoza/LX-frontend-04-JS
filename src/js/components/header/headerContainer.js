import { logoComponent } from './logoComponent';
import { barComponent } from './barComponent';

export const headerContainer = () => {
  const header = `
    ${logoComponent()}

    ${barComponent()}
    `;

  return header;
};

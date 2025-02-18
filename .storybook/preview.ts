import type { Preview } from '@storybook/react';
import DocumentationTemplate from './DocumentationTemplate.mdx';

import '../src/ui/styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export default preview;

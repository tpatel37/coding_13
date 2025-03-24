import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { disable: true },  // FIXED: Removed argTypesRegex
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
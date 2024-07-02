import type { Preview } from "@storybook/react";
import "../src/styles/index.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'darkbg',
      values: [
        {
          name: 'darkbg',
          value: '#18181b',
        },
      ],
    },
  },
};

export default preview;

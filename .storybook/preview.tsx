import type { Preview } from '@storybook/react-vite';
import '../src/styles/global.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Color mode',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === 'dark' ? 'dark' : 'light';
      document.documentElement.dataset.theme = theme;
      return (
        <div data-theme={theme} style={{ minHeight: '100vh' }}>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    options: {
      storySort: {
        order: [
          'Foundations',
          ['Visual language', 'Color', 'Typography', 'Spacing', 'Sizing & density', 'Corner radius', 'Elevation', 'Responsive', 'Focus'],
          'Components',
          ['Typography', 'Icon', 'Actions', 'Forms', 'Selection', 'Feedback', 'Identity', 'Navigation'],
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'error',
    },
  },
};

export default preview;

import '../src/static/css/bootstrap-4.5.3/bootstrap.min.css';
import '../src/static/css/csg/layout.css';
import '../src/static/css/csg/overrides.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
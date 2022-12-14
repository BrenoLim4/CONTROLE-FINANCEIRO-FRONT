import { Global, MantineThemeOverride } from '@mantine/core';

import { defaultTransition } from './theme';
import { getScope } from '../api/utils';

const GlobalStyles = () => {
  return (
    <>
      <Global
        styles={(theme: MantineThemeOverride) => [
          {
            '@font-face': {
              fontFamily: 'Soleto',
              src: `url(${getScope()}/fonts/Soleto_Blk.ttf) format("truetype")`,
              fontWeight: 'bold',
            },
          },
          {
            '@font-face': {
              fontFamily: 'Soleto',
              src: `url(${getScope()}/fonts/Soleto_BlkIt.ttf) format("truetype")`,
              fontWeight: 'bold',
              fontStyle: 'italic',
            },
          },
          {
            '@font-face': {
              fontFamily: 'Soleto',
              src: `url(${getScope()}/fonts/Soleto_Rg.ttf) format("truetype")`,
              fontWeight: 'normal',
            },
          },
          {
            'html, body': {
              padding: 0,
              margin: 0,
              fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
              backgroundColor: '#FFF',
              fontSize: theme.fontSizes.md,
              color: theme.colors.dark[4],
            },
            a: {
              color: 'inherit',
              textDecoration: 'none',
            },
            '*': {
              boxSizing: 'border-box',
            },
            'figure, ul': {
              margin: 0,
              padding: 0,
            },
            'img, svg': {
              transition: defaultTransition,
            },
          },
        ]}
      />
    </>
  );
};

export default GlobalStyles;

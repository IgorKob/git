import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function TypographyH({hn, text}) {
  return (
      <ThemeProvider theme={theme}>
        <Typography variant={hn} align='center'>{text}</Typography>
      </ThemeProvider>
  );
}
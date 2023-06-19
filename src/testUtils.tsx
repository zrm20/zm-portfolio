import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";

import theme from './styles/theme'

export function renderWithTheme(component: JSX.Element) {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {component}
      </ThemeProvider>
    </BrowserRouter>
  )
}

export function renderWithMobile(component: JSX.Element) {
  const screenWidth = theme.breakpoints.values.sm;

  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ width: screenWidth }}>
          {component}
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}
import { Container, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { theme } from "./frontEnd/mui/theme";

const AppContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default AppContainer;

import { Container, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import E_Card from "./frontEnd/components/E_Card";
import E_Creative from "./frontEnd/components/E_Creative";
import Parallax_S from "./frontEnd/components/Parallax";
import { theme } from "./frontEnd/mui/theme";

const AppContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container pt={10}>
          <Grid item xs={12}>
            <Parallax_S />
          </Grid>
          <Grid item xs={12} md={6} my={5}>
            <E_Creative />
          </Grid>
          <Grid item xs={12} md={6} my={5}>
            <E_Card />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default AppContainer;

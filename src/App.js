import { Box, Container, Typography } from "@mui/material";
import Appbar from "./components/appbar";
import { Banner } from "./components/banner";
import AppDrawer from "./components/drawer";
import Footer from "./components/footer";
import Products from "./components/products";
import Promotions from "./components/promotions";
import SearchBox from "./components/search";
import { UIProvider } from "./context/ui";



function App() {
  return (
    <>
      <Container maxWidth='xl' sx={{
        background: '#fff'
      }}>
        <UIProvider>
          <Appbar />
          <Banner />
          <Promotions />

          <Box display='flex' justifyContent='center' sx={{ p: 4 }}>
            <Typography variant="h4">Our Products</Typography>
          </Box>
          <Products />
          <Footer />
          <AppDrawer />
          <SearchBox />
        </UIProvider>
      </Container>
    </>
  );
}

export default App;

import { Box, Container, Typography } from "@mui/material";
import Appbar from "./components/appbar";
import { Banner } from "./components/banner";
import Footer from "./components/footer";
import Products from "./components/products";
import Promotions from "./components/promotions";



function App() {
  return (
    <>
      <Container maxWidth='xl' sx={{
        background: '#fff'
      }}>
        <Appbar />
        <Banner />
        <Promotions />
        <Box display='flex' justifyContent='center' sx={{ p: 4 }}>
          <Typography variant="h4">Our Products</Typography>
        </Box>
        <Products />
        <Footer />
        {
          /*
          searchBox
          appdrawer
          */
        }
      </Container>
    </>
  );
}

export default App;

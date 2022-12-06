import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import Appbar from "./components/appbar";
import { Banner } from "./components/banner";


function App() {
  return (
    <>
      <Container maxWidth='xl' sx={{
        background: '#fff'
      }}>
        <Appbar />
        <Banner />
        {
          /*
          Banner
          Promotions
          Title
          Products
          Footer
          searchBox
          appdrawer
          */
        }
      </Container>
    </>
  );
}

export default App;

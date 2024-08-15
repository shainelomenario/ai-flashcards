import Image from "next/image";
import getStripe from '@/utils/get-stripe'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Container, AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container maxWidth="100vw" style={{ padding: 0 }}> 
      <Head>
        <title> Flashcard SaaS </title>
        <meta name="description" content="Create flashcard from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar> 
          <Typography variant="h6" style={{ flexGrow: 1}}> Flashcard SaaS </Typography>
            <SignedOut>
              <Button color="inherit"> Login </Button>
              <Button color="inherit"> Sign Up </Button>
            </SignedOut> 
            <SignedIn>
              <UserButton /> 
            </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx = {{textAlign: 'center', my: 4}}> 
        <Typography variant = 'h2'> Hi! Welcome to Flashcard SaaS </Typography>
        <Typography variant = 'h5'> Easiest way to make flashcards from your text </Typography>
        <Button variant="contained" color="primary" sx = {{mt: 2}}> Get Started </Button>
      </Box> 
      <Box sx = {{my: 6}}>
        <Typography> </Typography>

      </Box>
    </Container>
  );
}
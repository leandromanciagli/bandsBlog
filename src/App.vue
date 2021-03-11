<template>
  <v-app>
    <v-main>
      <Navbar/>
      <Home/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Home,
    Navbar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<template>
    <div>
      <Header />
      <Mainbody />
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  import Mainbody from '../components/Mainbody.vue'
  //import Card from '../components/Card.vue';
  
  export default {
    components: { Header, Mainbody, Footer },
  };
  </script>




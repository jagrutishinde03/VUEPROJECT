<template>
    <header>
      <Button1 label="Menu" @click="handleMenuClick" />
      <TextField placeholder="Search..." @input="handleSearch" />
      <Button2 label="Profile" @click="navigateToProfile" />

    </header>
  </template>
  
  <script>
  import Button1 from "./Button1.vue";
  import TextField from "./TextField.vue";
  import Button2 from "./Button2.vue";
  import { useRouter } from "vue-router";
  
  export default {
    components: { Button1, TextField, Button2 },
    setup() {
      const router=useRouter();

      const navigateToProfile=()=>{
        router.push("/profile");
      };

      const handleMenuClick=()=> {
        console.log("Menu clicked");
      };
      
      const handleSearch=(value)=> {
        console.log("Search:", value);
      };

      return {navigateToProfile, handleMenuClick, handleSearch};
    },
  };
  </script>
  
  <style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #282829;
}
</style>


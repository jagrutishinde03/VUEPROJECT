<template>
    <div class="card">
      <img :src="image" alt="Card image" class="card-image"/>
      <div class="card-text">
      <h3>{{ title }}</h3>
      <small>Views: {{ viewCount }} </small>
      <h4>Created by: {{ creator }}</h4>
      <br>
      <p>{{ description }}</p>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: String,
      title: String,
      viewCount: Number,
      creator: String,
      description: String,
    },
    methods:{
      handleClick(){
        this.$emit('card-clicked');
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    display: flex;
    align-items: flex-start;
    border: 1px rgb(61, 137, 252);
    padding: 10px;
    margin-bottom: 20px; 
    border-radius: 5px;
    background-color: #000000;
    text-align: left;
    cursor: pointer;
  }

  .card-image{
    max-width: 300px;
    height: auto;
    border-radius: 5px;
    margin-right: 15px;
    object-fit: cover;
  }

  .card-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h3{
    margin: 0;
    font-size: 18px;
  }

  small{
    color: #666;
  }

  h4{
    margin: 5px 0;
    font-size: 16px;
  }

  p{
    margin:5px;
    font-size:14px;
    line-height: 1.5;
  }
  </style>
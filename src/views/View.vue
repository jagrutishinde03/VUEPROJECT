<template>
  <div>
    <Header />
    <main>
      <ExpandedCard 
        :title="title" 
        :viewCount="viewCount" 
        :creator="creator" 
        :likeCount="likeCount" 
        :dislikeCount="dislikeCount"
        :imgSrc="imgSrc" 
        :desc="desc"
        @update-like="updateLikeCount" 
        @update-dislike="updateDislikeCount"  
      />
      <TextField placeholder="Add a comment..." @input="handleComment" />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import ExpandedCard from '../components/ExpandedCard.vue';
import TextField from '../components/TextField.vue';
import Footer from '../components/Footer.vue';
import data from '@/assets/config/data.json'; // Importing the JSON data

export default {
  components: { Header, ExpandedCard, TextField, Footer },
  data() {
    return {
      title: '',
      viewCount: 0,
      creator: '',
      likeCount: 0,
      dislikeCount: 0,
      imgSrc: '',
      desc: ''
    };
  },
  created() {
    const id = this.$route.params.id; // Get the 'id' parameter from the URL
    console.log('Fetching data for ID:', id); // Debugging: Check the id being passed

    // Fetch the card data from JSON
    const cardData = this.fetchCardData(id);
    console.log('Fetched Card Data:', cardData); // Debugging: Check the fetched data
    if (cardData) {
      this.title = cardData.title;
      this.viewCount = cardData.views;
      this.creator = cardData.creator;
      this.likeCount = cardData.likes || 0;
      this.dislikeCount = cardData.dislikes || 0;
      this.imgSrc = cardData.imgSrc || ''; // Ensure imgSrc is correctly set
      this.desc = cardData.desc || ''; // Ensure description is set
    } else {
      console.error('Card data not found for ID:', id);
    }
  },
  methods: {
    // Fetch the card data based on the ID from the imported JSON data
    fetchCardData(id) {
      // Find the card that matches the provided id
      return data.find(card => card.id === parseInt(id));
    },
    updateLikeCount(newLikeCount) {
      this.likeCount = newLikeCount; // Update the like count in the parent component
    },
    updateDislikeCount(newDislikeCount) {
      this.dislikeCount = newDislikeCount; // Update the dislike count in the parent component
    },
    handleComment(value) {
      console.log('Comment:', value); // Handle comment input
    },
  },
};
</script>

<style scoped>
main {
  padding: 10px;
  background-color: rgb(19, 18, 18);
  color: rgb(255, 255, 255);
}
</style>

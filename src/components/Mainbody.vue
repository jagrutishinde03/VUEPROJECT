<template>
  <main>
    <router-link
      v-for="(item, index) in visibleCards"
      :key="item.id"
      :to="{ name: 'View', params: { id: item.id } }"
      class="card-link"  
    >
      <Card
        :image="item.imgSrc"
        :title="item.title"
        :viewCount="item.views"
        :creator="item.creator.firstname + ' ' + item.creator.lastname"
        :description="item.desc"
      />
    </router-link>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import Card from './Card.vue';
import videoData from "@/assets/config/data.json";

const videoList = ref(videoData);

const visibleCards = computed(() => {
  return videoList.value.filter((item) => !item.isHidden);
});
</script>

<style scoped>

.card-link {
  color: inherit;
  text-decoration: none;  
}

.card-link:hover {
  text-decoration: none;  
}


.card-link .card {
  color: white;  
}

main {
  padding: 10px;
  background-color: rgb(19, 18, 18);
  color: rgb(255, 255, 255);
}
</style>

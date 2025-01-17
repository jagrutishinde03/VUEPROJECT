<template>
  <div class="expanded-card">
    <h2>{{ title }}</h2>
    <img :src="imgSrc" alt="Card image" class="card-image" />
    <small>Views: {{ viewCount }} | Created by: {{ creator }}</small>
    <span v-if="likeCount > 10" class="tag popular">Popular</span>
    <span v-if="likeCount > 15" class="tag trending">Trending</span>
    <p>{{ desc }}</p>

    <div class="like-dislike">
      <button @click="incrementLike">Like ({{ likeCount }})</button>
      <button @click="incrementDislike">Dislike ({{ dislikeCount }})</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    viewCount: Number,
    creator: String,
    likeCount: Number,
    dislikeCount: Number,
    imgSrc: String,  // To show the image
    desc: String,    // To show the description
  },
  methods: {
    incrementLike() {
      this.$emit('update-like', this.likeCount + 1);
    },
    incrementDislike() {
      this.$emit('update-dislike', this.dislikeCount + 1);
    },
  },
};
</script>

<style scoped>
.expanded-card {
  padding: 20px;
  background-color: #1d1d1d;
  border-radius: 5px;
  color: white;
}

.card-image {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}

.tag {
  margin-left: 10px;
  padding: 5px;
  border-radius: 3px;
  color: white;
}

.popular {
  background-color: #ff6600;
}

.trending {
  background-color: #ff0000;
}

.like-dislike {
  margin-top: 15px;
}

.like-dislike button {
  padding: 10px 20px;
  background-color: #242424;
  color: rgb(61, 137, 252);
  border-radius: 5px;
  border-width: 0.5px;
  border-color: rgb(61, 137, 252);
  cursor: pointer;
  margin-right: 10px;
}

.like-dislike button:hover {
  background-color: #1a1a1a;
}
</style>

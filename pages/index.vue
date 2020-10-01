<template>
  <v-row>
    <v-col
      xs12
      sm8
      md6
      v-for="post in $store.state.posts"
      :key="post.id"
    >
      <post-card :post="post"></post-card>
    </v-col>
  </v-row>
</template>

<script>
import PostCard from "~/components/post-card.vue";

export default {
  components: {
    PostCard
  },
  head: {
    title: "Home"
  },
  fetch({ $axios, store }) {
    return $axios.$get("/posts").then(res => {
      store.commit("updatePosts", res);
    });
  }
};
</script>

<template>
  <div>
    <div class="posts">
      <div class="post-card" v-for="post in $store.state.posts" :key="post.id">
        <div class="post-card-body">
          <h3>
            <nuxt-link :to="`/blog/${post.id}`">
              <span @click="updateSelectedPost(post)">
                {{ post.title }}
              </span>
            </nuxt-link>
          </h3>
          <p>{{ post.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  fetch({ $axios, store }) {
    return $axios
      .$get("/posts")
      .then(res => {
        store.commit("updatePosts", res);
      });
  },
  methods: {
    updateSelectedPost(post) {
      this.$store.commit("updateSelectedPost", post);
    }
  }
};
</script>

<style scoped>
.posts {
  display: flex;
  flex-wrap: wrap;
}
.post-card {
  width: 25%;
  padding: 10px;
}
.post-card-body {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}
</style>

<template>
  <v-card class="post-card mx-auto" height="100%">
    <v-card-text>
      <h4 class="card-title display-1 text--primary">
        {{ post.title }}
      </h4>
      <p class="text--primary">
        {{ post.body }}
      </p>
    </v-card-text>
    <v-card-actions class="card-actions">
      <template v-if="isAdmin">
        <v-btn
          :to="`admin/post/${post.id}/edit`"
          text
          color="deep-purple accent-4"
        >
          Edit
        </v-btn>
        <v-btn
          text
          color="error"
        >
          Delete
        </v-btn>
      </template>
      <template v-else>
        <v-btn :to="`/post/${post.id}`" text color="deep-purple accent-4">
          <span @click="updateSelectedPost(post)">
            Read More
          </span>
        </v-btn>
      </template>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    updateSelectedPost(post) {
      this.$store.commit("updateSelectedPost", post);
    }
  }
};
</script>

<style lang="scss" scoped>
.post-card {
  padding-bottom: 50px;
  .card-title {
    margin-bottom: 20px;
  }
  .card-actions {
    position: absolute;
    bottom: 0;
  }
}
</style>

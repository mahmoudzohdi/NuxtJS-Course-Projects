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
        <!-- <v-btn
          text
          color="error"
        >
          Delete
        </v-btn> -->
        <app-modal
          button-label="Delete"
          button-color="error"
          :button-text-style="true"
        >
        <template slot-scope="{close}">
          <v-card>
            <v-card-title class="headline">
              Are you sure?
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error" :loading="deletePostLoading" text @click="deletePost(post.id, close)">
                DELETE
              </v-btn>
              <v-btn color="black" :disabled="deletePostLoading" text @click="close">
                CLOSE
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
        </app-modal>
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
import AppModal from "@/components/shared/app-modal";
export default {
  components: {
    AppModal
  },
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
  data(){
    return {
      deletePostLoading: false
    }
  },
  methods: {
    updateSelectedPost(post) {
      this.$store.commit("updateSelectedPost", post);
    },
    deletePost(postId, callback){
      this.deletePostLoading = true;
      this.$store.dispatch('deletePost', postId).then(callback).finally(() => {
        this.deletePostLoading = false;
      });
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

<template>
  <v-form v-model="valid" @submit.prevent="submit">
    <v-text-field
      label="Post Title"
      v-model="form.title"
      :rules="rules.title"
      required
    ></v-text-field>
    <v-textarea
      label="Post Body"
      v-model="form.body"
      :rules="rules.body"
      required
    ></v-textarea>
    <v-btn
      type="submit"
      color="deep-purple accent-4"
      :dark="valid"
      :loading="addPostLoading"
      :disabled="!valid"
    >
      {{submitButtonText}}
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "post-form",
  mounted(){
    this.postId && this.getPost();
  },
  data() {
    return {
      valid: false,
      addPostLoading: false,
      form: {
        title: "",
        body: ""
      },
      rules: {
        title: [
          v => !!v || "Title is required",
          v => v.length >= 15 || "Title must be at least 15 characters"
        ],
        body: [
          v => !!v || "Body is required",
          v => v.length >= 100 || "Body must be at least 100 characters"
        ]
      }
    };
  },
  computed: {
    postId(){
      return +this.$route.params.id;
    },
    submitButtonText(){
      return this.postId ? 'Save' : 'Submit'
    }
  },
  methods: {
    submit() {
      this.addPostLoading = true;
      const action = this.postId
      ? {name: 'editPost', payload: {...this.form, id: this.postId} }
      : {name: 'addPost', payload: this.form } 
      this.$store
        .dispatch(action.name, action.payload)
        .then(() => {
          this.$router.push('/admin')
        })
        .finally(() => {
          this.addPostLoading = false;
        });
    },
    getPost(){
      this.$store.dispatch('getPost', this.postId).then( post => {
        this.form.title = post.title;
        this.form.body = post.body;
      })
    }
  }
};
</script>

<style></style>

export default {
  state: () => ({
    posts: [],
    selectedPost: {}
  }),
  mutations: {
    updatePosts(state, posts){
      state.posts = posts;
    },
    updateSelectedPost(state, post){
      state.selectedPost = post;
    }
  }
}
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
  },
  actions: {
    addPost({state, commit}, payload){
      return this.$axios.$post(`/posts`, payload).then((post) => {
        commit('updatePosts', [...state.posts, post]);
      })
    },
    editPost({state, commit}, payload){
      return this.$axios.$put(`/posts/${payload.id}`, payload).then((post) => {
        commit('updatePosts', state.posts.map( post => post.id == payload.id ? payload : post));
      })
    },
    deletePost({state, commit}, postId){
      return this.$axios.$delete(`/posts/${postId}`).then(() => {
        commit('updatePosts', state.posts.filter( post => post.id != postId))
      })
    },
    getPost({state}, postId){
      const post = state.posts.find( item => item.id == postId);
      return post ? Promise.resolve(post) : this.$axios.$get(`/posts/${postId}`)
    }
  }
}
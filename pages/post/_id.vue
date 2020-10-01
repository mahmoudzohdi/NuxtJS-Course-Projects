<template>
  <div class="post-container">

    <h1 class="title">{{$store.state.selectedPost.title}}</h1>
    <p class="post-body">{{$store.state.selectedPost.body}}</p>
  </div>
</template>

<script>
export default {
  head(){
    return {
      title: this.$store.state.selectedPost.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$store.state.selectedPost.body
        }
      ]
    }
  },
  validate({params}){
    return !isNaN(params.id);
  },
  fetch({$axios, store, params}){
    if(store.state.selectedPost && store.state.selectedPost.id == params.id) return true;
    return $axios.$get(`/posts/${params.id}`).then( res => {
      store.commit('updateSelectedPost', res);
    })
  },
}
</script>

<style scoped>
.post-container{
  max-width: 900px;
  margin: 0 auto 15px;
}
.title{
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.post-body{
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
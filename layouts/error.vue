<template>
  <div>
    <h1 v-if="error.statusCode == 404">Route not found</h1>
    <h1 v-else>error happened</h1>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error-layout',
  mounted(){
    console.log(this.error);
  }
}
</script>
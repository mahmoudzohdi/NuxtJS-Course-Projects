<template>
  <div>
    <v-app-bar fixed app center>
      <ul class="list">
        <li class="list-item" v-for="(item, i) in items" :key="i">
          <v-btn :to="item.to" exact text>
            {{ item.title }}
          </v-btn>
        </li>
      </ul>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Home",
          to: "/"
        },
        {
          title: "Admin",
          to: "/admin"
        },
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
::v-deep .v-toolbar__content {
  justify-content: center;
}
.list {
  
  margin: 0;
  padding: 0;
  list-style: none;
  .list-item {
    display: inline-block;
    margin-right: 15px;
  }
}
</style>

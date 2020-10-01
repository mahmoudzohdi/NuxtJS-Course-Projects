<template>
  <v-app dark>
    
    <app-header></app-header>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <!-- <app-footer></app-footer> -->
  </v-app>
</template>

<script>
import AppHeader from '@/components/core/app-header';
// import AppFooter from '@/components/core/app-footer';
export default {
  components: {
    AppHeader,
    // AppFooter
  }
}
</script>

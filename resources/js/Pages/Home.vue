<!-- SocialHero.vue -->
<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <v-row>
          <v-col cols="12" md="8">
            <Stories />
            <FeedPosts />
          </v-col>
          <v-col cols="12" md="4" class="d-none d-md-flex">
            <SidebarContent />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '../Components/NavbarComponent.vue';
import Stories from '../Components/StoriesComponents.vue';
import FeedPosts from '../Components/FeedPostsComponents.vue';
import SidebarContent from '../Components/SidebarComponent.vue';

export default {
  name: 'SocialHero',
  components: {
    Navbar,
    Stories,
    FeedPosts,
    SidebarContent
  }
}
</script>
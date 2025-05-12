<!-- components/FeedPosts.vue -->
<template>
  <div>
    <PostCard
      v-for="(post, i) in posts"
      :key="i"
      :post="post"
      class="mb-6"
    />
  </div>
</template>

<script>
import PostCard from './PostsCardComponent.vue'

export default {
  name: 'FeedPosts',
  components: {
    PostCard
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          user: {
            username: 'carlos_viajero',
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            location: 'Barcelona, España'
          },
          image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
          caption: 'Disfrutando de un hermoso día en la playa! ☀️🏖️ #verano #vacaciones',
          likes: 1243,
          comments: 89,
          timeAgo: '2 horas',
          isLiked: false,
          isSaved: false
        },
        {
          id: 2,
          user: {
            username: 'maria_chef',
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            location: 'Ciudad de México'
          },
          image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          caption: 'Mi nueva receta favorita! Tacos de pescado con salsa de aguacate 🌮🥑 #comida #chef #recetas',
          likes: 568,
          comments: 43,
          timeAgo: '5 horas',
          isLiked: true,
          isSaved: true
        }
      ]
    }
  }
}
</script>
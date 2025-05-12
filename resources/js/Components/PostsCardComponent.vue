<!-- components/PostCard.vue -->
<template>
  <v-card class="mb-4" rounded="lg" elevation="1">
    <!-- Post Header -->
    <v-card-item>
      <template v-slot:prepend>
        <v-avatar size="40">
          <v-img :src="post.user.avatar" :alt="post.user.username"></v-img>
        </v-avatar>
      </template>
      <v-card-title class="ps-2 py-1">
        <div class="d-flex flex-column">
          <span class="text-subtitle-1 font-weight-bold">{{ post.user.username }}</span>
          <span class="text-caption text-medium-emphasis">{{ post.user.location }}</span>
        </div>
      </v-card-title>
      <template v-slot:append>
        <v-btn icon>
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
      </template>
    </v-card-item>

    <!-- Post Image -->
    <v-img
      :src="post.image"
      :alt="post.caption"
      height="450"
      cover
    ></v-img>

    <!-- Post Actions -->
    <v-card-actions>
      <v-btn variant="plain" @click="toggleLike">
        <v-icon :color="post.isLiked ? 'red' : undefined">
          {{ post.isLiked ? 'mdi-heart' : 'mdi-heart-outline' }}
        </v-icon>
      </v-btn>
      <v-btn variant="plain">
        <v-icon>mdi-comment-outline</v-icon>
      </v-btn>
      <v-btn variant="plain">
        <v-icon>mdi-send-outline</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn variant="plain" @click="toggleSave">
        <v-icon>{{ post.isSaved ? 'mdi-bookmark' : 'mdi-bookmark-outline' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <!-- Likes -->
    <v-card-text class="py-1">
      <span class="font-weight-bold">{{ post.likes.toLocaleString() }} me gusta</span>
    </v-card-text>

    <!-- Caption -->
    <v-card-text class="py-1">
      <span>
        <span class="font-weight-bold">{{ post.user.username }}</span>
        {{ post.caption }}
      </span>
    </v-card-text>

    <!-- Comments Link -->
    <v-card-text class="text-medium-emphasis py-1">
      <span>Ver los {{ post.comments }} comentarios</span>
    </v-card-text>

    <!-- Time -->
    <v-card-text class="text-caption text-medium-emphasis py-1">
      HACE {{ post.timeAgo.toUpperCase() }}
    </v-card-text>

    <!-- Add Comment -->
    <v-divider></v-divider>
    <v-card-actions>
      <v-avatar size="32">
        <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="User"></v-img>
      </v-avatar>
      <v-text-field
        variant="plain"
        density="comfortable"
        placeholder="Añade un comentario..."
        hide-details
        class="mx-2"
      ></v-text-field>
      <v-btn color="primary" variant="text">Publicar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleLike() {
      this.post.isLiked = !this.post.isLiked
      this.post.likes += this.post.isLiked ? 1 : -1
    },
    toggleSave() {
      this.post.isSaved = !this.post.isSaved
    }
  }
}
</script>
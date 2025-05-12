<!-- components/SidebarContent.vue -->
<template>
  <v-sheet class="pa-4" rounded="lg" elevation="1">
    <!-- User Profile -->
    <div class="d-flex align-center mb-6">
      <v-avatar size="56">
        <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="User"></v-img>
      </v-avatar>
      <div class="ml-3">
        <div class="font-weight-bold">usuario_actual</div>
        <div class="text-medium-emphasis">Nombre Completo</div>
      </div>
      <v-spacer></v-spacer>
      <v-btn color="primary" variant="text">Cambiar</v-btn>
    </div>

    <!-- Suggestions Header -->
    <div class="d-flex justify-space-between align-center mb-4">
      <span class="text-medium-emphasis font-weight-medium">Sugerencias para ti</span>
      <v-btn variant="text" density="comfortable" class="text-body-2">Ver todo</v-btn>
    </div>

    <!-- Suggestions List -->
    <div v-for="(suggestion, index) in suggestions" :key="index" class="d-flex align-center mb-3">
      <v-avatar size="32">
        <v-img :src="suggestion.avatar" :alt="suggestion.username"></v-img>
      </v-avatar>
      <div class="ml-3 flex-grow-1">
        <div class="font-weight-medium text-body-2">{{ suggestion.username }}</div>
        <div class="text-caption text-medium-emphasis">{{ suggestion.info }}</div>
      </div>
      <v-btn color="primary" variant="text" density="comfortable" class="text-body-2">Seguir</v-btn>
    </div>

    <!-- Footer Links -->
    <div class="mt-6">
      <div class="d-flex flex-wrap text-caption text-medium-emphasis mb-2">
        <span v-for="(link, i) in footerLinks" :key="i" class="mr-2 mb-1">
          {{ link }}
          <span v-if="i < footerLinks.length - 1">•</span>
        </span>
      </div>
      <div class="text-caption text-medium-emphasis">
        © 2025 SOCIALAPP DE TU EMPRESA
      </div>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: 'SidebarContent',
  data() {
    return {
      suggestions: [
        {
          username: 'laura_design',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          info: 'Seguida por maria_chef + 3 más'
        },
        {
          username: 'alejandro_photo',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          info: 'Nuevo en SocialApp'
        },
        {
          username: 'tech_news',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          info: 'Seguida por carlos_viajero + 8 más'
        },
        {
          username: 'viajes_mundo',
          avatar: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          info: 'Popular en tu región'
        },
        {
          username: 'recetas_faciles',
          avatar: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          info: 'Seguida por maria_chef'
        }
      ],
      footerLinks: [
        'Información',
        'Ayuda',
        'Prensa',
        'API',
        'Empleo',
        'Privacidad',
        'Términos',
        'Ubicaciones',
        'Idioma'
      ]
    }
  }
}
</script>
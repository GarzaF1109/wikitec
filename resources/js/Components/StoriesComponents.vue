<!-- components/Stories.vue -->
<template>
  <v-sheet class="mx-auto mb-6" rounded="lg" elevation="1">
    <v-slide-group
      show-arrows
      class="pa-4"
    >
      <v-slide-group-item v-for="(story, i) in stories" :key="i">
        <v-avatar
          size="80"
          class="ma-2"
          style="cursor: pointer"
        >
          <v-avatar size="76" color="white">
            <v-img :src="story.avatar" :alt="story.name"></v-img>
          </v-avatar>
          <v-avatar
            v-if="!story.viewed"
            color="transparent"
            size="80"
            style="border: 2px solid #E1306C; position: absolute; top: 0; left: 0"
          ></v-avatar>
          <div class="text-center mt-1 text-caption text-truncate" style="max-width: 80px">
            {{ story.name }}
          </div>
        </v-avatar>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  name: 'Stories',
  data() {
    return {
      stories: [
        {
          name: 'Tu historia',
          avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
          viewed: true
        },
        {
          name: 'Carlos',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          viewed: false
        },
        {
          name: 'Maria',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          viewed: false
        },
        {
          name: 'Pedro',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          viewed: true
        },
        {
          name: 'Laura',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          viewed: false
        },
        {
          name: 'Miguel',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          viewed: true
        },
        {
          name: 'Sofia',
          avatar: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          viewed: false
        },
        {
          name: 'David',
          avatar: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          viewed: false
        }
      ]
    }
  }
}
</script>
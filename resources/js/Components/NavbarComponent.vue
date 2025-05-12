<!-- components/Navbar.vue -->
<template>
  <v-app-bar flat color="white" elevation="1">
    <v-container class="py-0 fill-height">
      <v-row align="center" justify="space-between">
        <!-- Logo -->
        <v-col cols="3">
          <v-btn variant="plain" to="/" class="text-h5 font-weight-bold">
            SocialApp
          </v-btn>
        </v-col>

        <!-- Search Bar -->
        <v-col cols="4" class="d-none d-sm-flex">
          <v-text-field
            density="compact"
            variant="outlined"
            hide-details
            placeholder="Buscar"
            append-inner-icon="mdi-magnify"
            single-line
            class="rounded-pill"
          ></v-text-field>
        </v-col>

        <!-- Navigation Icons -->
        <v-col cols="5" class="d-flex justify-end">
          <v-btn icon size="large">
            <v-icon>mdi-home</v-icon>
          </v-btn>
          <v-btn icon size="large">
            <v-icon>mdi-message-outline</v-icon>
          </v-btn>
          <v-btn icon size="large">
            <v-icon>mdi-plus-box-outline</v-icon>
          </v-btn>
          <v-btn icon size="large">
            <v-icon>mdi-compass-outline</v-icon>
          </v-btn>
          <v-btn icon size="large">
            <v-icon>mdi-heart-outline</v-icon>
          </v-btn>
          <v-avatar size="32" class="ml-2">
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="User"></v-img>
          </v-avatar>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
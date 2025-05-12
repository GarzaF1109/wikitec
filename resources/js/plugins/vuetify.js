// resources/js/plugins/vuetify.js

// 1. Estilos base de Vuetify
import 'vuetify/styles'

// 2. Crear Vuetify con componentes/directivas
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// 3. Iconos (Material Design Icons)
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

// 4. Tema personalizado (opcional)
const customTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
}

// 5. Instancia Vuetify con todo lo anterior
export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme,
    },
  },
  // rtl: true, // Descomenta si necesitas compatibilidad RTL
})

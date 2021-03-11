<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          elevation="2"
          large
        ><router-link to="/comentarios" class="router-link">Dejanos tus comentarios</router-link></v-btn>
      </v-card-text>

      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Este es un Blog informativo acerca de los últimos trabajos discográficos de las mejores bandas de hard rock de los años '70. Para visualizar la información de cada uno de los álbumes, presione en el menú desplegable en la parte superior derecha de la pantalla y seleccione el artista deseado. Este trabajo es un proyecto de prueba con VueJs y Vuetify.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>BandsBlog</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
<template>
  <div>
    <v-app-bar
      color="indigo lighten-1"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>BandsBlog</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="() => {}">
            <v-list-item-title>AC/DC</v-list-item-title>
          </v-list-item>

          <v-list-item @click="() => {}">
            <v-list-item-title>Black Sabbath</v-list-item-title>
          </v-list-item>

          <v-list-item @click="() => {}">
            <v-list-item-title>Deep Purple</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
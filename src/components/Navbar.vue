<template>
  <div>
    <v-app-bar
      color="indigo lighten-1"
      dense
      dark
    >
      <v-toolbar-title>  
        <router-link class="router-link"
          :to="{
            name: 'Home'
          }"
        >
          BandsBlog
        </router-link>

      </v-toolbar-title>

      <v-spacer></v-spacer>

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
          <v-list-item>
            <v-list-item-title> 
              <router-link
                :to="{
                  name: 'VerUltimoAlbum',
                  params: { albumId: '3bTNxJYk2bwdWBMtrjBxb0' }
                }"
              >
                AC/DC
              </router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <router-link
                :to="{
                  name: 'VerUltimoAlbum',
                  params: { albumId: '5WXL9YjbNd4GIqWc9mZOOq' }
                }"
              >
                Black Sabbath
              </router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <router-link
                :to="{
                  name: 'VerUltimoAlbum',
                  params: { albumId: '2TFJQM2nlH4zIA5yuqKHQU' }
                }"
              >
                Deep Purple
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >

    <v-img
      src="pwrup.jpg"
    ></v-img>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-card-title>AC/DC - PWRUP</v-card-title>
        <v-rating
          :value="5.0"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          5.0
        </div>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-title>Tracks</v-card-title>
    <v-card-text>
        «Realize»	3:37
        <br>
        «Rejection»	4:06
        <br>
        «Shot in the Dark»	3:06
        <br>
        «Through the Mists of Time»	3:32
        <br>
        «Kick You When You're Down»	3:10
        <br>
        «Witch's Spell»	3:42
        <br>
        «Demon Fire»	3:30
        <br>
        «Wild Reputation»	2:54
        <br>
        «No Man's Land»	3:39
        <br>
        «Systems Down»	3:12
        <br>
        «Money Shot»	3:05
        <br>
        «Code Red»"     3:31
    </v-card-text>

 
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      
    },
  }
</script>
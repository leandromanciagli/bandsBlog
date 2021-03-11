<template>
  <v-carousel v-model="model" cycle>
    <v-carousel-item>
      <v-sheet height="100%" tile>
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">
            <h1>AC/DC</h1>
            <v-img 
             max-height="700"
             max-width="1000" 
             src="acdc.jpg"
            ></v-img>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>

    <v-carousel-item>
      <v-sheet height="100%" tile>
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
         <div class="display-3">
          <h1>Black Sabbath</h1>
          <v-img 
             max-height="700"
             max-width="1000" 
             src="blacksabbath.jpg"
          ></v-img>
         </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>

        <v-carousel-item>
      <v-sheet height="100%" tile>
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">
           <h1>Deep Purple</h1>
            <v-img 
             max-height="700"
             max-width="1000" 
             src="deeppurple.jpg"
            ></v-img>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>

  </v-carousel>
</template>

<script>
  export default {
    data: () => ({
      model: 0,
    }),
  }
</script>
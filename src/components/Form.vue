<template>
  <form>
    <v-text-field
      v-model="name"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>

    <v-textarea
        name="comentarios"
        label="Comentarios"
        v-model="comentarios"
    ></v-textarea>

    <v-btn
      class="mr-4"
      @click="submit"
    >
      submit
    </v-btn>

  </form>
</template>

<script>
 
  export default {

    data: () => ({
      name: '',
      email: '',
      comentarios: '',
    }),

    methods: {
      submit () {
        localStorage.setItem("comentarios", this.comentarios);
        console.log(localStorage.getItem("comentarios"));
      },
    },
  }
</script>
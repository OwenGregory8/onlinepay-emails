<template>
  <v-container>
    <v-row>
      <v-col> {{ stats }} </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "stats",
  data: () => ({
    stats: "",
  }),
  mounted() {
    axios
      .get("https://api.postmarkapp.com/stats/outbound")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },
};
</script>

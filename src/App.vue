<template>
  <v-app>
    <v-content>
      <playground></playground>
      <stats></stats>
    </v-content>
  </v-app>
</template>

<script>
import Playground from "./components/Playground";
import Stats from "./components/Stats";

export default {
  name: "App",
  components: {
    Playground,
    Stats,
  },
};
</script>


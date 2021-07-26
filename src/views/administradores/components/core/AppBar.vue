<template>
  <v-app-bar app absolute color="grey lighten-2" height="75">
    <v-btn class="mr-3" elevation="1" fab small @click="setDrawer(!drawer)">
      <v-icon v-if="value"> mdi-view-quilt </v-icon>

      <v-icon v-else> mdi-dots-vertical </v-icon>
    </v-btn>

    <v-toolbar-title class="hidden-sm-and-down font-weight-light" />

    <v-spacer />

    <div class="mx-3" />

    <v-btn class="ml-2" min-width="0" text :to="{ name: 'Administrador' }">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
// Components

// Utilities
import { mapState, mapMutations } from "vuex";

export default {
  name: "AdministradorCoreAppBar",
  components: {},
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({}),

  computed: {
    ...mapState(["drawer"]),
  },

  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER",
    }),
  },
};
</script>

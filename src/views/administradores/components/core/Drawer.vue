<template>
  <v-navigation-drawer
      v-model="drawer"
      color="secondary"
      :dark="true"
      app
      clipped
      temporary
    >
      <template v-slot:img="props">
        <v-img :gradient="`to bottom`" v-bind="props" />
      </template>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
          router
          :to="item.route"
        >
          <v-list-item-action>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block >Cerrar Sesión</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapState, mapMutations } from "vuex";
export default {
  name: "AdministradorCoreDrawer",
  data: () => ({
    items: [
          // {
          //   title: "carreraAdmin",
          //   to: { name: "carreraAdmin" },
          // },
          {
            icon: "mdi-home",
            text: "Home",
            route: "/Game/Administrador",
          },
          {
            icon: "mdi-bank",
            text: "Compañias",
            route: "/Game/Administrador/Pages/Compañias",
          },
        ],

    // items: [
    //   {
    //     title: "administrar",
    //     to: { name: "carreraAdmin" },
    //     children: [
    //       // {
    //       //   title: "carreraAdmin",
    //       //   to: { name: "carreraAdmin" },
    //       // },
    //       {
    //         title: "MaterialesAdmin",
    //         to: { name: "MaterialesAdmin" },
    //       },
    //       {
    //         title: "cuentasAdmin",
    //         to: { name: "cuentasAdmin" },
    //       },
    //       {
    //         title: "tutoresAdmin",
    //         to: { name: "tutoresAdmin" },
    //       },
    //     ],
    //   },
    // ],
  }),
  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(["barColor", "barImage", "cuenta"]),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      },
    },
    profile() {
      return {
        avatar: true,
      };
    },
  },
  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER",
    }),
  },
};
</script>

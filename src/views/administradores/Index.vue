<template>
  <v-app>
    <administrador-core-app-bar />

    <administrador-core-drawer />

    <administrador-core-view />

    <administrador-core-footer />
  </v-app>
</template>

<script>
  export default {
    name: 'AdministradorIndex',

    components: {
      AdministradorCoreAppBar: () => import('./components/core/AppBar'),
      AdministradorCoreDrawer: () => import('./components/core/Drawer'),
      AdministradorCoreView: () => import('./components/core/View'),
      AdministradorCoreFooter: () => import('./components/core/Footer'),
    },
  }
</script>

<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <v-card centered class="mx-auto" max-width="1200" outlined>
      <v-data-table :headers="headers" :items="companys" class="elevation-1">
        <template v-slot:top>
          
        </template>
        <template v-slot:item.acciones="{ item }">
          <v-icon dark class="mr-2" color="green" @click="ViewItem(item)">
            mdi-eye
          </v-icon>
          <v-icon dark class="mr-2" color="blue" @click="editItem(item)">
            mdi-circle-edit-outline
          </v-icon>
          <v-icon dark color="red" @click="deleteItem(item)">
            mdi-delete-circle
          </v-icon>
        </template>
        <template v-slot:no-data>
          No se encontraron registros en la base de datos.
        </template>
      </v-data-table>
    </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Index",
  data: () => ({
    search: "",
    items: {},
    companys: [],
    headers: [
      { text: "Id", value: "IdCompany" },
      { text: "Nombre", value: "Nombre" },
      { text: "Estado", value: "Estado" },
      { text: "Acciones", value: "acciones", sortable: false },
    ],
  }),
  mounted() {
    fetch(process.env.VUE_APP_URL_BACKEND + "/api/videogames/companys", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((companys) => {
        console.log(companys)
        this.companys = companys;
      });
  },
}
</script>

<style>

</style>
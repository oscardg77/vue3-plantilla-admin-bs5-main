<template>
  <div class="app-card app-card-settings shadow-sm p-4">
    <div class="app-card-body">
      <form class="settings-form" @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="nombre" class="form-label">nombre</label>
          <input
            type="text"
            class="form-control"
            id="setting-input-2"
            v-model="nombre"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">email</label>
          <input
            type="email"
            class="form-control"
            id="setting-input-3"
            v-model="email"
          />
        </div>
        <button type="submit" class="btn app-btn-primary">
          Save Changes
        </button>
      </form>
    </div>
    <!--//app-card-body-->
  </div>
</template>

<script>

import estudianteService from "@/service/estudianteService.js";

export default {
  
    data() {

    return {

       nombre: null,

       email: null,

    };
   
   },


    onSubmit() {

      let estudianteNuevo = {

        nombre: this.nombre,

        email: this.email,

      };

           estudianteService

        .createEstudiante(estudianteNuevo)

        .then((respuesta) => {

          console.log(respuesta.data);

          this.actualizado();

        })

        .catch((error) => {

          console.log(error);

        });

   }



}
</script>

<style></style>

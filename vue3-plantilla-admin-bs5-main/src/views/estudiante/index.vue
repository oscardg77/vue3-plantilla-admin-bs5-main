<template>
  <div>
    <h1 class="app-page-title">estudiantes</h1>

    <div class="row g-4 mb-4">
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
    </div>

    <div class="col-12">
      <div class="row">
        <div
          v-for="estudiante in estudiantes"
          :key="estudiante.id"
          class="col-lg-2 col-md-3 col-sm-6"
        >
          <estudianteCard
            @estudiante-borrado="actualizarListado"
            :estudiante="estudiante"
          ></estudianteCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import estudianteCard from "@/components/estudianteCard.vue";

import estudianteService from "@/service/estudianteService.js";

export default {

  components: {

    estudianteCard,

    estudianteService,
  },

  data() {

    return {

      estudiantes: [],

      nuevoEstudiante: null,

      nombre: null,

      email: null,

    };
  },

  created() {

    estudianteService

      .getEstudiantes()

      .then((respuesta) => {

        this.estudiantes = respuesta.data;

      })

      .catch((error) => {

        console.log(error);
        
      });
  },

  methods: {

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

      // this.$emit('review-submitted', productReview)

      this.nombre = "";

      this.email = "";
    },

    actuaLizado() {

      let estudianteNuevo = {

        nombre: this.nombre,

        email: this.email,

      };

      estudianteService

        .getEstudiante()

        .then((respuesta) => {

          this.estudiante = respuesta.data;

          console.log("actualizado");
        })

        .catch((error) => {

          console.log(error);

        });
    }
  }
};
</script>

<style></style>

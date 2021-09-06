<template>
 <div>
    <h1 class="app-page-title">estudiante {{ estudiante.nombre }}</h1>

    <!-- row -->
    <div class="row g-4 mb-4">
      <!-- col -->
      <div class="col-12">
         
         <p>{{ estudiante.email }}</p>
        
           <p>{{ estudiante.created_at }}</p>
      </div>
      <!--//col-->
    </div>
    <!--//row-->
  </div>


</template>

<script>
export default {

   props: ['id'],

    data() {

        return {
            estudiante: null
        }
    },

     created(){

        estudianteServices

        .getEstudiante()

        .then(respuesta => {

           this.estudiante = respuesta.data

        } )

        .catch(error => {

            console.log(error)
            
        })
    }
        

};


</script>

<style>

</style>
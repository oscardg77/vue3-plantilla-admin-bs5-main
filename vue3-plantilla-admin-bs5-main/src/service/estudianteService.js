import axios from 'axios'

const apiCliente = axios.create({
    baseURL: 'http://estudiante.test/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
    }
})

export default {
    getEstudiantes() {
        return apiCliente.get('/estudiante')
    },
    getEstudiante(id) {
        return apiCliente.get('/estudiante/'+id)
    },
    deleteEstudiante(id) {
        return apiCliente.delete('/estudiante/'+id)
    },
    createEstudiante(estudiante) {
        return apiCliente.post('/estudiante/', estudiante)
    },
    updateEstudiante(id, estudiante) {
        return apiCliente.put('/estudiante/'+id, estudiante)
    },
}
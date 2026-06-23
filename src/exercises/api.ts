import axios from 'axios'

// Instancia única de axios: la URL base vive acá, en un solo lugar.
// En una app real acá también irían headers comunes, interceptors de auth, etc.
export const Api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

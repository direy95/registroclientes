import { clientServices } from "../service/client-service.js";

const obtenerInfo = () => {
    //URL nos consigue la url de la screen actual en modo objeto
    const url = new URL(window.location);
    // search params busca todo en url que tenga id
    const id = (url.searchParams.get("id"));

    if(id==null){
        window.location.href = "/screens/error.html"
    }
    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");
    clientServices.detalleCliente(id).then(perfil => {
        nombre.value = perfil.nombre;
        email.value = perfil.email;
    });
} 

obtenerInfo();

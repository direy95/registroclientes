import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInfo = async () => {
    //URL nos consigue la url de la screen actual en modo objeto
    const url = new URL(window.location);
    // search params busca todo en url que tenga id
    const id = (url.searchParams.get("id"));
    if(id==null){
        window.location.href = "/screens/error.html"
    }

    const perfil = await clientServices.detalleCliente(id) 
        nombre.value = perfil.nombre;
        email.value = perfil.email;
}

obtenerInfo();

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const url = new URL(window.location);
    const id = (url.searchParams.get("id"));

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    console.log(nombre, " - ", email);
    clientServices.actualizarCliente(nombre, email, id).then(() =>{
        window.location.href = "/screens/edicion_concluida.html";
    })
})

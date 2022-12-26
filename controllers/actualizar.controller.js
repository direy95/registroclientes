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

    try {
        const perfil = await clientServices.detalleCliente(id);
        if(perfil.nombre && perfil.email){
            nombre.value = perfil.nombre;
            email.value = perfil.email; 
        }else{
            throw new Error();
        }     
    }catch(err){
        alert("Se encontró un error");
        console.log("Catch error: ", err);
        window.location.href = "/screens/error.html";
    }
}

obtenerInfo();

formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    const url = new URL(window.location);
    const id = (url.searchParams.get("id"));

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    console.log(nombre, " - ", email);

    await clientServices.actualizarCliente(nombre, email, id)
        window.location.href = "/screens/edicion_concluida.html";
})

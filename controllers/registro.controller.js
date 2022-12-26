import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    try{
        await clientServices.crearCliente(nombre, email)
        //Redirecciona luego de crear cliente
        window.location.href = "/screens/registro_completado.html";
    }catch(err){
        alert("Hubo un error");
        console.log("Error", err);
        window.location.href = "/screens/error.html";
    }
});
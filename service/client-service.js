/*Primero abre una conexion a la url, genera una promesa, una vez completa se recibe
y se convierte en json. Con esto se obtiene acceso a data*/ 
const listaClientes = () => fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json());

const crearCliente = (nombre, email) =>{
  return fetch("http://localhost:3000/perfil", {
    //Por defecto fetch usa GET. Para usar otro lo definimos en method
    method: "POST",
    //Sirve para que el servidor sepa que tipo de archivo va a recibir
    headers: {
      "content-type": "application/json"
    },
    /*Ponemos toda la informacion que queremos que se envíe a traves del cuerpo de la petición
    Se convierte a string ya que es lo que lee el json*/
    body: JSON.stringify({nombre, email, id:uuid.v4()}),
  });
};

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE"
    //Como no estoy mandando nada, no me interesa headers ni body
  })
}

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then(respuesta => respuesta.json());

};

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente
};
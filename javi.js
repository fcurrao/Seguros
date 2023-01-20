
     // OPCION 1: MANEJARSE CON API EXTERNA O JSON LOCAL (fetch) (traertela con una url(de una api ya realizada) o desde un archivo JSON local)
     // OPCION 2: MANEJARSE CON UNA BASE DE DATOS (SQL o otros) (fetch)
     // OPCION 3: MANEJARSE CON GOOGLE FIREBASE (base de dato con conexion)
     

     // OPCION 1: 
     // TRAERTE DATOS DE UNA API
     // ---------------------------
     // una parte de un archivo llamado propiedades .js 
     // parte del fetch: 👇
     // esto es una pagina donde realize un fetch para traerme toda la info de la API de todas las Propiedades de una inmobiliaria Mexicana (ANKARA)

     // en algun archivo donde quiero realizar la conexion con la API realizo esta funcion que llame 'componentGetMount'
     // en mi caso la voy a realizar en el archivo propiedades.js (que es donde quiero traer la info de la API)

     // instancio componentGetMount como una funcion ASYNC (asincronica: significa que hasta que el 'await' no tenga una respuesta no realiza nada)

     // componentGetMount es una funcion asincronica que tiene como parametro page=1
    const componentGetMount = async (page = 1) => {

        // ya dentro de la funcion componentGetMount, le defino una constante llamada propiedadesTotales
        //propiedadesTotales es igual a la respuesta que tenga este fetch. (por eso el 'await')
        // en el fetch() se le pone la url de la API ( y yo paso como parametro el page para seleccionar que pagina de todas las propiedades quiero que me traita)
        const propiedadesTotales = await fetch(` https://api-easybroker.onrender.com/properties?page=${page}&limit=50`)
        //                               aqui realizo la conexion 👆, y en este url es donde tienen la base de datos
        // (lo que se obtiene como 'responde', es lo que se trajo de la API) 
        // conel .then traigo la info y la transformo en formato .json 
        .then((response) => {
                return response.json()
            })
            // luego con el formato en .json se consigue 'data', y esta es la info con la que vamos a trabar (dentro de data estan todas las propiedades y sus caracteristicas)
            .then((data) => {
                console.log("PROPIEDADES :", data)
                // pongo en un estado 'PropiedadesTodas'= todas las propiedades
                setPropiedadesTodas(data.content)
                // pongo en un estado 'Pagestate'= la pagina correspondiente
                setPagestate(data.pagination)
                // me pongo todas las propiedades tambien en un Array = 'ArrayProp'
                arrayProp.push(data.content)
            })
            // me falto el .catch(error)  para atrapar el error y notificarlo 
    }

    // luego la funcion useEffect : hace que ni bien entre a este archivo (osea ni bien entra en ankararealestate.mx/PROPIEDADES) se realize la funcion "componentGetMount"
    useEffect(() => {
        componentGetMount()
    }, [])
    
    // entonces una vez que vayas a https://www.ankararealestate.mx/propiedades vas  apoder ver que tarda en cargar un rato (porque espera el fetch), una vez que va a la API y encuentra datos, los trae.
    // para modificar datos a la api, se realiza desde la URL de la API

s


// ************************************************************************************************** */


     // PONER DATOS EN LA BASE DE DATOS
     // ---------------------------------













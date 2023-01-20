import logo from './logo.svg';
import './App.css';

function App() {

  const funcionLimpiarInputs = () => {
    alert("DATOS ENVIADOS, GRACIAS!");
    document.getElementById("1").value = ""; 
    document.getElementById("2").value = ""; 
    document.getElementById("3").value = ""; 
    document.getElementById("4").value = ""; 
    document.getElementById("5").value = ""; 
    document.getElementById("6").value = ""; 
    document.getElementById("7").value = ""; 
    document.getElementById("8").value = ""; 
    document.getElementById("9").value = ""; 
    document.getElementById("10").value = ""; 
    document.getElementById("11").value = ""; 
    document.getElementById("12").value = ""; 
    document.getElementById("13").value = ""; 
    document.getElementById("14").value = ""; 
 
  }


  const funcionEnviarDatos = () => {

    let nombre=document.getElementById("1").value;
    let apellido=document.getElementById("2").value;
    let edad=document.getElementById("3").value;
    let sexo=document.getElementById("4").value;
    let pais=document.getElementById("5").value;
    let ciudad=document.getElementById("6").value;
    let ingreso=document.getElementById("7").value;
    let nivel=document.getElementById("7").value;
    let siono=document.getElementById("8").value;
    let pregunta9=document.getElementById("9").value;
    let pregunta10=document.getElementById("10").value;
    let pregunta11=document.getElementById("11").value;
    let pregunta12=document.getElementById("12").value;
    let pregunta13=document.getElementById("13").value;
    let pregunta14=document.getElementById("14").value;
 
    if(nombre== '' || apellido== ''|| edad== ''|| sexo== ''||pais== ''||ciudad== ''||ingreso== ''|| nivel== ''||siono== ''||pregunta9== ''||pregunta10== ''||pregunta11== ''||pregunta12== ''||pregunta13== ''||pregunta14 == ''){
      alert("COMPLETAR TODO");
    } else {
    console.log("respuestas: ", nombre, apellido,edad, sexo,pais,ciudad,ingreso,nivel,siono,pregunta9,pregunta10,pregunta11,pregunta12,pregunta13,pregunta14);
    // funcionEnviarDatosABDD()
    funcionLimpiarInputs()
    }
  }


  return (
    <div className="App">
      <div className='divTitulo'>
        <h1 className="textoCentrado titulo">CONSULTAS SEGUROS</h1>

        <h2 className="textoCentrado subtitulo">App</h2>
        <h3 className="textoCentrado subtitulo">Por favor ingresar los datos correspondientes</h3>
      </div>
      <div className='divInput'>
        <p>Nombre <input id='1' className='inputs'  /></p>
        <p>Apellido <input id='2' className='inputs'   /></p>
        <p>Edad <input id='3'  type='number'className='inputs' /></p>
        <p>Sexo <select  id='4' className='inputs' >
        <option>Masculino</option>
        <option>Femenino</option>
        </select></p>
        <p>Pais <input id='5' className='inputs ' /></p>
        <p>Ciudad <input id='6' className='inputs' /></p>
        <p>Ingreso mensual <input id='7' type='number' className='inputs' /></p>
        <p>Nivel Adquisitivo <input id='8' className='inputs' /></p>
        <p>SioNo <select  id='9' className='inputs' >
        <option>Yes</option>
        <option>No</option>
        </select></p>
        <p>Pregunta <input id='10' className='inputs'   /></p>
        <p>Pregunta <input id='11' className='inputs' /></p>
        <p>Pregunta <input id='12' className='inputs' /></p>
        <p>Pregunta <input id='13' className='inputs' /></p>
        <p>Pregunta <input id='14' className='inputs' /></p>
        <button onClick={()=>funcionEnviarDatos()}>Enviar datos</button>
      </div>





    </div>
  );
}

export default App;

function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch(mesDelAño)
{
case "Febrero":
		alert("si tiene 28 días.");
		break;
	case "Abril":
	case "Mayo":
	case "Septiembre":
	case "Noviembre":
		alert("si tiene 30 días.");
		break;
	case "Enero":
	case "Marzo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
		alert("si tiene 31 días.");
		break;
	default:
}
/*
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
	case "Julio":
	case "Agosto":
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
*/


}//FIN DE LA FUNCIÓN


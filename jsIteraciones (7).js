function mostrar()
{

	var respuesta='si';
	var NumeroIngresado;
	var contador=0;
	var acumulador=0;

	while(respuesta=="si")
	{
		contador=contador+1;
		NumeroIngresado=prompt("Ingrese numero");
		NumeroIngresado=parseInt(NumeroIngresado);//contador

		while(isNaN(NumeroIngresado))
		{
			NumeroIngresado=prompt("Error solo NumeroIngresado");
			NumeroIngresado=parseInt(NumeroIngresado);
		}

		acumulador=acumulador+NumeroIngresado;//acumulador
		respuesta=prompt("Ingrese si para continuar");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
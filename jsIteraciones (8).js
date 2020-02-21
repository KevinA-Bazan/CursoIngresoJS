function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';

	while(respuesta=="si")
	{
		contador=contador+1;
		NumeroIngresado=prompt("Ingrese numero");
		NumeroIngresado=parseInt(NumeroIngresado);

		if(NumeroIngresado>0)
		{
			positivo=positivo+NumeroIngresado;
		}
		else
		{
			if(NumeroIngresado>0)
			{
				negativo=negativo*NumeroIngresado;
			}
		}

		respuesta=prompt("Ingrese si para continuar");
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
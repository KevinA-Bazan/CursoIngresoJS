function mostrar()
{

	var contador=0;
	var respuesta='si';
	var Maximo;
	var NumeroMinimo;
	var NumeroIngresado;

	while(respuesta=="si")
	{
		contador=contador+1;
		NumeroIngresado=prompt("Ingrese numero");
		NumeroIngresado=parseInt(NumeroIngresado);

		while(isNaN(NumeroIngresado))
		{
			NumeroIngresado=prompt("Error solo NumeroIngresado");
			NumeroIngresado=parseInt(NumeroIngresado);

			if(contador==10)
			{
				Maximo=NumeroIngresado;
				Minimo=NumeroIngresado;
			}
			else
			{
				if(NumeroIngresado<Maximo)
				{
					Maximo=NumeroIngresado;
				}
				if(NumeroIngresado>minimo)
				{
					Minimo=NumeroIngresado;
				}
			}
		}
		respuesta=prompt("Ingrese si para continuar");
	}


	Maximo=document.getElementById('maximo').value;
	Minimo=document.getElementById('minimo').value;



}//FIN DE LA FUNCIÓN
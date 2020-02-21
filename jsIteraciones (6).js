function mostrar()
{

	var NumeroIngresado;
	var contador=0;
	var acumulador=0;

	while(contador<5)
	{
		contador=contador+1;
		NumeroIngresado=prompt("Ingrese numero");
		NumeroIngresado=parseInt(NumeroIngresado);//contador
		acumulador=acumulador+NumeroIngresado;//acumulador
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
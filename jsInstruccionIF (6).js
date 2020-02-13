function mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
/*
	if(edad>17)
	{
		alert("es mayor");
	}
	if(edad<13)
	{
		alert("es menor");
	}
	if((edad>12)&&(edad<18))
	{
		alert("adolescente");
	}
*/
/* No funciona con 17

	if(edad<13)
	{
		alert("es menor");
	}
	if(edad>17)
	{
		alert("es mayor");
	}
	else
	{
		alert("adolescente");
	}
	
*/
	if(edad<13)
	{
		alert("es menor");
	}
	else
	{
		if(edad>17)
		{
			alert("es mayor");
		}
		else
		{
			alert("adolescente");
		}
	}

}//FIN DE LA FUNCIÓN
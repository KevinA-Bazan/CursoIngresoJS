function mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if((edad<13)||(edad>18))
	{
		alert("No es adolescente");
	}

/*
	if(edad<13)
	{
		if(edad>18)
		{
			alert ("No es Adolescente");
		}
	}
}//FIN DE LA FUNCIÓN
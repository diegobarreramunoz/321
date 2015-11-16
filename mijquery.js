$(document).on('ready', function(){
	//jquery
	//declaracion de array con documentos
	var arrayNameDocument = ['documento1','documento2','documento3'];
	//declaracion string con sentencia html
	var html='';
	//recorrer array para añadir los <tr> a html
	for (var i = 0; i < arrayNameDocument.length; i++) {
		html = html + '<tr>';
		//recorrer j para añadir los <td> a html
		for (var j = 0; j <= 6; j++) {
			if (j==0) {
				html=html+'<td>'+arrayNameDocument[i]+'</td>';
			}
			else{
				html=html+'<td>'+j+'</td>';
			}
		}
		html = html + '</tr>';
	}
	//setter al html de clase="tableSignatures"
	$('.tableSignatures').html(html);


	$('#Filter').change(function(){
		var selected = $('#Filter option:selected').val();
		$('#txtSelected').val(selected);
		alert(selected);
	});

	




	//javascript
	var variable1='texto';
	var arreglo = variable1.split('');
	var variable2= arreglo.join('');

	var nicolas = new Persona('nicolas',24);

	function Persona(nombre, edad){
		this.nombre=nombre;
		this.edad = edad;
	}
})


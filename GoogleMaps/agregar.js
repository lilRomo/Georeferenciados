formulario.addEventListener('submit',(e)=> {
    e.preventDefault();
    var registro = new Registro(null,formulario.lat.value,formulario.long.value);
    registro.agregar();
    formulario.lat.value ='';
    formulario.long.value ='';
    $('#ubicacion').modal('hide');
});
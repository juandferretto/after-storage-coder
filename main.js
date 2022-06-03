let arrayProductos = productos;

function rellenarTabla(array){
    
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = '';

    for(const producto of array){

        const tr = document.createElement("tr");

        tr.innerHTML = `<td><img src='${producto.imagen}'></td>
                        <td>${producto.nombre}</td>
                        <td>${producto.precio}</td>`
        
        
        tbody.appendChild(tr);

    }

}

const storage = JSON.parse(localStorage.getItem("filtro"));

if(storage){
    arrayProductos = storage;
}

rellenarTabla(arrayProductos);

const inputRadio = document.getElementsByClassName("radio");

for(const input of inputRadio){
    input.addEventListener("change", filtrarTabla)
}

function filtrarTabla(evento){
    let inputValue = evento.target.value.toUpperCase();
    
    if(inputValue != "TODOS"){
        arrayProductos = productos.filter((elemento) => {
            return elemento.tipo.toUpperCase() === inputValue;
        })
    }else{
        arrayProductos = productos;
    }

    localStorage.setItem("filtro", JSON.stringify(arrayProductos));

    rellenarTabla(arrayProductos);

}
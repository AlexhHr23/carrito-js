// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

let elementosCarrito = [];

const agregarCurso = (e) => {
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')){
        const card = e.target.parentElement;
        console.log(card);
        const id = e.target.getAttribute('data-id');
        const title = card.querySelector('h4').innerText;
        const precio = card.querySelector('.precio span').innerText;
        const imagenContainer = card.parentElement;
        const imagen = imagenContainer.querySelector('img').src;
        elementosCarrito.push({
             id: id,
             name: title, 
             price: precio, 
             imagen: imagen,
             cant: 1
        });
        llenaCarrito(elementosCarrito);
    }
    
}

const llenaCarrito = elementosCarrito => {
    contenedorCarrito.innerHTML = '';
    elementosCarrito.forEach(item => {
    const filaTabla = document.createElement('tr');
    const contFila = 
    `<td><img src = '${item.imagen}' width=100></img></td>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>${item.cant}</td>
    <td>${item.price}</td>
    <td>X</td>
    `;
    filaTabla.innerHTML = contFila;
    filaTabla.setAttribute('data-id', item.id);
    contenedorCarrito.appendChild(filaTabla);
    });
}

listaCursos.addEventListener('click', agregarCurso);

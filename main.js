class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

let carrito = [];

const agregarAlCarrito = () => {
  const nombre = prompt("Ingrese el nombre del producto:");
  const precio = parseFloat(prompt("Ingrese el precio del producto:"));
  
  if (!isNaN(precio) && nombre) {
    const producto = new Producto(nombre, precio);
    carrito.push(producto);
    actualizarCarrito();
  } else {
    alert("Por favor, ingrese un nombre válido y un precio numérico.");
  }
};

const actualizarCarrito = () => {
  const itemsDiv = document.getElementById('items');
  itemsDiv.innerHTML = '';
  
  carrito.forEach(producto => {
    const item = document.createElement('div');
    item.innerText = `${producto.nombre} - $${producto.precio}`;
    itemsDiv.appendChild(item);
  });
};

const checkoutButton = document.getElementById('checkout');
checkoutButton.addEventListener('click', () => {
  let total = 0;
  carrito.forEach(producto => {
    total += producto.precio;
  });
  
  if (total === 0) {
    alert ("No hay productos en el carrito")
  } else {
    alert(`Total de la compra: $${total}`);
  }
});

// Solicitar al usuario agregar productos al carrito
const cantidadProductos = parseInt(prompt("¿Cuántos productos desea agregar al carrito?"));
if (!isNaN(cantidadProductos) && cantidadProductos > 0) {
  for (let i = 0; i < cantidadProductos; i++) {
    agregarAlCarrito();
  }
} else {
  alert("Ingrese un número válido de productos.");
}

// Función para eliminar un producto del carrito por su índice
const eliminarDelCarrito = () => {
  const index = parseInt(prompt("Ingrese el índice del producto a eliminar (comenzando desde el cero):"));
  
  if (!isNaN(index) && index >= 0 && index < carrito.length) {
    carrito.splice(index, 1);
    actualizarCarrito();
  } else {
    alert("Ingrese un índice válido para eliminar el producto.");
  }
};


// Evento para eliminar productos del carrito
const eliminarButton = document.getElementById('eliminar');
eliminarButton.addEventListener('click', eliminarDelCarrito);

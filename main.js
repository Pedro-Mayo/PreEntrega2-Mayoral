const listaProductos = [];

class Productos{
    constructor(nombre, stock, precio){
        this.Id = listaProductos.length;
        this.Nombre = nombre;
        this.Stock = stock;
        this.Precio = precio;
        listaProductos.push(this);
    }
};
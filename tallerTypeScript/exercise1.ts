// 1. Define an interface to represent a product:
//    a. The interface must include properties for the product name, price, and category.
//    b. Create a class that implements the product interface.
//    c. Instantiate a product object and assign values to its properties.


// a. Interface
// Recordemos que una interfaz es un contrato
interface Product{
    name: string,
    price: number,
    category: string
}

// b. Class
//El implements significa, usted debe parecerse a la interface y tener además sus propias variables.
class ImplementedProduct implements Product{
    name: string;
    price: number;
    category: string;

    //Definición de contexto o inyección de dependencias
    //El this es un modificador de contexto. Significa que el contexto de esta variable ahora es el de esta clase
    constructor(name: string, price: number, category: string){
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

// c. Objects
const product1: Product = new ImplementedProduct('Guitar', 2000000, "Electric");
console.log(product1);

const product2: Product = new ImplementedProduct('Drum', 5000000, 'Snare drum');
console.log(product2);


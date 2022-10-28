class Ninja {
    nombre;
    vida = 100;
    velocidad=3; //con javascrip no debiera poder dejarse privada
    fuerza = 3;  //con javascrip no debiera poder dejarse privada

    constructor (inNombre) {
        this.nombre = inNombre;
        
    }

    sayName(){
        console.log(this.nombre);
    }
    showStats(){
        console.log('nombre:' + this.nombre + ', vidas:' + this.vida + ', fuerza:' + this.fuerza + ', velocidad:' + this.velocidad  );
    }
    drinkSake(){
        this.vida += this.vida + 10;
    }
}


var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "El nombre de mi ninja es Hyabusa"
ninja1.showStats();
// -> "Nombre: Hayabusa, vida: 100, velocidad: 3, fuerza: 3"
ninja1.drinkSake();
ninja1.showStats();
// -> "Nombre: Hayabusa, vida: 100, velocidad: 3, fuerza: 3"
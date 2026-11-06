// diccionario
const usuario = {
    nombre: "Maria", 
    apellido: "Gomez", 
    edad: 25, 
    direccion: {
        calle: "Transversal 198 # 200-260", 
        ciudad: "Bogota", 
        pais: "Colombia"
    }
};
// metodo con this
function presentarse () {
    return `Hola, soy ${this.nombre} 
    ${this.apellido}, tengo ${this.edad} años y 
    vivo en ${this.direccion.ciudad}, 
    ${this.direccion.pais}.`;
}

usuario.presentarse = presentarse;

console.log(usuario.presentarse());
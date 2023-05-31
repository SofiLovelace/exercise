function stringObject(text) {
  // Convertir el string a array
  const arrayString = text.split('')
  // Iterar el array e ir ingresando cada elemento en un nuevo array, verificando si el elemento no esta en este nuevo array
  const newArray = []
  arrayString.forEach(element => {
    if (newArray.includes(element) === false) {
      newArray.push(element)
    }
  })
  // Crear un objeto vacio para ir ingresando cada elemento que iteraremos despues
  const countRepeat = {}
  // inicializamos una variable en donde almacenaremos el resultado de la suma
  let sumFinish = 0
  // Creaos una  funcion recursiva, se llamara a si misma siempre y cuando se cumpla una condicion
  function countElements(indexElement, count, element) {
    const index = arrayString.indexOf(element, indexElement)
    if (index >= 0) {
      count++
      countElements(index + 1, count, element)
    } else {
      sumFinish = count
      return count
    }
  }
  // Iterar el nuevo array, verificando cuantas veces se repite cada elemento en el array original, agregar cada elemento iterado como propiedad del objeto  creado previamente
  newArray.forEach(element => {
    // llamamos a nuestro función recursiva ppor cada elemento iterado
    countElements(0, 0, element)
    // Añadimos el elemento en el objeto que creamos previamente, y le asignamos el valor de la suma obtenida a la propiedad de la letra que estamos interando
    countRepeat[element] = sumFinish
  })
  return countRepeat
}

console.log(stringObject('cadenaatransformar'))

// const arr = [
//     "1º Nível",
//     ["2º nível", 42, true],
//     [
//       ["3º nível, 1º item", "Olá, mundo!"],
//       ["3º nível, 2º item", "Oi, mundo!"],
//     ],
//     []
//   ]
//   console.log(arr[0])       // Saída: '1º Nível'
//   console.log(arr[1])       // Saída: [ '2º nível', 42, true ]
//   console.log(arr[1][0])    // Saída: '2º nível'
//   console.log(arr[1][1])    // Saída: 42
//   console.log(arr[2])       // Saída: [ [ '3º nível, 1º item', 'Olá, mundo!' ], [ '3º nível, 2º item', 'Oi, mundo!' ] ]
//   console.log(arr[2][0])    // Saída: [ '3º nível, 1º item', 'Olá, mundo!' ]
//   console.log(arr[2][1][1]) // Saída: 'Oi, mundo!'

  const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
  ]

  for (let l = 0 ; l < matriz.length; l++ ) {
    for (let c = 0 ; c < matriz[l].length; c++) {
      const elemento = matriz[l][c]
      console.log("Posição: (" + l + ", " + c + ") Valor: " + elemento)
    }

  }
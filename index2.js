function crearDia() {
  document.write(`<select name="dia">`);
  for (let i = 1; i < 31; i++) {
    document.write(`<option>${i} Abril</option>`);
  }
  document.write(`</select>`);
}

function crearHora() {
  document.write(`<select name="hora">`);
  for (let i = 10; i < 24; i += 2) {
    document.write(`<option>${i}:00 Hs</option>`);
  }
  document.write(`</select>`);
}

function crearGrilla() {
  document.write(`<tbody>`);
  for (let f = 1; f < 6; f++) {
    let fila;
    switch (f) {
      case 1:
        fila = "A";
        break;
      case 2:
        fila = "B";
        break;
      case 3:
        fila = "C";
        break;
      case 4:
        fila = "D";
        break;
      case 5:
        fila = "E";
        break;
      case 6:
        fila = "F";
        break;
    }
    for (let b = 1; b <= 9; b++) {
      document.write(`<td>`);
      document.write(`<p>${fila} ${b}</p>`);
      document.write(
        `<input type="checkbox" id="butaca-${fila}${b}" name="butaca-${fila}${b}" value="${fila}${b}" />`
      );
      document.write(`<label for="butaca-${fila}${b}">COMPRAR</label>`);
      document.write(`</td>`);
    }
    document.write(`</tr>`);
  }
}

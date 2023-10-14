export const validarFormatoFecha = (fecha) => {
  const formatoFecha = /^\d{2}\/\d{2}\/\d{4}$/; // Expresión regular para el formato DD/MM/YYYY

  if (!formatoFecha.test(fecha)) {
    return false; // La fecha no coincide con el formato esperado
  }

  const partesFecha = fecha.split("/");
  const dia = parseInt(partesFecha[0], 10);
  const mes = parseInt(partesFecha[1], 10);
  const anio = parseInt(partesFecha[2], 10);

  if (isNaN(dia) || isNaN(mes) || isNaN(anio)) {
    return false; // Al menos una parte de la fecha no es un número válido
  }

  // Verificar si el año es bisiesto (divisible por 4 y no divisible por 100, o divisible por 400)
  if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
    const diasPorMes = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (mes < 1 || mes > 12 || dia < 1 || dia > diasPorMes[mes - 1]) {
      return false; // La fecha no es válida
    }
  } else {
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (mes < 1 || mes > 12 || dia < 1 || dia > diasPorMes[mes - 1]) {
      return false; // La fecha no es válida
    }
  }

  // La fecha es válida
  return true;
};

export function autoFormatFecha(input) {
  // Eliminar todos los caracteres no numéricos
  const cleanedInput = input.replace(/\D/g, "");

  // Aplicar el formato dd/mm/yyyy
  let formattedInput = "";
  for (let i = 0; i < cleanedInput.length; i++) {
    if (i === 2 || i === 4) {
      formattedInput += "/";
    }
    formattedInput += cleanedInput[i];
  }

  return formattedInput;
}

export const noContieneEspacios = (texto) => {
  return texto.includes(" ") ? false : true;
};

export const validarTexto = (texto) => {
  const regex = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]*$/;

  if (regex.test(texto)) {
    return true;
  } else {
    return false;
  }
};

export const validarNumerosYBarra = (texto) => {
  const regex = /^[0-9/]*$/;

  if (regex.test(texto)) {
    return true;
  } else {
    return false;
  }
};

export function validarCorreoElectronico(correo) {
  // Dividir la dirección de correo en parte local y dominio
  const partes = correo.split("@");

  if (partes.length !== 2) {
    return false; // Debe haber exactamente una "@" en el correo
  }

  const parteLocal = partes[0];
  const dominio = partes[1];

  // Expresión regular para validar la parte local
  const regexParteLocal = /^[a-zA-Z0-9._%+-]+$/;
  // Expresión regular para validar el dominio
  const regexDominio = /^[a-zA-Z0-9.-]+$/;
  
  if (regexParteLocal.test(parteLocal) && regexDominio.test(dominio)) {
    return true;
  } else {
    return false;
  }
}

export function validarCorreoInWrite(correo) {
  const regex = /^[a-zA-Z0-9.@\-_ñÑ]+$/;
  if (regex.test(correo)) {
    return true;
  } else {
    return false;
  }
}

export function validarSoloNumeros(numero) {
  const regex = /^[0-9]*$/;

  if (regex.test(numero)) {
    return true;
  } else {
    return false;
  }
}

export function validarNumeroSinEspacios(cadena) {
  // Eliminar espacios en blanco de la cadena
  cadena = cadena.replace(/\s/g, "");

  // Comprobar si la cadena contiene solo números y no supera los 15 dígitos
  if (/^\d{1,15}$/.test(cadena)) {
    return true; // La cadena cumple con los requisitos
  } else {
    return false; // La cadena no cumple con los requisitos
  }
}


export function capitalizarPalabra(cadena) {
  // Dividimos la cadena en palabras usando un espacio como separador
  var palabras = cadena.split(" ");
  
  // Iteramos sobre cada palabra y capitalizamos la primera letra
  for (var i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i][0].toUpperCase() + palabras[i].slice(1);
  }
  
  // Unimos las palabras nuevamente en una cadena y las retornamos
  return palabras.join(" ");
}
// inicio de la lógica de la página principal donde están los usuarios
var cuentas = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 }
];

function alternarCampoContraseña(idCampo) 
{
    var campoContraseña = document.getElementById(idCampo);
    
    if (campoContraseña.style.display === "block") 
    {
        campoContraseña.style.display = "none";
    } else 
    {
        campoContraseña.style.display = "block";
    }
}

function login(idCampo) 
{
    var contraseñaInput = document.getElementById(idCampo).querySelector("input[type='password']");
    var contraseña = contraseñaInput.value;

    // Aquí puedes agregar la lógica para validar la contraseña y realizar el inicio de sesión
    console.log("Contraseña ingresada:", contraseña);
    if (contraseñaInputMali.value === "Mali") 
    {
        location = "principal_mali.html";
    } else if (contraseñaInputGera.value === "Gera") 
    {
        location = "principal_gera.html";
    } else if (contraseñaInputMaui.value === "Maui")
     {
        location = "principal_maui.html";
    } else 
    {
        alert("Error de contraseña");
    }
    
    // Restablecer el campo de contraseña y ocultar el campo después de completar la acción
    contraseñaInput.value = "";
    var campoContraseña = document.getElementById(idCampo);
    campoContraseña.style.display = "none";

}
// fin de la lógica de la página principal donde están los usuarios


// inicio de la lógica del cajero automático
function consultarSaldo(nombreUsuario) 
{
    for (var i = 0; i < cuentas.length; i++) 
    {
        if (cuentas[i].nombre === nombreUsuario) 
        {
            alert(`El saldo de ${nombreUsuario} es: $${cuentas[i].saldo}`);
            return; // Termina el bucle cuando se encuentra la cuenta
        }
    }
    alert(`No se encontró la cuenta de ${nombreUsuario}`);
}

function validarMonto(monto) {
    // Verificar si el monto es un número válido y está dentro de los límites
    if (isNaN(monto)) {
        return false; // No es un número válido
    }
    if (monto < 10 || monto > 990) {
        return false; // No está dentro de los límites permitidos
    }
    return true;
}

function alternarCampoIngresarMonto(idCampoMonto)
{
    var campoIngresarMonto = document.getElementById(idCampoMonto);
    
    if (campoIngresarMonto.style.display === "block") 
    {
        campoIngresarMonto.style.display = "none";
    } else 
    {
        campoIngresarMonto.style.display = "block";
    }
}

function ingresarMonto(nombreUsuario, idCampoMonto, idCampoIngresar) {
    var montoInput = document.getElementById(idCampoMonto);
    var monto = parseFloat(montoInput.value);

    if (!isNaN(monto)) {
        for (var i = 0; i < cuentas.length; i++) {
            if (cuentas[i].nombre === nombreUsuario) {
                // Verificar si el saldo + monto no supera $990
                if (cuentas[i].saldo + monto <= 990) {
                    cuentas[i].saldo += monto;
                    alert(`Monto ingresado: $${monto}. Monto ingresado en la cuenta de: ${nombreUsuario}. Nuevo saldo de ${nombreUsuario}: $${cuentas[i].saldo}`);
                    montoInput.value = ""; // Limpiar el campo de texto
                    var campoIngresar = document.getElementById(idCampoIngresar);
                    campoIngresar.style.display = "none"; // Ocultar el campo después de completar la acción
                } else {
                    alert(`No puedes ingresar más dinero. El saldo máximo permitido es $990.`);
                    montoInput.value = ""; // Limpiar el campo de texto
                    var campoIngresar = document.getElementById(idCampoIngresar);
                    campoIngresar.style.display = "none";
                }
                return; // Termina el bucle cuando se encuentra la cuenta
            }
        }
    } else {
        alert("Por favor, ingresa un monto válido.");
        montoInput.value = ""; // Limpiar el campo de texto
        var campoIngresar = document.getElementById(idCampoIngresar);
        campoIngresar.style.display = "none";
    }
}

function alternarCampoRetirarMonto(idCampoMonto)
{
    var campoRetirarMonto = document.getElementById(idCampoMonto);
    
    if (campoRetirarMonto.style.display === "block") 
    {
        campoRetirarMonto.style.display = "none";
    } else 
    {
        campoRetirarMonto.style.display = "block";
    }
}

function retirarMonto(nombreUsuario, idCampoMonto, idCampoRetirar) {
    var montoInput = document.getElementById(idCampoMonto);
    var monto = parseFloat(montoInput.value);

    if (!isNaN(monto)) {
        for (var i = 0; i < cuentas.length; i++) {
            if (cuentas[i].nombre === nombreUsuario) {
                // Verificar que el saldo - monto no sea menor de $10
                if (cuentas[i].saldo - monto >= 10) {
                    cuentas[i].saldo -= monto;
                    alert(`Monto retirado: $${monto}. Monto retirado en la cuenta de: ${nombreUsuario}. Nuevo saldo de ${nombreUsuario}: $${cuentas[i].saldo}`);
                    montoInput.value = ""; // Limpiar el campo de texto
                    var campoRetirar = document.getElementById(idCampoRetirar);
                    campoRetirar.style.display = "none"; // Ocultar el campo después de completar la acción
                } else {
                    alert(`No puedes retirar más dinero. El saldo mínimo permitido es $10.`);
                    montoInput.value = ""; // Limpiar el campo de texto
                    var campoRetirar = document.getElementById(idCampoRetirar);
                    campoRetirar.style.display = "none";
                }
                return; // Termina el bucle cuando se encuentra la cuenta
            }
        }
    } else {
        alert("Por favor, ingresa un monto válido.");
        montoInput.value = ""; // Limpiar el campo de texto
        var campoRetirar = document.getElementById(idCampoRetirar);
        campoRetirar.style.display = "none";
    }
}
// fin de la lógica del cajero automático
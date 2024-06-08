function verificarPassword() {
    const select1 = document.getElementById("select1").value
    const select2 = document.getElementById("select2").value
    const select3 = document.getElementById("select3").value
    const password = select1 + select2 + select3

    const resultado = document.getElementById("resultado")
        if (password === "911") { 
            resultado.textContent = "password 1 correcto"           
        }
        else if (password === "714") {
            resultado.textContent = "password 2 correcto"
        }
        else {
            resultado.textContent = "password incorrecto"
        }
}


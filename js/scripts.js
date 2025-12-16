// Seleção de elementos

const range = document.querySelector("#tamanho");
const value = document.querySelector("#valor-range");
const senhaGerada = document.querySelector("#senha-gerada");
const gerarBtn = document.querySelector("#gerar-btn");

value.innerText = range.value;

// Funções

function gerarSenha(tamanho){
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*+=/";
    let senha = "";

    for(let i = 0; i < tamanho; i++){
        const index = Math.floor(Math.random() * caracteres.length);
        senha+= caracteres[index];
    }

    return senha;
}

// Eventos

range.addEventListener("input", () => {
  value.innerText = range.value;
});

gerarBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const tamanho = Number(range.value);
    const senha = gerarSenha(tamanho);

    senhaGerada.innerText = senha;
    senhaGerada.classList.remove("hide");
})



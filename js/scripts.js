const data = [
    {
        min:0,
        max:8,
        feedback: "senha fraca"
    },
    {
        min:9,
        max:15,
        feedback: "senha forte"
    },
    {
        min:16,
        max:30,
        feedback: "senha muito forte"
    }
];

// Seleção de elementos

const range = document.querySelector("#tamanho");
const value = document.querySelector("#valor-range");
const senhaGerada = document.querySelector("#senha-gerada");
const gerarBtn = document.querySelector("#gerar-btn");
const feedbackSenhaGerada = document.querySelector("#feedback-senha");

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

function feedbackSenha(tamanho){
    let feedback;

    data.forEach((item) => {
        if (tamanho >= item.min && tamanho <= item.max){
            feedback = item.feedback;
        }
    })

    return feedback;
}

// Eventos

range.addEventListener("input", () => {
  value.innerText = range.value;
});

gerarBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const tamanho = Number(range.value);
    const senha = gerarSenha(tamanho);
    const feedback = feedbackSenha(tamanho);

    senhaGerada.innerText = senha;
    senhaGerada.classList.remove("hide");
    feedbackSenhaGerada.innerText = feedback;

    feedbackSenhaGerada.classList.remove(
        "senha-fraca",
        "senha-forte",
        "senha-muito-forte"
        );

        if (tamanho <= 8) {
            feedbackSenhaGerada.classList.add("senha-fraca");
        } else if (tamanho <= 15) {
            feedbackSenhaGerada.classList.add("senha-forte");
        } else {
            feedbackSenhaGerada.classList.add("senha-muito-forte");
        }

});



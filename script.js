// Função para avaliar a receita
function avaliarReceita() {
	const avaliacao = prompt("Avalie esta receita de 1 a 5 estrelas:");
	const nota = parseInt(avaliacao);

	if (nota >= 1 && nota <= 5) {
		sessionStorage.setItem("avaliacaoReceita", nota);
		atualizarEstrelas(nota);
		alert("Obrigado pela sua avaliação!");
	} else {
		alert("Por favor, insira um número de 1 a 5.");
	}
}

// Atualiza visualmente as estrelas
function atualizarEstrelas(nota) {
	const p = document.querySelector(".receita-avaliacao");
	p.textContent = "⭐".repeat(nota) + "☆".repeat(5 - nota);
}

// Função para imprimir a receita
function imprimirReceita() {
	const conteudo = document.getElementById("receita").innerHTML;
	const janela = window.open("", "", "width=800,height=600");
	janela.document.write(`
        <html>
        <head>
            <title>Imprimir Receita</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            ${conteudo}
            <script>
                window.onload = function() { window.print(); }
            <\/script>
        </body>
        </html>
    `);
	janela.document.close();
}

// Carrega avaliação anterior, se houver
const notaAnterior = sessionStorage.getItem("avaliacaoReceita");
if (notaAnterior) {
	atualizarEstrelas(parseInt(notaAnterior));
}

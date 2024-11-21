const IFRAME_CARTAO = "cartao.html";
const IFRAME_CURRICLO = "curriculo.html";   
const IFRAME_BHASKARA = "bhaskara.html";    
const IFRAME_NOTA = "nota.html";
const IFRAME_FICHA = "ficha.html";
const IFRAME_LOGIN = "login.php";

const Lista = [IFRAME_CARTAO, 
    IFRAME_CURRICLO, 
    IFRAME_BHASKARA, 
    IFRAME_NOTA, 
    IFRAME_FICHA,
    IFRAME_LOGIN];

function mostrarConteudo(conteudo) {
    const IFRAME = document.getElementById("FRAME");
    IFRAME.setAttribute("src", Lista[conteudo]);
}

/* Bhaskara */

function guardarInput(event) {
    event.preventDefault();
    var variavel1 = document.getElementById("var1");
    var variavel2 = document.getElementById("var2");
    var variavel3 = document.getElementById("var3");

    var valor1 = parseFloat(variavel1.value);
    var valor2 = parseFloat(variavel2.value);
    var valor3 = parseFloat(variavel3.value);

    function calculoSegundoGrau(a, b, c) {
        if (a === 0) {
            document.getElementById("resposta").innerHTML = "Isso não é uma equação de segundo grau, pois o valor de 'a' é 0.";
            return;
        }

        const delta = Math.pow(b, 2) - (4 * a * c);

        if (delta < 0) {
            document.getElementById("resposta").innerHTML = "Não há soluções reais, pois o delta é negativo.";
        } else if (delta === 0) {
            let solucaoUnica = (-b / (2 * a)).toFixed(2);
            document.getElementById("resposta").innerHTML = "A equação possui uma única solução real: " + solucaoUnica;
        } else {
            let solucao1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2);
            let solucao2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2);
            document.getElementById("resposta").innerHTML = `As soluções reais são: ${solucao1} e ${solucao2}`;
        }
    }

    calculoSegundoGrau(valor1, valor2, valor3);
}

/* Nota */

function guardarNota(event) {
    event.preventDefault(event);

    var variavel1 = document.getElementById("var1");
    var variavel2 = document.getElementById("var2");
    var variavel3 = document.getElementById("var3");

    var valor1 = parseFloat(variavel1.value);
    var valor2 = parseFloat(variavel2.value);
    var valor3 = parseFloat(variavel3.value);

    determinarNota();

    function calcular(sm1, sm2, av) {
        soma = sm1 + sm2 + av;
        media = soma/3;
        return media.toFixed(2);
    }

    function determinarNota() {
        if(calcular(valor1, valor2, valor3) < 6) {
            document.getElementById("resposta").innerHTML = "A média deste aluno é insuficiente, pois sua média é " + calcular(valor1, valor2, valor3);
        } else {
            document.getElementById("resposta").innerHTML = "A média deste aluno é " + calcular(valor1, valor2, valor3); 
        }
    }
}   



function mostrarDados() {
    event.preventDefault()
    
    const nome = document.getElementById('name').value;
    const sobrenome = document.getElementById('subnome').value;
    const email = document.getElementById('email').value;
    const nascimento = document.getElementById('nascimento_data').value;
    const genero = document.querySelector('input[name="genero"]:checked') ? document.querySelector('input[name="genero"]:checked').value : '';
    const modalidade = document.querySelector('input[name="modalidade"]:checked') ? document.querySelector('input[name="modalidade"]:checked').value : '';

    
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h3>Dados Submetidos:</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Sobrenome:</strong> ${sobrenome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Data de Nascimento:</strong> ${nascimento}</p>
        <p><strong>Sexo:</strong> ${genero}</p>
        <p><strong>Modalidade:</strong> ${modalidade}</p>
        <div class="container3">
        <input type="submit" value="Voltar" onclick="voltar()">
        </div>
    `;
    
    document.getElementById('formulario').style.display = 'none';
    resultadoDiv.style.display = 'block';
}

function voltar() {
    document.getElementById('formulario').style.display = 'block'; 
    document.getElementById('resultado').style.display = 'none'; 
}

function erroMensagemFalha() {
    document.getElementById("alerta").innerHTML = "Erro ao Realizar Login";
}

function erroMensagemLogin() {
    document.getElementById("alerta").innerHTML = "Usuário ou Senha incorretos";
}
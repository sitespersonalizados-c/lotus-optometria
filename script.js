document.getElementById('agendamentoForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const servico = document.getElementById('servico').value;
    const periodo = document.getElementById('periodo').value;
    const telefone = "5512987054594";

    let mensagem;

    if (servico === "Saber o Valor da Consulta") {
        mensagem = `Olá Lótus Optometria! Me chamo ${nome} e gostaria de saber o valor da consulta.`;
    } else {
        mensagem =    
`Olá Lótus Optometria! Gostaria de agendar:
𝗣𝗮𝗰𝗶𝗲𝗻𝘁𝗲: ${nome}
𝗦𝗲𝗿𝘃𝗶ç𝗼: ${servico}
𝗣𝗲𝗿í𝗼𝗱𝗼: ${periodo}
Qual horário disponível?`;
    }

        const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, '_blank');
    });

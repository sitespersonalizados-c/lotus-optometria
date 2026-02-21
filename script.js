document.getElementById('agendamentoForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const valorConsulta = "60,00"; 
    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    const nomeExibicao = `${nome} ${sobrenome}`;
    const servico = document.getElementById('servico').value;
    const periodo = document.getElementById('periodo').value;
    const telefone = "5512987054594";

    let mensagem;

    // Lógica inteligente: cada escolha gera uma mensagem diferente
    if (servico === "Saber o Valor da Consulta") {
        alert(`O valor da consulta na Lótus Optometria é a partir de R$ ${valorConsulta}.`);
        
        // Mensagem específica para QUEM QUER PREÇO
        mensagem = `Olá Lótus Optometria! Me chamo ${nomeExibicao} e vi no site que o valor da consulta é a partir de R$ ${valorConsulta}. Gostaria de confirmar e agendar?`;
    } else {
        // Mensagem profissional para QUEM QUER AGENDAR (mantém os emojis e a organização)
        mensagem = `Olá Lótus Optometria! Gostaria de agendar:
𝗣𝗮𝗰𝗶𝗲𝗻𝘁𝗲: ${nomeExibicao}
𝗦𝗲𝗿𝘃𝗶ç𝗼: ${servico}
𝗣𝗲𝗿í𝗼𝗱𝗼: ${periodo}
Qual horário disponível?`;
    }

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
});

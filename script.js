document.getElementById('agendamentoForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    
    // Opção A: Nome + Sobrenome (Ex: Cristina Silva)
    const nomeExibicao = `${nome} ${sobrenome}`;
    
    // Opção B: Nome + Inicial (Ex: Cristina S. - mais curto!)
    // const nomeExibicao = `${nome} ${sobrenome.charAt(0)}.`;

    const servico = document.getElementById('servico').value;
    const periodo = document.getElementById('periodo').value;
    const telefone = "5512987054594";

    let mensagem;

    if (servico === "Saber o Valor da Consulta") {
        mensagem = `Olá Lótus Optometria! Me chamo ${nomeExibicao} e gostaria de saber o valor da consulta?`;
    } else {
        mensagem = `Olá Lótus Optometria! Gostaria de agendar:
𝗣𝗮𝗰𝗶𝗲𝗻𝘁𝗲: ${nomeExibicao}
𝗦𝗲𝗿𝘃𝗶ç𝗼: ${servico}
𝗣𝗲𝗿í𝗼𝗱𝗼: ${periodo}
Qual horário disponível?`;
    }

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
});

document.getElementById('agendamentoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const servico = document.getElementById('servico').value;
    const periodo = document.getElementById('periodo').value;
    const telefone = "5512987054594"; //

    let mensagem;

    if (servico === "Saber o Valor da Consulta") {
        mensagem = `Olá Lótus Optometria! Me chamo ${nome} e gostaria de saber o valor da consulta.`;
    } else {
        mensagem = `Olá Lótus Optometria! Gostaria de agendar:%0A%0A` +
                   `*Paciente:* ${nome}%0A` +
                   `*Serviço:* ${servico}%0A` +
                   `*Período:* ${periodo}`;
    }

    window.open(`https://wa.me/${telefone}?text=${mensagem}`, '_blank');
});
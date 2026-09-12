function mostrarPokemon() {
            const select =  document.getElementById("selectPokemon");
            const escolha = select.value;
            const dados = pokedex[escolha];

            const resultado = document.getElementById("resultado");
            resultado.innerHTML =
            "<h2> " + dados.nome + "</h2>" +
            "<img src='" + dados.imagem + "'width='200'><br>" +
            "<p>Tipo: " + dados.tipo + "</p>" +
            "<p>Golpe: " + dados.golpe + "</p>" +
            "<p>Natureza mais comum: " + dados.natureza + "</p>" +
            "<p>Fraquezas: " + dados.fraquezas + "</p>" +
            "<p>Região: " + dados.regiao + "</p>" +
            "<p>Geração: " + dados.geracao + "</p>" +
            "<p>Evolução:</p>" +
            "<img src='" + dados.evolucaoImagem + "'width='180'>";
}
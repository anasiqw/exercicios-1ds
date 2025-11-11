// CRIE UMA LÓGICA ABAIXO
let filme1 = {titulo: "V de Vingança", genero: "Ação/Político", ano: 2005, avaliacao: 9.3}
let filme2 = {titulo: "Coração Valente", genero: "Histórico/Drama", ano: 1995, avaliacao: 9.5}
let filme3 = {titulo: "O Exterminador do Futuro 2", genero: "Ficção Científica", ano: 1991, avaliacao: 9.4}
let filme4 = {titulo: "A Origem", genero: "Ficção Científica", ano: 2010, avaliacao: 9.6}
let filme5 = {titulo: "Clube da Luta", genero: "Drama", ano: 1999, avaliacao: 9.2}
let filme6 = {titulo: "O Resgate do Soldado Ryan", genero: "Guerra", ano: 1998, avaliacao: 9.0}
let filme7 = {titulo: "O Senhor dos Anéis: As Duas Torres", genero: "Fantasia", ano: 2002, avaliacao: 9.4}
let filme8 = {titulo: "Os Oito Odiados", genero: "Faroeste", ano: 2015, avaliacao: 8.9}
let filme9 = {titulo: "O Lobo de Wall Street", genero: "Comédia/Drama", ano: 2013, avaliacao: 9.1}
let filme10 = {titulo: "O Show de Truman", genero: "Drama/Ficção", ano: 1998, avaliacao: 9.3}

const listaFilmes = {filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10}

const notasFilmes = [filme1.avaliacao, filme2.avaliacao, filme3.avaliacao, filme4.avaliacao, filme5.avaliacao, filme6.avaliacao, filme7.avaliacao, filme8.avaliacao, filme9.avaliacao, filme10.avaliacao]
let maiorNota = notasFilmes[0]
for(let i = 1; i < notasFilmes.length; i++){
    if(notasFilmes[i] > maiorNota){
        maiorNota = notasFilmes[i]
    }
}
let indiceFilmeTop = notasFilmes.indexOf(maiorNota) + 1
let totalNotas = notasFilmes.reduce((acumulador, valorAtual) => { return valorAtual + acumulador}, 0) 
let mediaGeral = totalNotas / notasFilmes.length
console.log(`
    === Lista de Filmes ===
    1. ${filme1.titulo} - ${filme1.genero}
    2. ${filme2.titulo} - ${filme2.genero}
    3. ${filme3.titulo} - ${filme3.genero}
    4. ${filme4.titulo} - ${filme4.genero}
    5. ${filme5.titulo} - ${filme5.genero}
    6. ${filme6.titulo} - ${filme6.genero}
    7. ${filme7.titulo} - ${filme7.genero}
    8. ${filme8.titulo} - ${filme8.genero}
    9. ${filme9.titulo} - ${filme9.genero}
    10. ${filme10.titulo} - ${filme10.genero}

    Filme mais bem avaliado:
    ${listaFilmes[`filme${indiceFilmeTop}`].titulo} (${maiorNota})

    Média geral das avaliações: ${mediaGeral.toFixed(2)}
    `)

// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10 }
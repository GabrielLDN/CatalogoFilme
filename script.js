const frmSearch = document.querySelector("form"); // seleciona o form
const apikey = "8fa8be48"; // chave da api

frmSearch.onsubmit = (e) => { // evento de submit do form
    e.preventDefault(); // previne o comportamento padrão do form
    const search = e.target.search.value; // pega o valor do campo de busca
    
    if (search === "") { // se o campo de busca estiver vazio
        alert("Preencha o campo de busca"); // alerta o usuário 
        return; // retorna vazio
    }
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=${apikey}`) // faz a requisição na api
        .then(res => res.json()) // converte a resposta em json
            .then(json => carregaLista(json)); // chama a função carregaLista passando o json como parâmetro
}
const carregaLista = (json) => { // função carregaLista
    const lista = document.querySelector("div.lista"); // seleciona a div lista
    lista.innerHTML = ""; // limpa a div lista
    json.Search.forEach(movie => { // para cada filme da lista
        let item = document.createElement("div") // cria uma div
        item.classList.add("item") // adiciona a classe filme


        item.innerHTML = `<img src="${movie.Poster}" alt="${movie.Title}"> <h4>${movie.Title}</h4>` // adiciona a imagem do filme
        let ano = document.createElement("p") // cria um parágrafo
        ano.innerHTML = movie.Year // adiciona o ano do filme
        item.appendChild(ano); // adiciona o ano na div
        lista.appendChild(item); // adiciona o filme na lista
    });
}
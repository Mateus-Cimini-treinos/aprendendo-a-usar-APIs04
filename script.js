const endpoint = 'https://dummyjson.com/products/1'

fetch(endpoint)
    .then(response =>{
        if (!response.ok) {
            throw new Error('Erro na conexão com response: '+ response.statusText);
        }
        return response.json();
    })

        .then(produtos => {
            console.log(`Nome do produto: ${produtos.title}`)
            console.log(`ID do produto: ${produtos.id}`)
            console.log(`Descriçao do produto: ${produtos.description}`)
            console.log(`Preço do produto: ${produtos.price}`)
        })

        .catch(error => {
            // Captura e trata erros ocorridos durante a requisição fetch ou processamento dos dados
            console.error('Erro durante a requisição fetch:', error);
            // Você pode adicionar mais ações aqui, se necessário, para lidar com o erro
          });
        
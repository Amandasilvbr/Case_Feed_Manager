let url_dados = "/dados/feed_maneger.xml";

// Solicitando através do jquery as informações do arquivo XML 

$.ajax(url_dados).done(function (xml) {
    $(xml).find("item").each(function () {

    // Inserindo as informações na página HTML
        $("#itens").append(
            `<div class="product">
                    <p class="product_title">Produto: ${$(this).find("title").text()}</p>
                    <p class="product_id">Id: ${$(this).find("id").text()}</p>
                    <p class="product_price">Preço: ${$(this).find("price").text()}</p>
                    <p class="product_image">Link da imagem: ${$(this).find("image_link").text()}</p>
                    <p class="product_link">Link do produto: ${$(this).find("link").text()}</p>
                    <p class="product_ty">Categoria: ${$(this).find("product_type").text()}</p>
                </div>`)
    });

    // Retirando a categoria de calçados
    let category = [...document.getElementsByClassName('product_ty')]

    category.forEach(p_category => {
        p_category.textContent === 'Categoria: "Moda > Calçados"' ? p_category.parentElement.remove() : null
    });

    // Corrigindo o nome dos produtos identificados com erros
    let name = [...document.getElementsByClassName('product_title')]

    name.forEach(p_name => {

        if (p_name.textContent === 'Produto: "Calça leging convencional"') {
            p_name.innerText = 'Produto: "Calça leging simples"'
        } else if (p_name.textContent === 'Produto: "oculos de sol"') {
            p_name.innerText = 'Produto: "Óculos de sol - Unissex"'
        }

    });

    // Corrigindo os links das imagens dos ids solicitados
    let products = [...document.getElementsByClassName('product')]

    for (let i = 0; i < products.length; i++) {

        let p_id = products[i].getElementsByClassName('product_id')

        if (p_id[0].innerHTML === 'Id: 564363') {
            let p_of_id = p_id[0].parentElement
            let wrong_link = p_of_id.getElementsByClassName('product_image')[0]
            wrong_link.innerText = 'Link da imagem: "www.loja.com.br/imagens/gorro-bordado-minimalista.jpg"'
        } else if (p_id[0].innerHTML === 'Id: 939134') {
            let p_of_id = p_id[0].parentElement
            let wrong_link = p_of_id.getElementsByClassName('product_image')[0]
            wrong_link.innerText = 'Link da imagem: "www.loja.com.br/imagens/jaqueta-couro.jpg"'

        }
    }
});




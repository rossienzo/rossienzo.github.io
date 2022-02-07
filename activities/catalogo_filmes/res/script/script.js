$(() => {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: 'https://rafaelescalfoni.github.io/desenv_web/filmes.json',
        data: { get_param: 'value' }, 
        success: (data) => {
            createCard(data);
            
        },
        error: () => {
            $('#catalog').append('<h2>Erro ao carregar dados</h2>');
        }
      });
});

function createCard(data)
{
    const catalog = document.getElementById("catalog") ? document.getElementById("catalog") : '';

    data.forEach(el => {
        let card = document.createElement('article');
        card.classList.add('card');
        card.id = `card${el.id}`; //adiciona o id ao elemento
    
        let imgLink = document.createElement('a');
        imgLink.href = '#';
    
        let banner = document.createElement('img');
        banner.classList.add('banner');
    
        /* Element - header */
        let header = document.createElement('header');
        
        let titleCard = document.createElement('div');
        titleCard.classList.add('title-card');
    
        let titleMovie = document.createElement('h2');
    
        let categories = document.createElement('small');
        let rating = document.createElement('div');
        rating.classList.add('rating');
    
        let stars = document.createElement('div');
        stars.classList.add('stars');
    
        let note = document.createElement('div');
        note.classList.add('note');
    
        let highNumber = document.createElement('span');
        highNumber.classList.add('high-number');
    
        let smallNumber = document.createElement('small');
    
        let age = document.createElement('span');
        age.classList.add('age');
    
        /* Element - End */
    
        /* Element - section */
        let section = document.createElement('section');
        
        let summary = document.createElement('p');
        summary.classList.add('summary');
    
        let actors = document.createElement('small');
        actors.classList.add('actors')
    
        let actorsBold = document.createElement('span');
        /* Element - section End */
    
        /* Element - footer */
        let footer = document.createElement('footer');
        let titleFooter = document.createElement('h3');
        let like = document.createElement('div');
        like.classList.add('like');
    
        /* Element - section End */
    
        // Renderiza os títulos relacionados
        for(let i = 0; i < data.length; i++)
        {
            if(el.titulosSemelhantes.includes(i))
            {
                let imgLink = document.createElement('a');
                imgLink.href = `#card${i}`;

                let imgLike = document.createElement('img');
                imgLike.src = data[i - 1].figura;
                
                imgLink.appendChild(imgLike);
                like.appendChild(imgLink);
            }
        }
        
        banner.src = el.figura;
        imgLink.appendChild(banner);
    
        /* header card */
        titleMovie.innerHTML = el.titulo;
        categories.innerHTML = el.generos.join(', ');
    
        // rating
        let numStars = mediaStars(el);
    
        // Estrelas preenchidas
        for(let i = 1; i <= parseInt(numStars); i++)
        {
            let star = document.createElement('i');
            star.classList.add('fas');
            star.classList.add('fa-star');
            stars.appendChild(star);
    
            // cria a meia estrela
            if(numStars % 1 != 0 && i == parseInt(numStars))
            {
                let star = document.createElement('i');
                star.classList.add('fas');
                star.classList.add('fa-star-half-alt');
                stars.appendChild(star);
            }
        }
    
        // Estrelas vazias
        for(let i = 0; i < 5 - Math.ceil(numStars); i++)
        {
            let star = document.createElement('i');
            star.classList.add('far');
            star.classList.add('fa-star');
            stars.appendChild(star);
        }
    
        highNumber.innerHTML = numStars.toFixed(1);
        smallNumber.innerHTML = '/5.0';
    
        //note elements
        note.appendChild(highNumber);
        note.appendChild(smallNumber);
    
        //rating elements
        rating.appendChild(stars);
        rating.appendChild(note);
    
        // header elements
        titleCard.appendChild(titleMovie);
        titleCard.appendChild(categories);
        titleCard.appendChild(rating);
    
        // Se a classificação for livre será escrito um texto
        age.innerHTML = el.classificacao == 0 ? 'Livre' : el.classificacao;
        age.classList.add(`class-${el.classificacao}`);
    
        header.appendChild(titleCard);
        header.appendChild(age);
    
    
        /* section card */
        summary.innerHTML = el.resumo;
        
        // Junta os atores
        actorsBold.innerHTML = "Elenco: ";
        let actorsNames = el.elenco.join(', ');
        
        actors.appendChild(actorsBold);
        actors.innerHTML += actorsNames;
    
        section.appendChild(summary);
        section.appendChild(actors);
    
        /* footer card */
        titleFooter.innerHTML = "Títulos Similares";
        footer.appendChild(titleFooter);
        footer.appendChild(like);
    
        // card
        card.appendChild(imgLink);
        card.appendChild(header);
        card.appendChild(section);
        card.appendChild(footer);
    
        catalog.appendChild(card);
    });
    
}

// calcula a media das estrelas
function mediaStars(data)
{
    let sum = 0;
    data.opinioes.forEach((opinion) => {
        sum += opinion.rating;
    })

    // calcula a média
    return (sum / data.opinioes.length) || 0;
}
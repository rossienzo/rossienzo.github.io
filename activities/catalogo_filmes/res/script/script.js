$(() => {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: 'https://rafaelescalfoni.github.io/desenv_web/filmes.json',
        data: { get_param: 'value' }, 
        success: (data) => {
            createCard(data);
            
        },
        error: (err) => {
            $('#catalog').append('<h2>Erro ao carregar dados</h2>');
        }
      });

    function createCard(data)
    {
        let catalog = $('#catalog');

        data.forEach(el => {
            let card = $('<article>');
            card.addClass('card');
            card.attr('id', `card${el.id}`); //adiciona o id ao elemento

            let imgLink = $('<a>');
            imgLink.attr('href', '#');
        
            let banner = $('<img>');
            banner.addClass('banner');
        
            /* Element - header */
            let header = $('<header>');
            
            let titleCard = $('<div>');
            titleCard.addClass('title-card');
        
            let titleMovie = $('<h2>');
        
            let categories = $('<small>');
            let rating = $('<div>');
            rating.addClass('rating');
        
            let stars = $('<div>');
            stars.addClass('stars');
        
            let note = $('<div>');
            note.addClass('note');
        
            let highNumber = $('<span>');
            highNumber.addClass('high-number');
        
            let smallNumber = $('<small>');
        
            let age = $('<span>');
            age.addClass('age');
        
            /* Element - End */
        
            /* Element - section */
            let section = $('<section>');
            
            let summary = $('<p>');
            summary.addClass('summary');
        
            let actors = $('<small>');
            actors.addClass('actors');
        
            let actorsBold = $('<span>');

            let titleComments = $('<h3>');

            let comments = $('<div>');
            comments.addClass('comments');

            /* Element - section End */
        
            /* Element - footer */
            let footer = $('<footer>');
            let titleFooter = $('<h3>');
            let like = $('<div>');
            like.addClass('like');
        
            /* Element - section End */
        
            // Renderiza os títulos relacionados
            for(let i = 0; i < data.length; i++)
            {
                if(el.titulosSemelhantes.includes(i))
                {
                    let imgLink = $('<a>');
                    imgLink.attr('href', `#card${i}`);

                    let imgLike = $('<img>');
                    imgLike.attr('src', data[i - 1].figura);
                    
                    imgLink.append(imgLike);
                    like.append(imgLink);
                }
            }
            
            banner.attr('src', el.figura);
            imgLink.append(banner);
        
            /* header card */
            titleMovie.html(el.titulo);
            categories.html(el.generos.join(', '));
        
            // rating
            let numStars = mediaStars(el);
        
            // Estrelas preenchidas
            for(let i = 1; i <= parseInt(numStars); i++)
            {
                let star = $('<i>');
                star.addClass('fas');
                star.addClass('fa-star');
                stars.append(star);
        
                // cria a meia estrela
                if(numStars % 1 != 0 && i == parseInt(numStars))
                {
                    let star = $('<i>');
                    star.addClass('fas');
                    star.addClass('fa-star-half-alt');
                    stars.append(star);
                }
            }
        
            // Estrelas vazias
            for(let i = 0; i < 5 - Math.ceil(numStars); i++)
            {
                let star = $('<i>');
                star.addClass('far');
                star.addClass('fa-star');
                stars.append(star);
            }
        
            highNumber.html = numStars.toFixed(1);
            smallNumber.html = '/5.0';
        
            //note elements
            note.append(highNumber);
            note.append(smallNumber);
        
            //rating elements
            rating.append(stars);
            rating.append(note);
        
            // header elements
            titleCard.append(titleMovie);
            titleCard.append(categories);
            titleCard.append(rating);
        
            // Se a classificação for livre será escrito um texto
            let classification = el.classificacao == 0 ? 'Livre' : el.classificacao;
            age.html(classification); 
            age.addClass(`class-${el.classificacao}`);
        
            header.append(titleCard);
            header.append(age);
        
        
            /* section card */
            summary.html(el.resumo);
            
            // Junta os atores
            actorsBold.html("Elenco: ");
            let actorsNames = el.elenco.join(', ');
            
            actors.append(actorsBold);
            actors.html += actorsNames;
        

            // Comentários da página
        
            for(let i = 0; i < el.opinioes.length; i++)
            {
                let comment = $('<p>');
                comment.html(`"${el.opinioes[i].descricao}"`);  
                comments.append(comment);  
            }

            titleComments.html("Comentários");
            

            section.append(summary);
            section.append(actors);
            section.append(titleComments);
            section.append(comments);
        
            /* footer card */
            titleFooter.html("Títulos Similares");
            footer.append(titleFooter);
            footer.append(like);
        
            // card
            card.append(imgLink);
            card.append(header);
            card.append(section);
            card.append(footer);
        
            catalog.append(card);
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

});


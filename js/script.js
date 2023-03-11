
random_results = Math.floor(Math.random() * 3)
document.querySelector(".back").style.backgroundImage = `url('images/Background${random_results}.jpg')`;
console.log(random_results)

function fetchApiData(AnimeName) {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '89a32ed357mshfe911f9e1be761cp15173cjsn7432915a2822',
            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }
    };

    fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=' + AnimeName + '&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc', options)
        .then(response => response.json())
        .then(data => {
            const list = document.querySelector('#list_');
            
            data.data.map((item) => {

                const li = document.createElement('li');
                console.log(item.title)
                li.setAttribute('id', item.id);
                li.innerHTML = item.title;
                list.appendChild(li);
            })
        })

        .catch(err => {
            const erro = document.getElementById('error')
            erro.innerHTML = "Não Encontrado"
            console.error(err)
        });
    }

function submitAnime() {
    var anime = document.getElementById("input_value").value

    if(anime == "") {
        
        try {
            const li = document.querySelectorAll("#undefined")
            if(li) {
                li.forEach((item2) => {
                    item2;
                    document.querySelector("#undefined").remove()
                })
            }
        } catch (error) {
            console.error(error);
        }
        
        const list = document.querySelector('#list_');
        const li = document.createElement('li');
        li.setAttribute('id', "undefined");
        li.innerHTML = "Insira Algo!";
        list.appendChild(li);

    } else {

        try {
            const li = document.querySelectorAll("#undefined")
            if(li) {
                li.forEach((item2) => {
                    item2;
                    document.querySelector("#undefined").remove()
                })
            }
        } catch (error) {
            console.error(error);
        }

        fetchApiData(anime)

    }

}
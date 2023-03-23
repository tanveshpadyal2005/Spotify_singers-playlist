// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '52246edbe5msh6f23044db940a9cp17fe36jsn1d4d88c832d3',
// 		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
// 	}
// };

// fetch('https://spotify23.p.rapidapi.com/search/?q=arjit%20singh&type=playlists&offset=0&limit=10&numberOfTopResults=5', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

const fillform = document.getElementById("myForm");

function getplay(e) {

    e.preventDefault();

    const run = document.forms['myForm']['music'].value;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '52246edbe5msh6f23044db940a9cp17fe36jsn1d4d88c832d3',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    fetch(`https://spotify23.p.rapidapi.com/search/?q=${run}&type=playlists&offset=0&limit=10&numberOfTopResults=5`, options)
        .then(response => response.json())
        .then(response => {
            
            
            if (run == "") {
                alert("invalid data")
            }
            else {

                response.playlists.items[0].data.uri="https://open.spotify.com/search"
                response.playlists.items[1].data.uri="https://open.spotify.com/search"
                response.playlists.items[2].data.uri="https://open.spotify.com/search"
                response.playlists.items[3].data.uri="https://open.spotify.com/search"
                response.playlists.items[4].data.uri="https://open.spotify.com/search"
                response.playlists.items[5].data.uri="https://open.spotify.com/search"
                response.playlists.items[6].data.uri="https://open.spotify.com/search"
                response.playlists.items[7].data.uri="https://open.spotify.com/search"
                response.playlists.items[8].data.uri="https://open.spotify.com/search"
                response.playlists.items[9].data.uri="https://open.spotify.com/search"

                response.playlists.items.map((cval) => {
                    document.getElementById('result').innerHTML += `

                <div class="card">
                <img src="${cval.data.images.items[0].sources[0].url}" alt="">
                <a href="${cval.data.uri}" target="_blank">Go to Playlist</a>
                <div class="content">
                <p>Playlist name:</p>
                <h3>${cval.data.name}</h3>
                <p>Description: </p>
                <p class="des">${cval.data.description}</p>
                <p>Owner name: </p>
                <h3>${cval.data.owner.name}</h2>
                
                </div>
                </div>
                `
                })
            }

        })
        .catch(err => console.error(err));
}

fillform.addEventListener('submit', getplay)
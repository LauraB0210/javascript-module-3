
    function episodes (){
        
        fetch("https://rickandmortyapi.com/api/episode/", {
        
    })
    .then(
        res => res.json ()
    )
    .then(
        res => res.results.map(x => `<p>Episode ${x.id}</p>`)
    )
    .then(
        res => document.getElementById('sidebar').innerHTML = res.join('')
    )

    }

    episodes ()
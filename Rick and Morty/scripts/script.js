
    // function episodes (){
        
    //     fetch("https://rickandmortyapi.com/api/episode/", {
        
    // })
    // .then(
    //     res => res.json ()
    // )
    // .then(
    //     res => res.results.map(x => `<p>Episode ${x.id}</p>`)
    // )
    // .then(
    //     res => document.getElementById('sidebar').innerHTML = res.join('')
    // )

    // }

    // episodes ()


    let page = 1

    const root = document.getElementById("root")

    const headerSection = document.createElement("div")
    headerSection.ide = "header"
    headerSection.innerHTML = "<h1> Rick and Morty API</h1>"
    root.appendChild(headerSection)

    const sidebar =  document.createElement("div")
    sidebar.id = "sidebar"
    root.appendChild(sidebar)

    const main = document.createElement("div")
    main.id = "main"
    root.appendChild(main)

    const image = document.createElement("img")
    image.src = "../images/image4.png"
    main.appendChild(image)

    const episodes = document.createElement("div")
    episodes.id = "episodies"
    sidebar.appendChild(episodes)


    //recopilando episodios

    loadEpisodes()


    function loadEpisodes(url) {
        fetch (url || "https://rickandmortyapi.com/api/episode")
        .then(res => res.json())
        .then(showEpisodes)
    }

    function showEpisodes(episodes) {
        episodes.results.forEach(addEpisodeToSidebar)
        if (episodes.info.next) {
            moreEpisodes.onclick = () => loadEpisodes(episodes.info.next)
        }else {
            moreEpisodes.classList.add("hidden")
        }

    }

    function addEpisodeToSidebar (episode) {
        const episodeNode = document.createElement("div")
        episodeNode.innerText =episode.name
        episodeNode.classList.add("episode")
         //console.log (episode)
         episodeNode.addEventListener("click", () => showEpisodes(episode))
         episodes.appendChild(episodeNode)
    }
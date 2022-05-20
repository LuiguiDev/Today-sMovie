let search = 634649
let page = 1
let movieId = NaN
let aboutMovies = []
let language = 'es-mx'
const key = 'e4b30a1db5bc22a592d00146854380c7'


//Get movie ID by its title
const searchMovie = async(liked)=>{
  try{
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${liked}&page=1&include_adult=false`);

    if (response.status === 200){
      const data = await response.json();
      let finded = data.results[0].id
      console.log(finded)
      return finded
    }else if (response.status == 401){
      console.log('Invalid Key')
    }else if (response.status == 404){
      console.log('This movie doesn\'t exist')
    }else{
      console.log('Unexpected error')   
    }
  }catch(error){
    console.log(error)
  };  
}
//Show the movie you've search for
const getMovie = async() =>{
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=${language}`);     
  
    if (response.status === 200){      
      const data = await response.json();
      /* console.log(data.id) */
      let movie = ''
      movie = `
        <h3>Si te gustó</h3>
        <img class="image" src="https://image.tmdb.org/t/p/w500/${data.poster_path}"/> 
        <H2>${data.title}</H2>`
      document.getElementById('liked').innerHTML = (movie)
    }else if (response.status == 401){
      console.log('Invalid Key')
    }else if (response.status == 404){
      console.log('This movie doesn\'t exist')
    }else{
      console.log('Unexpected error')   
    }
  }catch(error){
    console.log(error)
  };
}
//Extended Info about recommendations
const closeInfo = (extended, cards) =>{
  const cross = document.getElementById('close')
  const fill = document.getElementById('container')
  cross.addEventListener('click', function (){
    extended.classList.add('close')
    setTimeout(() => {
      extended.classList.add('hide');
      fill.classList.remove('fill')
    }, 600); 
  });  
}

const showMoreInfo = (cards) =>{
  cards.addEventListener('click', (e) =>{
    if(e.target && e.target.tagName === 'IMG'){
      cards.classList.add('fill')
      const extended = document.getElementById('extended')
      let IDs = e.target.id
      let target = document.getElementById(IDs)      
      let info = []
      info = `
        <i class="icon-keyboard_arrow_down" id="close"></i>
        <div class="view">
          <img class="image" src="${target.getAttribute('src')}"/>
          <div class="info"> 
            <h3 class="title"> ${aboutMovies[IDs].title} </h3>
            <p class="text"> ${aboutMovies[IDs].overview} </p>
          </div>        
        </div>
        <div class="viewMore" id="viewMore">
          <h4> View more </h4>
        </div>
        `;
      extended.innerHTML = info
      extended.classList.remove('close')
      extended.classList.remove('hide')
      let about = aboutMovies[IDs]
      let rate = aboutMovies[IDs].vote_average
      let VMid = aboutMovies[IDs].id
      closeInfo(extended)  
      viewMore(rate, VMid, about)
    }
  })
};
//Show tions
const getRecommendations = async() =>{
  try {  
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${key}&page=${page}&language=es-mx`);
  
    if (response.status === 200){
      const data = await response.json();
      aboutMovies = data.results
      let movies = []  
      let i = 0
      
      data.results.forEach(movie => {
        movies += `<a class="cards">
        <img class="cards__images" id="${i}" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"/>
        <h3>${movie.title}</h3>
        </a>`;
        i++
      });            
      const cards = document.getElementById('container');
      cards.innerHTML = movies;     
      showMoreInfo(cards)   
    }else if (response.status == 401){
      console.log('Invalid Key')
    }else if (response.status == 404){
      console.log('This movie doesn\'t exist')
    }else{
      console.log('Unexpected error')
    }
  }catch(error){
    console.log(error)
  }
}
//Star the searching
const getResults= async()=>{
  let input = document.getElementById('entry');
  let liked = input.value;
  let presentation = document.querySelector('.presentation')
  presentation.classList.remove('hide')
  movieId = await searchMovie(liked)
  getMovie(movieId);
  getRecommendations(movieId);
}

//Experimenting with the API
const getKeywords = async (search) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${search}/keywords?api_key=${key}&language=${language}`);

    if (response.status === 200){
      const data = await response.json();
      data.keywords.forEach(keyword => {
      console.log(keyword.name)
      })
      console.log(data.keywords)
    }else if (response.status == 401){
      console.log('Invalid Key')
    }else if (response.status == 404){
      console.log('This movie doesn\'t exist')
    }else{
      console.log('Unexpected error')   
    }
  }catch(error){
    console.log(error)
  }
}
const getReviews = async (VMid) =>{  
  try{
    const response = await fetch(`https://api.themoviedb.org/3/movie/${VMid}/reviews?api_key=${key}`);
    if (response.status === 200){
      const data = await response.json();
      for(let i = 0; i < 5; i++){
        /* console.log(data.results[i].content) */
        return(data.results[i].content)
      }
    }else if(response.status === 401){
      console.log('Invalid Key')
    }else if(response.status === 404){
      console.log('This movie doesn\'t exist')
    }else{
      console.log('Unexpexted error')
    }
  }catch(error){
    console.log(error)
  }
}
const getGenres = async (VMid) =>{
  try{
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=${language}`);
    if (response.status === 200){
      const data = await response.json();
      let i = 0
      let genres = []
      while(i < 5){
        genres.push(` ${data.genres[i].name}`)
        i++
      }
      return genres
    };
  }catch(error){
    console.log(error)
  }
}
const viewMore = async (rate, VMid, about) => {
  let reviews = await getReviews(VMid);
  let genres = await getGenres(VMid);
  extended.addEventListener('click', (e) =>{
    if(e.target && e.target.tagName === 'H4'){
      let viewMore = document.getElementById('viewMore');
      let content = `
        <p> Calificación: <span> ${about.vote_average} </span></p>
        <p> Géneros: <span> ${genres} </span></p>
        <p> Lanzamiento: <span> ${about.release_date} </span></p>
        `;
      viewMore.innerHTML = content;
      console.log(reviews)
    };
  });
}

//Code for buttons and animations
const nextPageLeft = () =>{
let left = document.getElementById('container')
left.scrollBy(-850, 0)
}
const nextPageRight = () =>{
let right = document.getElementById('container')
right.scrollBy(850, 0)
}
const btnSelected =() =>{
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

if(btn1.classList.contains('selected')){
  btn1.classList.remove('selected');
  btn2.classList.add('selected');
}else{
  btn1.classList.add('selected');
  btn2.classList.remove('selected');    
}}

//Calling functions
/* getKeywords()*/
/* getRecommendations(search) */
/* getImages(search)  */


let search = 315635
let page = 1
import{getResults}from'./search'
let movieId = getResults()

const getMovie = async() =>{
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${search}?api_key=e4b30a1db5bc22a592d00146854380c7&language=en-US`);     
  
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
getMovie();

const getRecommendations = async() =>{
  try {  
    const response = await fetch(`https://api.themoviedb.org/3/movie/${search}/recommendations?api_key=e4b30a1db5bc22a592d00146854380c7&page=${page}`);
  
    if (response.status === 200){
      const data = await response.json();
      console.log(data)
      let movies = []  
      data.results.forEach(movie => {
        movies += `
        <div class="cards">
          <img class="cards__images" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"/>
          <h3>${movie.title}</h3>
        </div>
        `;
      });            
      document.getElementById('container').innerHTML = movies
  
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
getRecommendations();

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
  }
}

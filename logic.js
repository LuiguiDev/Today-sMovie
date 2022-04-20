const getMovie = async() =>{
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/1550?api_key=e4b30a1db5bc22a592d00146854380c7&language=en-US');     
  
    if (response.status === 200){      
      const data = await response.json();
      console.log(data.title) 
      let movie = ''
      movie = `
        <div class = "poster">
        <img class="image" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" 
        </div> 
        <H1>${data.title}</H1>`
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
    const response = await fetch('https://api.themoviedb.org/3/movie/1550/recommendations?api_key=e4b30a1db5bc22a592d00146854380c7&page=1');
  
    if (response.status === 200){
      const data = await response.json();
  
      let movies = []  
      data.results.forEach(movie => {
        movies += `
          <div class = "poster">
            <img class="image" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" 
          </div> 
          <h3>${movie.title}</h3>
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
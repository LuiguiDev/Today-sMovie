const fetchData = async() => {
  try {  
    const response = await fetch('https://api.themoviedb.org/3/movie/1550/recommendations?api_key=e4b30a1db5bc22a592d00146854380c7&page=1');

    console.log(response);
    if (response.status === 200){
      const data = await response.json();

      let movies = []

      data.results.forEach(movie => {
        console.log(movie.title)
        movies = movies + `<h3>${movie.title}</h3>`
      });            
      document.getElementById('container').innerHTML = movies

      console.log(data);
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
};

fetchData();
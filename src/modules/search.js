export let movieId = ''

export const searchMovie = async(liked)=>{
  try{
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e4b30a1db5bc22a592d00146854380c7&language=en-US&query=${liked}&page=1&include_adult=false`);

    if (response.status === 200){
      const data = await response.json();
      let finded = data.results[0].id
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
export const getResults = async()=>{
  let input = document.getElementById('entry')
  let liked = input.value
  movieId = await searchMovie(liked)  
  return movieId
}





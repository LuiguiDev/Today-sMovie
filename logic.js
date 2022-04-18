const fetchData = async() => {
  try {  
    const response = await fetch('https://api.themoviedb.org/3/movie/12550/recomendations?api_key=e4b30a1db5bc22a592d00146854380c7');

    console.log(response);
    if (response.status === 200){
      const data = await response.json();
      console.log(data.title);
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
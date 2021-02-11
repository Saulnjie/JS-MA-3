document.querySelector('.loading').innerHTML = ` <img
 src="https://media0.giphy.com/media/cnzP4cmBsiOrccg20V/giphy.gif"
/>`;

async function getCars() {
  
  try {
    const repsonse = await fetch('https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating');
    const jsonResult = await repsonse.json();
    console.log(jsonResult);
    const final = jsonResult.results
    console.log(final)
    console.log(final.length)
    
    final.forEach((value) => {
      document.querySelector('main').innerHTML += `
      <div class="card">
      <p>${value.name}</p>
      <p>Rating: ${value.rating}</p>
      <p>Number of tags: ${value.tags.length}</p>
      </div>
      `;
    });
  }
  catch (error) {
    console.log(error);
    document.querySelector('.alert').innerHTML = showAlertTouser(
      'THERE IS AN ERROR WITH THE API! IM SCREAMING',
      'danger'
      ); 
}
finally {
  document.querySelector('.loading').classList.add('hide');
}
}

getCars();

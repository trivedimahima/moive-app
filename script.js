const url = "http://www.omdbapi.com/?apikey=765489d1&s=animal";

async function getData() {
  const request = await fetch(url);
  const data = await request.json();
  console.log(data);
  return data;
}

// des.innerHTML = json.results[0].overview;

async function showMovie() {
  let data = await getData();
  if (data) {
    let title = document.getElementsByClassName("title");
    let des = document.getElementsByClassName("para");
    let img = document.getElementsByTagName("img");

    for(let i=0;i<6;i++){
      title[i].innerHTML = data.Search[i].Title;
      img[i].src = data.Search[i].Poster;
      des[i].innerHTML = data.Search[i].Year;

    }
  }
  //   console.log(getMovies());
}
// getData()
showMovie();

// const btn = document.getElementById("btn")
// btn.addEventListener("click",searchMovie)
async function searchMovie(){
  const search = document.getElementById("search")
  let movieName = search.value;

  const url2 = `http://www.omdbapi.com/?apikey=765489d1&s=${movieName}`;

  const data = await fetch(url2)
  const data2 = await data.json()
  console.log(data2)

  let title = document.getElementsByClassName("title");
  let des = document.getElementsByClassName("para");
  let result = document.getElementById("results");
  let img = document.getElementsByTagName("img");

  result.innerHTML = data2.totalResults
  for(let i=0;i<6;i++){
    title[i].innerHTML = data2.Search[i].Title;
    img[i].src = data2.Search[i].Poster;
    des[i].innerHTML = data2.Search[i].Year;

  }

}
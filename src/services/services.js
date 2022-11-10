const BASEURL = 'http://localhost:3001/'

// exports.postOneDrink = (event) => {
//   try {
//   fetch(BASEURL,
//     {
//       method: 'POST',
//       headers: {'content-type' : 'application/json'},
//       body: JSON.stringify(event)
//     })
//     .then((res)=> res.json()).catch((err) => console.error(err));
//   } catch (err) {
//     console.error(err);
//   }
// }

exports.getAllCocktails = async () => {
  try {
  const result = await fetch(BASEURL)
  const data = await result.json()
  return data
  } catch (err) {
    console.error(err);
  }
}
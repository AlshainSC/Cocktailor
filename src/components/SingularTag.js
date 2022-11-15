import { useState } from 'react'

function SingularTag( { tag, selectedCocktails, setSelectedCocktails, cocktails, setCocktails } ) {

const [tagPressed, setTagPressed] = useState(false)

function tagClick () {
  setTagPressed(!tagPressed);
  const newArr = [...selectedCocktails]
  newArr.push(cocktails.filter((el) => el.flavour_notes.includes(tag)))
  setSelectedCocktails([...new Set([].concat(...newArr))]);
}


  return (
    <div>
    <div className={tagPressed ? "pressedTag" : "singularTag"} onClick={tagClick}>
      <h1>{tag.toUpperCase()}</h1>
    </div>
    </div>
  )
}

export default SingularTag
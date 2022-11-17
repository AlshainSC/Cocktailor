import { useCocktailContext } from '../contexts/CocktailProvider'


function SingularTag({ tag }) {

  const { selectedTags, setSelectedTags } = useCocktailContext()

  function tagClick(tag) {
    if (selectedTags.includes(tag)) {
      removeFromSelectedTags(tag);
    } else {
      addToSelected(tag);
    }
  }

  function addToSelected(tag) {
    const newSelectedTags = [...selectedTags]
    if (!newSelectedTags.includes(tag)) {
      newSelectedTags.push(tag);
      setSelectedTags(newSelectedTags);
    }
  }

  function removeFromSelectedTags(tag) {
    const newSelectedTags = [...selectedTags]
    if (newSelectedTags.includes(tag)) {
      newSelectedTags.splice(newSelectedTags.indexOf(tag), 1)
      setSelectedTags(newSelectedTags);
    }
  }

  function checkIfInTags(tag) {
    if (selectedTags.includes(tag)) {
      return true
    } else {
      return false;
    }
  }

  return (
    <div>
      <div className={checkIfInTags(tag) ? "pressedTag" : "singularTag"} onClick={() => tagClick(tag)}>
        <h1 id="tags">{tag.toUpperCase()}</h1>
      </div>
    </div>
  )
}

export default SingularTag
import { Link } from "react-router-dom"


function LandingPage() {
  return (
    <>
    <div className="landingPageContainer">
    <div className="landingPageTextContainer">
    <h3 id="landingPageText">Are You Unsure About What To Order At Your Favourite Bar?</h3>
    <h3 id="landingPageText">Just Choose From Our Extensive List Of Flavours & Moods...</h3>
    <h3 id="landingPageText">Cocktailor Will Suggest A Cocktail To Perfectly Suit Your Pallette!</h3>

    </div>
    <Link to="tagselection">
    <button type="button" className="startButton">Bottoms Up!</button>
    </Link>
    </div>

    </>
  )
}

export default LandingPage
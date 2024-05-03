import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards({people}) {
  

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (<>
  <div className="cc"> <h3>PostOver WorldWide</h3>
   <span>Swipe Left Or Right</span>
   </div>
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgtxt})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
    </>
  );
}

export default TinderCards;
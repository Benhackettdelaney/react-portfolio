import people from "./data/people.json";
import PersonCard from "./components/PersonCard";

const App = () => {
  const peopleDivs = people.results.map((person) => {
    return <PersonCard key={person.name.first} person={person} />;
  });

  people.results.forEach((person) => {
    console.log(person.quote);
  });

  return (
    <>
      <h1>People</h1>
      {peopleDivs}
    </>
  );
};

export default App;

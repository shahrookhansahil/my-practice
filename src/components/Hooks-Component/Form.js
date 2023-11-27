import { useImmer } from "use-immer";

// UseImmer

export default function Form() {
  //   const [person, updatePerson] = useImmer({
  //     name: "Niki de Saint Phalle",
  //     artwork: {
  //       title: "Blue Nana",
  //       city: "Hamburg",
  //       image: "https://i.imgur.com/Sd1AgUOm.jpg",
  //     },
  //   });

  //   function handleNameChange(e) {
  //     updatePerson((draft) => {
  //       draft.name = e.target.value;
  //     });
  //   }

  //   function handleTitleChange(e) {
  // updatePerson((draft) => {
  //   draft.artwork.title = e.target.value;
  // });
  //   }

  //   function handleCityChange(e) {
  //     updatePerson((draft) => {
  //       draft.artwork.city = e.target.value;
  //     });
  //   }

  //   function handleImageChange(e) {
  //     updatePerson((draft) => {
  //       draft.artwork.image = e.target.value;
  //     });
  //   }

  //   return (
  //     <>
  //       <label>
  //         Name:
  //         <input value={person.name} onChange={handleNameChange} />
  //       </label>
  //       <label>
  //         Title:
  //         <input value={person.artwork.title} onChange={handleTitleChange} />
  //       </label>
  //       <label>
  //         City:
  //         <input value={person.artwork.city} onChange={handleCityChange} />
  //       </label>
  //       <label>
  //         Image:
  //         <input value={person.artwork.image} onChange={handleImageChange} />
  //       </label>
  //       <p>
  //         <i>{person.artwork.title}</i>
  //         {" by "}
  //         {person.name}
  //         <br />
  //         (located in {person.artwork.city})
  //       </p>
  //       <img src={person.artwork.image} alt={person.artwork.title} />
  //     </>
  //   );
  // }

  const [player, setPlayer] = useImmer({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  function handlePlusClick() {
    setPlayer((draft) => {
      draft.score++;
    });
  }

  function handleFirstNameChange(e) {
    setPlayer((draft) => {
      draft.firstName = e.target.value;
    });
  }

  function handleLastNameChange(e) {
    setPlayer((draft) => {
      draft.lastName = e.target.value;
    });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>{" "}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </>
  );
}

// class usersResults extends Component {
//   constructor(matchingList) {
//     super(`<section class="result">
//       </section>`);
//     let feedback;
//     if (matchingList.length) {
//       const list = document.createElement("ul");

//       for (let i = 0; i < matchingList.length; i++) {
//         const listItem = document.createElement("li");
//         listItem.innerHTML = `${matchingList[i].name} ${matchingList[i].surname} (${matchingList[i].email})`;
//         list.append(listItem);
//       }
//       this.container.appendChild(list);
//     } else {
//       feedback = new Feedback("You have 0 results :(", "warning");
//       this.container.appendChild(feedback.container);
//     }
//   }
// }


function UsersResults({ results }) {
  return <section className="results">
    {results.length ?
      <ul>{results.map(({ name, surname, email }) => <li>{`${name} ${surname} (${email})`}</li>)}</ul>
      : <Feedback message="sorry, no results :(" level="warning" />}
  </section>
}

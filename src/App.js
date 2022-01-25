import logo from './logo.svg';
import './App.css';
import contactsOrigin from "./contacts.json";
import React from "react"
import { useState } from "react";

// import { useState } from "react";

// const importContactsJSON = JSON.parse(contacts);
console.log(contactsOrigin);
// const contacts = JSON.parse(contactsOrigin);
// console.log(contacts);


function App() {


  const [contacts, setContacts] = useState(contactsOrigin.slice(0, 6));
  // console.log("The state: ", contacts);

  console.log("UseState", useState);
  console.log("UseState(contactsOrigin.slice(0, 6)) ", useState(contactsOrigin.slice(0, 6)));
  console.log("The state: ", contacts);
  console.log("The setContacts: ", setContacts);


  return (
    <div className="App">

      <h1>IronContacts</h1>
      {/* <ul>
        {contacts.map((contact) => {
          console.log(contact.name);
          return (
            <li>
              <img src={contact.pictureUrl} alt={contact.name} />

              <p>{contact.name}</p>

              <p>{contact.popularity}</p>
            </li>
          )
        })}
      </ul> */}

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            console.log(contact.name);

            if (contact.wonOscar && !contact.wonEmmy) {
              return (
                <tr>
                  <td><img src={contact.pictureUrl} alt={contact.name} width='300' /></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td> 🏆 </td>
                  <td> </td>;

                </tr>
              );
            } if (contact.wonOscar && contact.wonEmmy) {
              return (
                <tr>
                  <td><img src={contact.pictureUrl} alt={contact.name} width='300' /></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td> 🏆 </td>
                  <td> 🏆 </td>;
                </tr>
              );
            } if (contact.wonEmmy) {
              return (
                <tr>
                  <td><img src={contact.pictureUrl} alt={contact.name} width='300' /></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td> </td>
                  <td> 🏆 </td>;
                </tr>
              );
            } if (!contact.wonEmmy && !contact.wonOscar) {
              return (
                <tr>
                  <td><img src={contact.pictureUrl} alt={contact.name} width='300' /></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td> </td>
                  <td> </td>;
                </tr>
              );
            }


            // return (
            //   <tr>
            //     <td><img src={contact.pictureUrl} alt={contact.name} width='300' /></td>
            //     <td>{contact.name}</td>
            //     <td>{contact.popularity}</td>
            //     {if(contact.wonOscar){
            //       <td> 🏆 </td>
            //     }else{
            //       <td> </td>;
            //     }}
            //   </tr>
            // )
          })}
        </tbody>
      </table>

    </div>



  )
}

export default App;


//named and default import/export
//only one default export module
//think of module as file

import {name,age,person} from "./data.js"
import React, { Component } from "react";
import Banner from "./components/header/Banner";



// import * as data from "./data";
// const App = ()=>{
//   return(
// <section>
//   <p>My paragraph</p>
//   <p>{data.name}</p>
//   <i>{data.age}</i>
//   <b>{data.person.name}</b>
// </section>
//   );
// };


// const App = ()=>{
//     return(
 <section>
  <Banner />
  <p>My paragraph</p>
  <p>{name}</p>
  <i>{age}</i>
  <b>{person.name}</b>
 </section>
// );
// };

class App extends Component{
    render(){
        return(
     <section>
        <Banner />
        <p>My paragraph</p>
        <p>{name}</p>
        <i>{age}</i>
        <b>{person.name}</b>
    </section>
        );
    }
}

export default App;
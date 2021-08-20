import React, { useEffect, useState } from "react";

const App = () => {
    const App_Id = "a7f63a17";
    const App_key = "95d8ca777b79f2e8ebf6eb616644b34a	";


    const [counter, setcounter] = useState(0);

    useEffect(() => {
        async
    }, []);

    const getRecipes = async() => {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${App_Id}&app_key=${App_key}`)
    }
    return ( <div className = "App" >
        <form className = "search-form" >
            <input type = "text" className = "search-bar" />
            <button className = "search-button" type = "submit" > Search </button> 
        </form>
         <h1 onClick = {
            () => setcounter(counter + 1) } > { counter } </h1>
         </div>
    );
};
export default App;
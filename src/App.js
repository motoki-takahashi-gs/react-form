import './App.css';
import React from 'react';

function App() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: ""
  })

  console.log(formData)

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        // [event.target.name] is a computed property
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <div className="App">
      <form>
        <input
          type='text'
          placeholder='First name'
          onChange={handleChange}
          name='firstName'
        />
        <input
          type='text'
          placeholder='Last name'
          onChange={handleChange}
          name='lastName'
        />
      </form>
    </div>
  );
}

export default App;

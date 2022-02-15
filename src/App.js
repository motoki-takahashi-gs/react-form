import './App.css';
import React from 'react';

function App() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: ""
  })

  console.log(formData)

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value // [event.target.name] is a computed property
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
          value={formData.firstName} // controlled components (the value is equal to the state)
        />
        <input
          type='text'
          placeholder='Last name'
          onChange={handleChange}
          name='lastName'
          value={formData.lastName}
        />
        <input
          type='email'
          placeholder='Email'
          onChange={handleChange}
          name='email'
          value={formData.email}
        />
        <textarea
          placeholder='Comments'
          onChange={handleChange}
          name='comments'
          value={formData.comments}
        />
      </form>
    </div>
  );
}

export default App;

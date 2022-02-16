import './App.css';
import React from 'react';

function App() {
  const [formData, setFormData] = React.useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
      isFriendly: true,
      employment: "",
      favColor: ""
    }
  )

  console.log(formData)

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value // [name] is a computed property
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault() // this prevents a browser from going to a URL with parameters

    const results = `Your name is ${formData.firstName} ${formData.lastName}. Your email is ${formData.email}. Your comments are ${formData.comments}. You are ${formData.isFriendly ? '' : 'not '}friendly. Your employment status is ${formData.employment}. Your favorite color is ${formData.favColor}.`

    alert(results)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
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
        <input
          type='checkbox'
          id='isFriendly'
          checked={formData.isFriendly}
          onChange={handleChange}
          name='isFriendly'
        />
        <label htmlFor='isFriendly'>Are you friendly?</label>

        <fieldset>
          <legend>Current employment status</legend>

          <input
            type='radio'
            id='unemployed'
            name='employment'
            value='unemployed'
            checked={formData.employment === "unemployed"}
            onChange={handleChange}
          />
          <label htmlFor='unemployed'>Unemployed</label>
          <br />

          <input
            type='radio'
            id='part-time'
            name='employment'
            value='part-time'
            checked={formData.employment === "part-time"}
            onChange={handleChange}
          />
          <label htmlFor='part-time'>Part-time</label>
          <br />

          <input
            type='radio'
            id='full-time'
            name='employment'
            value='full-time'
            checked={formData.employment === "full-time"}
            onChange={handleChange}
          />
          <label htmlFor='full-time'>Full-time</label>
          <br />
        </fieldset>

        <label htmlFor='favColor'>What is your favorite color?</label>
        <br />
        <select
          id='favColor'
          name='favColor'
          onChange={handleChange}
          value={formData.favColor}
        >
          <option value="">-- Choose --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

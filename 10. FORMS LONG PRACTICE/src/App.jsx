import {useEffect, useState} from 'react'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [bio, setBio] = useState('')
  const [isCheck, setIsCheck] = useState(false)
  const [errors, setErrors] = useState([])
  const [isSubmit, setIsSubmit] = useState(false)
  const [phoneType, setPhoneType] = useState('')
  const [selectedOption, setSelectedOption] = useState('student');

  useEffect(() => {
    const errors = []
    if(!name.length) errors.push('Invalid name')
    if(!email.includes('@')) errors.push('Invalid email')
    if(!phone.length) errors.push('Invalid phone')
    if (!phoneType) errors.push('A phone type must be set');
    if(bio.length < 19) errors.push('Invalid bio, must be 20 characters')
    if (!isCheck) errors.push('Checkbox must be checked');

    setErrors(errors)
  }, [name, phone, email, bio, phoneType, isCheck])

  function handleSubmit(e){
    e.preventDefault()

    setIsSubmit(true)
    if(errors.length > 0){
      alert('Cannot Submit')
      return
    }
    const form = {
      name,
      email,
      phone,
      phoneType,
      selectedOption,
      bio,
      newsletter: isCheck,
      submissionAt: new Date()
    }
    console.log(form)

    setName('')
    setBio('')
    setEmail('')
    setPhone('')
    setIsCheck(false)
    setIsSubmit(false)
    setSelectedOption('student')
    setPhoneType('')
    setErrors([])
  }
  return (
    <div className="App">
      <h1>React Forms</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Input name here." value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" placeholder="Input email here." value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="number" id="phone" placeholder="Input phone here." value={phone} onChange={(e) => setPhone(e.target.value)}/>
          <select value={phoneType} disabled={!phone.length ? true : false}  onChange={(e) => setPhoneType(e.target.value)}>
            <option value="" disabled>Select Type</option>
            <option value="home">Home</option>
            <option value="work">Work</option>
          </select>
        </div>
        <div className="radio">
          <input type="radio" name="staff" id="student" value="student" checked={selectedOption === 'student'} onChange={(e) => setSelectedOption(e.target.value)}/>
          <label htmlFor="student">Student</label>
          <input type="radio" name="staff" id="instructor" value="instructor" checked={selectedOption === 'instructor'} onChange={(e) => setSelectedOption(e.target.value)}/>
          <label htmlFor="instructor">Instructor</label>
        </div>
        <div>
          <textarea name="bio" id="bio" placeholder="Input Bio here." value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
        </div>
        <div className="checkbox">
          <input type="checkbox" name="notif" id="notif" checked={isCheck} onClick={() => setIsCheck(!isCheck)}/>
          <label htmlFor="notif">Sign Up for Newsletter</label>
        </div>
        <div className='submit'>
          <button>Submit</button>
        </div>
        <div className="errors">
          {isSubmit && errors.length > 0 && errors.map(err => <p key={crypto.randomUUID()}>{err}</p>)}
        </div>
      </form>
    </div>
  )
}

export default App

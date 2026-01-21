import { useState } from 'react'
import './App.css'
import EditPerson from './components/Person.jsx'
import DisplayPerson from './components/DisplayPerson.jsx'
import './styles/cv-styles.css'
function App() {
    const [person, setPerson] = useState({
    firstName: 'Joe',
    lastName: 'Nay',
    email: 'nayjoe1998@gmai.com',
    phone: '+129292112',
    education: 'University of Washington',
      educationName: 'Bachelor of Arts in Communication',
      dateOfStudy: 'Sept 2018 – June 2022',
      companyName: 'Horizon Marketing Group (Austin, TX)',
      positionName: 'Junior Marketing Specialist',
      jobInfo: 'Managed multi-channel marketing campaigns and analyzed performance data to drive lead generation and ensure brand consistency across all client accounts.',
      dateOfWork: 'July 2022 – Present'
  })
    const [activeIndex, setActiveIndex] = useState(0);


  return (
      <>
          <h1>CV Application</h1>
          <div className={'cv-show'}>
              <EditPerson person={person} setPerson={setPerson} isActive={activeIndex === 0} onClick={() => setActiveIndex(1)}/>
          </div>


          <div className={'cv-show'}>
              <DisplayPerson person={person} isActive={activeIndex === 1} onClick={() => setActiveIndex(0)}/>
          </div>
      </>
  )
}

export default App

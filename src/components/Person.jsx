import '../styles/cv-styles.css'

function PersonInput({ label, typeOfInput='text', value, prop, person, setPerson}) {
    return (
        <div className={'input-field'}>
            <label>{label}</label>
            <input
                type={typeOfInput === 'text' ? 'text' : 'email'}
                defaultValue={value}
                onChange={(e) =>
                    setPerson({...person, [prop]: e.target.value})}
            />
        </div>
    )
}

function JobInfoInput({ label, value, prop, person, setPerson}) {
    return (
        <div className={'input-field'}>
            <label>{label}</label>
            <textarea
                defaultValue={value}
                onChange={(e) =>
                    setPerson({...person, [prop]: e.target.value})}
                rows={8}
                cols={30}
            />
        </div>
    )
}

export default function EditPerson({person, setPerson, isActive, onClick}) {
    if (isActive) return (
        <>
            <h2>Personal Information</h2>
            <PersonInput label={'First name'} value={person.firstName} prop={'firstName'}
                         person={person} setPerson={setPerson}/>
            <PersonInput label={'Last name'} value={person.lastName} prop={'lastName'}
                         person={person} setPerson={setPerson}/>
            <PersonInput label={'Email'} typeOfInput={'email'} value={person.email} prop={'email'} person={person}
                         setPerson={setPerson}/>
            <PersonInput label={'Phone number'} typeOfInput={'text'} value={person.phone} prop={'phone'} person={person}
                         setPerson={setPerson}/>

            <h2>Education</h2>
            <PersonInput label={'Education'} value={person.education} prop={'education'} person={person}
                         setPerson={setPerson}/>
            <PersonInput label={'Title of study'} value={person.educationName} prop={'educationName'} person={person}
                         setPerson={setPerson}/>
            <PersonInput label={'Date of study'} value={person.dateOfStudy} prop={'dateOfStudy'} person={person}
                         setPerson={setPerson}/>

            <h2>Practical Experience</h2>
            <PersonInput label={'Company name'} value={person.companyName} prop={'companyName'} person={person}
                         setPerson={setPerson}/>
            <PersonInput label={'Position title'} value={person.positionName} prop={'positionName'} person={person}
                         setPerson={setPerson}/>
            <JobInfoInput label={'Responsibilities'} value={person.jobInfo} prop={'jobInfo'} person={person}
                         setPerson={setPerson}/>
            <PersonInput label={'Work duration'} value={person.dateOfWork} prop={'dateOfWork'} person={person}
                         setPerson={setPerson}/>
            <button onClick={onClick}>Submit</button>
        </>
    )
}
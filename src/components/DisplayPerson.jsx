import '../styles/cv-styles.css'

function Display({name, value, className}) {
    return (
        <div className={'display-field'}>
            <h3>{name}</h3>
            <p className={className}>{value}</p>
        </div>
    )
}


export default function DisplayPerson({person, isActive, onClick}) {
    if (isActive) return (
        <>
            <h2>Personal Information</h2>
            <Display name={'Full name'} value={person.firstName + ' ' + person.lastName}/>
            <Display name={'Email'} value={person.email}/>
            <Display name={'Phone number'} value={person.phone}/>
            <h2>Education</h2>
            <Display name={'Education'} value={person.education}/>
            <Display name={'Title of study'} value={person.educationName}/>
            <Display name={'Date of study'} value={person.dateOfStudy}/>
            <h2>Practical Experience</h2>
            <Display name={'Company name'} value={person.companyName}/>
            <Display name={'Position title'} value={person.positionName}/>
            <Display name={'Responsibilities'} value={person.jobInfo} className={'big-text'}/>
            <Display name={'Work duration'} value={person.dateOfWork}/>
            <button onClick={onClick}>Edit</button>
        </>
    )
}
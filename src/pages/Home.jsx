import React from 'react'
import Header from '../components/Header'
import FindBySpeciality from '../components/FindBySpeciality'
import Appointment from '../components/Appointment'
import TopDoctors from '../components/TopDoctors'

const Home = () => {
    return (
    <div>
        <div className="mt-20">
            <Header/>
        </div>
        <FindBySpeciality />
        <TopDoctors />
        <Appointment/>
    </div>
    )
}

export default Home

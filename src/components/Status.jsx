import React from 'react';
import "./Status.css"

const Status = () => {
  return (
    <div className='mainStatus'>
        <h1>Budget Status</h1>
        <button id='project' className='project'>+ Add New Project</button>
        <button className='download'><img src='https://png.pngtree.com/png-clipart/20190903/original/pngtree-download-icon-png-image_4420641.jpg' />Download Report</button>
        <button className='birthDate'> <img src='https://cdn3.iconfinder.com/data/icons/calendars-2/512/06_Date_Of_Birth_Calendar_Date_And_Time_User_Schedule-512.png' />dd/mm/yyyy-dd/mm/yyyy</button>
        <button className='filter'><img src='https://icon-library.com/images/filter-icon-png/filter-icon-png-16.jpg' />Filter</button>
    </div>
  )
}

export default Status

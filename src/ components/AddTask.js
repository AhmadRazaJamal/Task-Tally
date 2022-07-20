import React from 'react'
import { useState } from 'react'
const AddTask = ({onAdd}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Please add a task name');
            return;
        }

        onAdd({ text, day, reminder });
        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder='Add a task' value={text} onChange={(e) => setText(e.target.value)} id='add-task'></input>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type="text" placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)} id={'add-date-time'}></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type="checkbox" placeholder='Add as a reminder' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} id={'reminder'}></input>
            </div>

            <input type="submit" checked={reminder} value="Save Task" className='btn btn-block submit-button' />
        </form>
    )
}

export default AddTask
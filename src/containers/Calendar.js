import React, { useState } from 'react'

import {
    DatePicker
} from '@material-ui/pickers';


import DateFnsUtils from '@date-io/date-fns';

import {
    MuiPickersUtilsProvider
} from '@material-ui/pickers'


const Calendar = () => {

    const [selectedDate, handleDateChange] = useState(new Date());
    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker value={selectedDate} onChange={handleDateChange} format={"eee, dd MMM yyy"} />
            </MuiPickersUtilsProvider>
        </div>
    )
}
export default Calendar
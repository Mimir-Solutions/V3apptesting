import React from 'react'

var dateTime =()=>
{
    var showdate=new Date();
    var displaytodaysdate=showdate.getDate()+'/'+showdate.getMonth()+'/'+showdate.getFullYear();

    return(
        <div>
            <input type="text" value={displaytodaysdate} readOnly="true" />
        </div>
    )
}

export default dateTime;
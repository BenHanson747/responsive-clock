
function ClockDate () {

  let date = new Date();
  let day = date.getDate() + ' ';
  let month = date.getMonth();
  let year = ' ' + date.getFullYear();

  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    return (
   <div className="clock__date">
              <span>{day}</span>
              <span>{months[month]},</span>
              <span>{year}</span>
    </div>
    )
}

export default ClockDate;
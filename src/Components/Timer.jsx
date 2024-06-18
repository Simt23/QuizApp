import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime, onTimeUp }) => {
const [time, setTime] = useState(initialTime);

useEffect(() => {
if (time > 0) {
const timer = setTimeout(() => setTime(time - 1), 1000);
return () => clearTimeout(timer);
} else {
onTimeUp();
}
}, [time, onTimeUp]);

return (
<div className='Timer'>
Time Left: {time} secs</div>
);
};

export default Timer;
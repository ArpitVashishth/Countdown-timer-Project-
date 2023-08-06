const endDate = " 1 Januaray 2025 00:00 AM"

document.getElementById('end-date').innerText = endDate;
const inputs = document.getElementsByTagName("input");

const clock = () => {
    const end = new Date(endDate);
    const now = new Date()

    let diff = (end - now) / 1000; // when you subtract two 'Date'objects in Javascript,You get the diiference in miliiseconds.
    //Since 1 second = 1000 miliseconds. If you want to evaluate time in seconds so you need to divide miliiseconds by 1000 for seconds
    console.log(diff);//  seconds 

    //convert second into days 
    if (diff < 0) return
    const days = Math.floor(diff / 3600 / 24);// find in days 1/86,400 of a day.suppose 172800 seconds / (24 * 60 * 60 seconds/day) = 2 days
    const hrs = Math.floor(diff / 3600) % 24;
    const min = Math.floor(diff / 60) % 60;
    const sec = Math.floor(diff % 60);



    inputs[0].value = days;
    inputs[1].value = hrs;
    inputs[2].value = min;
    inputs[3].value = sec;
    console.log(days);
    console.log(hrs);
    console.log(min);

}

// clock();

setInterval(() => {
    clock();
}, 1000)

/**
 * 1 days = 24hrs
 * 1hr = 60mim
 * 60min= 3600sec
 */
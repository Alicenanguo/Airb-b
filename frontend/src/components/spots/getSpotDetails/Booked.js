let bookingDays = function (start, end) {
    let startDate = new Date(start)
    startDate.setDate(startDate.getDate() + 1);
    // console.log("startdate", start, startDate)
    let endDate = new Date(end)
    endDate.setDate(endDate.getDate() + 1);

    const daysArray = [];
    let currentDate = startDate;
    while (currentDate <= endDate) {
        daysArray.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return daysArray;
}

export default bookingDays;

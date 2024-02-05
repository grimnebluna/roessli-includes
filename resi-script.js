

    function rmydays(date) {
    //console.log('Jahr:' + date.getFullYear() + 'monat:' + date.getMonth() + 'tag:' + date.getDate());
        return (date.getDay() === 2 || date.getDay() === 3 );
    }
    function rmySpecificdays(date) {
        const rdatedData = ["2023-12-23", "2023-12-24", "2023-12-25", "2023-12-26",
        "2024-01-07", "2024-01-08", "2024-01-09", "2024-01-10",
        "2024-01-11", "2024-01-12", "2024-01-13", "2024-01-14",
        "2024-01-15", "2024-01-16", "2024-01-17", "2024-01-18",
        "2024-01-19", "2024-01-20", "2024-01-21", "2024-01-22",
        "2024-01-23", "2024-01-24", "2024-01-25", "2024-01-26",
        "2024-01-27", "2024-01-28", ];
        return rdatedData.includes(date.toISOString().substring(0, 10));
    }

var Webflow = Webflow || [];
Webflow.push(function () {
	document.getElementsByClassName('date').flatpickr({
  	enableTime: true,
    time_24hr: true,
    minTime: "18:00",
    maxTime: "21:00",
    dateFormat: 'd.m.y H:i',
    disable: [rmydays, rmySpecificdays],
    locale: {
        "firstDayOfWeek": 1 // start week on Monday
    }

    // This outputs in the format of Month Day, Year HH:MM
    // There are a LOT of ways to format and it's super easy to swap.
    // See here: https://flatpickr.js.org/formatting/
  });
});

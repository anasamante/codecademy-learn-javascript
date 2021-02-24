/*
practice functions in JavaScript.
Functions help us build separation of concerns so our code isn’t one long function.
In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal
 */

const getSleepHours = day =>{
    day = day.toLowerCase();
    switch (day) {
        case 'monday' :
            return 8;
            break;
        case 'tuesday' :
            return 4;
            break;
        case 'wednesday' :
            return 6;
            break;
        case 'thursday' :
            return 7;
            break;
        case 'friday' :
            return 5;
            break;
        case 'saturday' :
            return 9;
            break;
        case 'sunday' :
            return 10;
            break;
        default :
            return 'Incorrect input';
    }
}

const getActualSleepHours = () => 8 + 4 + 6 + 7 + 5 + 9 + 10;

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {

    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);

    const differenceInHours = Math.abs(actualSleepHours - idealSleepHours);

    if (actualSleepHours === idealSleepHours){
        console.log(`the user got the perfect amount of sleep.`);
    }else if (actualSleepHours > idealSleepHours){
        console.log(`the user got more sleep than needed. the user went over ${differenceInHours} sleep hours.`);
    } else {
        console.log(`the user should get some rest. the user is under ${differenceInHours} sleep hours.`);
    }

}
calculateSleepDebt();
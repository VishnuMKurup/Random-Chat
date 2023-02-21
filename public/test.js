const currentTime = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday"];

switch(currentTime.getDay()) {
    case 0: console.log(days[0]);
        break;
    case 1: console.log(days[1]);
        break;
    case 2: console.log(days[2]);
            break;
    case 3: console.log(days[3]);
        break;
    case 4: console.log(days[4]);
        break;
    case 5: console.log(days[5]);
        break;
    case 6: console.log(days[6]);
        break;
    default: console.log("error");
}
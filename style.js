//Space Mission Control- schedule several one-time tasks, continuously monitor space station conditions, & execute rocket launch Using: setTimeout and setInterval 

//Step 1: Declare place to keep/hold one time tasks ID to use later, declare variable to store ID of monitor continously

//Task 1: Declare task array and interval ID //ARRAY N VARIABLE
let oneTimeTasks = []; //stores array for later
let monitoringTaskId; //store Id of monitoring process to stop later

// Step 2: Function to add One-Time Tasks- schedule the task for later by writing a function that accepts function(task) and uses a delay. Store info in oneTimeTasks array

//Task 2: Function to Add One-Time Task Function
//stores function and delay in the array to execute later
function addOneTimeTask(func, delay) {
    oneTimeTasks.push({function: func, delay: delay }) //push(add to end) object to array FUNCTION=function=func and delay=delay
    //to keep the delay and task together
} 

//Step 3: Function to Run One-Time Tasks (at correct time)
//loop through onetimetasks array and use setTimeout to execute after the delay

function runOneTimeTasks () {
    for (const task of oneTimeTasks) {
        setTimeout(task.function, task.delay); //executes each task at the right time
    }
}

//Step 4: PART 2: Start Monitoring Space Station
//check space station conditions continuously
//Use * setInterval(repeat runs) to print updates every 3 sec//store (Interval ID) to store n stop later

//Set up function to startMonitoring every 2 seconds (2000) with setInterval or interval Id in monitoringTaskID
function startMonitoring () {
    console.log("Starting continuous monitoring of space station parameters..."); //tell us when monitoring starts

    monitoringTaskId = setInterval(function () {
        //create repeating loop that runs every 2 secs and store the interval id in monitoringTaskId to stop later.
        console.log("Monitoring space station conditions..."); //prints every 2 sec
        const oxygenLevel = Math.random() * 100; //random # 1-100
        const powerStatus = Math.random() > 0.1 ? "Stable" : "Critical" //Flip a coin If the number is greater than 0.1 (90% chance), return "Stable".
        const communicationCheck = Math.random() > 0.05 ? "All systems go" : "Communication error"; //If the random number is greater than 0.05, return "All systems go"

//.toFixed(2) = write w 2 decimal places ex. "98.43%"" and % in percentage form
        console.log(`Oxygen Level: ${oxygenLevel.toFixed(2)}% | Power Status: ${powerStatus} | Communication: ${communicationCheck}`);
    }, 2000); //repeat 2000 milliseconds(2 sec) until we manualluy stop it.
}
// startMonitoring();

//Step 5: Stop Monitoring before launch
//use clearInterval(monitoringTaskId)
function stopMonitoring() {
    clearInterval(monitoringTaskId);
    console.log("Continuous monitoring stopped.");
}
// stopMonitoring();

//Step 6: Start Countdown before launching the rocket
//use setInterval to decrease the countdown every second and stop countdown at 0

function startCountdown(duration) {
    let timeLeft = duration;
    console.log(`Countdown started: ${timeLeft} seconds`);

    const countdownTimerId = setInterval(function (){
        timeLeft--;
        console.log(`T-minus ${timeLeft} seconds`);

        if (timeLeft <= 0) {
            clearInterval(countdownTimerId);
            console.log("Blastoff!");
        }
    }, 1000);
}
// startCountdown();

//Step 7: Schedule Pre-Launch and Launch
//pre-launch activities and launch

function scheduleMission() {
    startMonitoring();
    addOneTimeTask(() => console.log("Pre-launch system check complete."), 5000);
    addOneTimeTask(stopMonitoring, 10000);
    addOneTimeTask(() => startCountdown(10), 15000);
    runOneTimeTasks();
}
scheduleMission();


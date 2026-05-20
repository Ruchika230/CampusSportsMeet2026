
function updateDateTime(){

    const now = new Date();

    document.getElementById("date")
    .textContent =
    now.toLocaleDateString();

    document.getElementById("time")
    .textContent =
    now.toLocaleTimeString();

}

updateDateTime();

setInterval(updateDateTime, 1000);


const closedEvents = [
    "Football",
    "Volleyball"
];

const registeredParticipants = [];


let totalParticipants = 0;


const registrationForm =
document.getElementById("registrationForm");


if(registrationForm){

    registrationForm.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        const studentName =
        document.getElementById("studentName")
        .value.trim();

        const registerNumber =
        document.getElementById("registerNumber")
        .value.trim();

        const studentEmail =
        document.getElementById("studentEmail")
        .value.trim();

        const mobileNumber =
        document.getElementById("mobileNumber")
        .value.trim();

        const department =
        document.getElementById("department")
        .value.trim();

        const studyYear =
        document.getElementById("studyYear")
        .value;

        const selectedEvent =
        document.getElementById("selectedEvent")
        .value;

        const participationType =
        document.getElementById("participationType")
        .value;

        const teamName =
        document.getElementById("teamName")
        .value.trim();

        const teamMembers =
        document.getElementById("teamMembers")
        .value;

        const registrationMessage =
        document.getElementById("registrationMessage");

        // Clear Old Message

        registrationMessage.innerHTML = "";

        registrationMessage.className = "";

        const studentNamePattern =
        /^[A-Za-z\s]{3,40}$/;

        const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const mobilePattern =
        /^[6-9]\d{9}$/;

        const registerNumberPattern =
        /^[0-9]{2}[A-Z]{2,5}[0-9]{3}$/;

        if(!studentNamePattern.test(studentName)){

            registrationMessage.innerHTML =
            "Please enter a valid student name.";

            registrationMessage.classList
            .add("error-message");

            return;
        }

        if(!emailPattern.test(studentEmail)){

            registrationMessage.innerHTML =
            "Invalid email format.";

            registrationMessage.classList
            .add("error-message");

            return;
        }

        if(!mobilePattern.test(mobileNumber)){

            registrationMessage.innerHTML =
            "Mobile number should contain 10 digits.";

            registrationMessage.classList
            .add("error-message");

            return;
        }

        if(!registerNumberPattern
        .test(registerNumber)){

            registrationMessage.innerHTML =
            "Invalid register number format.";

            registrationMessage.classList
            .add("error-message");

            return;
        }

        if(selectedEvent === ""){

            registrationMessage.innerHTML =
            "Please select an event.";

            registrationMessage.classList
            .add("error-message");

            return;
        }

        if(closedEvents.includes(selectedEvent)){

            registrationMessage.innerHTML =
            "Registration for this event is closed.";

            registrationMessage.classList
            .add("error-message");

            return;
        }

        const duplicateParticipant =
        registeredParticipants.find(function(
        participant){

            return participant.registerNumber
            === registerNumber &&

            participant.selectedEvent
            === selectedEvent;

        });

        if(duplicateParticipant){

            registrationMessage.innerHTML =
            "Duplicate participation is not allowed.";

            registrationMessage.classList
            .add("error-message");

            return;
        }

        if(participationType === "Team"){

            // Team Name

            if(teamName === ""){

                registrationMessage.innerHTML =
                "Please enter team name.";

                registrationMessage.classList
                .add("error-message");

                return;

            }

            // Team Size

            if(teamMembers < 2 ||
            teamMembers > 6){

                registrationMessage.innerHTML =
                "Team size should be between 2 and 6.";

                registrationMessage.classList
                .add("error-message");

                return;

            }

        }

        registeredParticipants.push({

            studentName,
            registerNumber,
            selectedEvent

        });

        totalParticipants++;

        document.getElementById(
        "participantCount")
        .innerHTML = totalParticipants;


        registrationMessage.innerHTML =
        "Registration completed successfully.";

        registrationMessage.classList
        .add("success-message");


        const participantCard =
        document.createElement("div");

        participantCard.classList
        .add("participant-card");

        participantCard.innerHTML = `

            <h3>${studentName}</h3>

            <p>
                <strong>Register No:</strong>
                ${registerNumber}
            </p>

            <p>
                <strong>Department:</strong>
                ${department}
            </p>

            <p>
                <strong>Year:</strong>
                ${studyYear}
            </p>

            <p>
                <strong>Event:</strong>
                ${selectedEvent}
            </p>

            <p>
                <strong>Participation:</strong>
                ${participationType}
            </p>

        `;

        document.getElementById(
        "participantContainer")
        .appendChild(participantCard);

        registrationForm.reset();

    });

}



let totalRatings = 0;


let feedbackCounter = 0;


const feedbackForm =
document.getElementById("feedbackForm");


if(feedbackForm){

    feedbackForm.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        const feedbackStudentName =
        document.getElementById(
        "feedbackStudentName")
        .value.trim();

        const feedbackRegisterNumber =
        document.getElementById(
        "feedbackRegisterNumber")
        .value.trim();

        const attendedEvent =
        document.getElementById(
        "attendedEvent")
        .value;

        const eventRating =
        document.getElementById(
        "eventRating")
        .value;

        const feedbackComments =
        document.getElementById(
        "feedbackComments")
        .value.trim();

        const feedbackMessage =
        document.getElementById(
        "feedbackMessage");

        // Clear Old Message

        feedbackMessage.innerHTML = "";

        feedbackMessage.className = "";

        const registerNumberPattern =
        /^[0-9]{2}[A-Z]{2,5}[0-9]{3}$/;

        if(!registerNumberPattern
        .test(feedbackRegisterNumber)){

            feedbackMessage.innerHTML =
            "Invalid register number.";

            feedbackMessage.classList
            .add("error-message");

            return;
        }

        if(attendedEvent === ""){

            feedbackMessage.innerHTML =
            "Please select event.";

            feedbackMessage.classList
            .add("error-message");

            return;
        }

        if(eventRating === ""){

            feedbackMessage.innerHTML =
            "Please provide rating.";

            feedbackMessage.classList
            .add("error-message");

            return;
        }


        if(feedbackComments.length < 20){

            feedbackMessage.innerHTML =
            "Comments should contain minimum 20 characters.";

            feedbackMessage.classList
            .add("error-message");

            return;
        }

        feedbackMessage.innerHTML =
        "Feedback submitted successfully.";

        feedbackMessage.classList
        .add("success-message");

        const feedbackCard =
        document.createElement("div");

        feedbackCard.classList
        .add("participant-card");

        feedbackCard.innerHTML = `

            <h3>${feedbackStudentName}</h3>

            <p>
                <strong>Register No:</strong>
                ${feedbackRegisterNumber}
            </p>

            <p>
                <strong>Event:</strong>
                ${attendedEvent}
            </p>

            <p>
                <strong>Rating:</strong>
                ${eventRating}
            </p>

            <p>
                <strong>Comments:</strong>
                ${feedbackComments}
            </p>

        `;

        document.getElementById(
        "feedbackContainer")
        .appendChild(feedbackCard);

        totalRatings += Number(eventRating);

        feedbackCounter++;

        const averageRating =
        (totalRatings / feedbackCounter)
        .toFixed(1);

        document.getElementById(
        "averageRating")
        .innerHTML = averageRating;


        feedbackForm.reset();

    });

}
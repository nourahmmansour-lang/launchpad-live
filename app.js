<script>
const TODAY = "2026-07-24";
const MS_IN_A_DAY = 86400000;

const courseNames = [
    "HTML Basics",
    "CSS Styling",
    "JavaScript Basics",
    "React Development"
];

const courseStatuses = [
    "Completed",
    "In Progress",
    "Not Started",
    "Upcoming"
];

const courseLaunchDates = [
    "2026-07-19",
    "2026-07-24",
    "2026-07-28",
    "2026-12-14"
];

function daysLeft(dateString) {
    const target = new Date(dateString);
    const current = new Date(TODAY);
    return Math.round((target - current) / MS_IN_A_DAY);
}

function daysLabel(days) {
    if (days > 0) {
        return days + " days left";
    } else if (days === 0) {
        return "Launching today";
    } else {
        return "Already launched " + Math.abs(days) + " days ago";
    }
}

function filterByStatus(statusString) {
    let result = [];
    for (let i = 0; i < courseStatuses.length; i++) {
        if (courseStatuses[i] === statusString) {
            result.push(courseNames[i]);
        }
    }
    return result;
}

console.log("1) ALL COURSES");
console.log("------------------------");
for (let i = 0; i < courseNames.length; i++) {
    let d = daysLeft(courseLaunchDates[i]);
    console.log((i + 1) + ". " + courseNames[i] + " | " + courseStatuses[i] + " | " + daysLabel(d));
}

console.log("\n2) OPEN COURSES (In Progress)");
console.log("------------------------");
let openCourses = filterByStatus("In Progress");
for (let i = 0; i < openCourses.length; i++) {
    let index = courseNames.indexOf(openCourses[i]);
    let d = daysLeft(courseLaunchDates[index]);
    console.log((i + 1) + ". " + openCourses[i] + " | In Progress | " + daysLabel(d));
}

console.log("\n3) UPCOMING COURSES");
console.log("------------------------");
let count = 1;
for (let i = 0; i < courseNames.length; i++) {
    let d = daysLeft(courseLaunchDates[i]);
    if (d > 0) {
        console.log(count + ". " + courseNames[i] + " | " + courseStatuses[i] + " | " + d + " days left");
        count++;
    }
}
</script>
// Course data
const courseData = [
    { code: "CS 128", name: "Introduction to Computer Science", link: "https://cs128.org/" },
    { code: "CS 222", name: "Software Design Lab", link: "https://courses.grainger.illinois.edu/CS222/sp2023/" },
    { code: "CS 241", name: "System Programming", link: "https://cs341.cs.illinois.edu/" },
    { code: "CS 374", name: "Intro to Algs & Models of Comp", link: "https://ecealgo.com/" },
    // Add more courses as needed
];

// Function to generate course table
function generateCourseTable(data) {
    const courseTable = document.getElementById("courseTable");
    const tbody = courseTable.getElementsByTagName("tbody")[0];

    data.forEach(course => {
        const row = document.createElement("tr");
        const codeCell = document.createElement("td");
        const titleCell = document.createElement("td");

        const courseLink = document.createElement("a");
        courseLink.href = course.link;
        courseLink.textContent = course.code;
        codeCell.appendChild(courseLink);

        titleCell.textContent = course.name;

        row.appendChild(codeCell);
        row.appendChild(titleCell);

        tbody.appendChild(row);
    });
}

// Generate the course table on page load
generateCourseTable(courseData);

let employees = [];

// SUBMIT BUTTON
document.getElementById("submit").addEventListener("click", () => {

    employees = [
        {
            name: document.getElementById("Name5").value,
            branch: document.getElementById("Branch5").value
        },
        {
            name: document.getElementById("Name4").value,
            branch: document.getElementById("Branch4").value
        },
        {
            name: document.getElementById("Name1").value,
            branch: document.getElementById("Branch1").value
        },
        {
            name: document.getElementById("Name2").value,
            branch: document.getElementById("Branch2").value
        }
    ];

    alert("Employee data saved successfully ✅");
});


// SHOW BUTTON
document.getElementById("show").addEventListener("click", () => {

    document.getElementById("showinfo1").textContent = `Name - ${employees[0].name}`;
    document.getElementById("showinfo2").textContent = `Branch - ${employees[0].branch}`;

    document.getElementById("showinfo3").textContent = `Name - ${employees[1].name}`;
    document.getElementById("showinfo4").textContent = `Branch - ${employees[1].branch}`;

    document.getElementById("showinfo5").textContent = `Name - ${employees[2].name}`;
    document.getElementById("showinfo6").textContent = `Branch - ${employees[2].branch}`;

    document.getElementById("showinfo7").textContent = `Name - ${employees[3].name}`;
    document.getElementById("showinfo8").textContent = `Branch - ${employees[3].branch}`;
});


// FIND BUTTON (BY BRANCH)
document.getElementById("find").addEventListener("click", () => {

    const searchBranch = document.getElementById("Branch10").value;

    const result = employees.find(emp => emp.branch === searchBranch);

    if (result) {
        document.getElementById("findinfo").textContent =
            `Found: ${result.name} (${result.branch})`;
    } else {
        document.getElementById("findinfo").textContent =
            "No employee found in this branch ❌";
    }
});

let searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        let filter = searchInput.value.toLowerCase();
        let jobs = document.querySelectorAll(".job-card");

        jobs.forEach(job => {
            let text = job.innerText.toLowerCase();

            if (text.includes(filter)) {
                job.style.display = "block";
            } else {
                job.style.display = "none";
            }
        });
    });
}

function showForm() {
    document.getElementById("applyForm").style.display = "block";
}

function submitApplication() {
    alert("Application submitted successfully!");
}
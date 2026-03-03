function addStudent() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const course = document.getElementById("course").value;

  fetch("http://localhost:5000/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, course })
  })
  .then(res => res.json())
  .then(() => {
    loadStudents();
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("course").value = "";
  });
}

function loadStudents() {
  fetch("http://localhost:5000/students")
    .then(res => res.json())
    .then(data => {
      const table = document.getElementById("studentTable");
      table.innerHTML = "";

      data.forEach(student => {
        table.innerHTML += `
          <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>
            <td>
              <button class="delete-btn" onclick="deleteStudent(${student.id})">
                Delete
              </button>
            </td>
          </tr>
        `;
      });
    });
}

function deleteStudent(id) {
  fetch(`http://localhost:5000/students/${id}`, {
    method: "DELETE"
  }).then(() => loadStudents());
}

loadStudents();
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'London'
};

const studentsList: Student[] = [student1, student2];

// Create a table
const table = document.createElement('table');
table.border = "1"; // 👈 this adds a visible border

// Create table header
const header = document.createElement('tr');
header.innerHTML = "<th>First Name</th><th>Location</th>";
table.appendChild(header);

// Create rows
studentsList.forEach(student => {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  table.appendChild(row);
});

document.body.appendChild(table);

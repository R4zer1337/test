// Handle login form submission
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulate user authentication (replace with actual authentication logic)
  if (username === 'admin' && password === 'password123') {
    showDispatchContainer(); // Display dispatch interface for admin
  } else if (username === 'officer' && password === 'officer123') {
    showDispatchContainer(); // Display dispatch interface for officer
  } else {
    alert('Invalid username or password.');
  }
});

// Function to show the dispatch container and hide the login container
function showDispatchContainer() {
  document.getElementById('login-container').style.display = 'none';
  document.getElementById('dispatch-container').style.display = 'block';

  // Fetch and display employee data based on user role (admin or officer)
  fetchEmployeeData();
}

// Function to fetch and display employee data (placeholder)
function fetchEmployeeData() {
  // Simulate fetching employee data from a database or API
  const employeeData = [
    { dienstnummer: 1234, rank: 'Sergeant', einstellungsdatum: '2020-01-01', letzterRankUp: '2022-05-15' },
    { dienstnummer: 5678, rank: 'Officer', einstellungsdatum: '2021-03-01', letzterRankUp: '2023-11-01' },
    // Add more employee data as needed
  ];

  // Populate the employee table with data
  const employeeList = document.getElementById('employee-list').querySelector('tbody');
  employeeList.innerHTML = ''; // Clear existing data

  employeeData.forEach(employee => {
    const row = employeeList.insertRow();
    row.insertCell().textContent = employee.dienstnummer;
    row.insertCell().textContent = employee.rank;
    row.insertCell().textContent = employee.einstellungsdatum;
    row.insertCell().

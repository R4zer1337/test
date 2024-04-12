const incidentForm = document.getElementById('incidentForm');
const incidentList = document.getElementById('incidentList');

incidentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const incidentType = document.getElementById('incidentType').value;
    const incidentLocation = document.getElementById('incidentLocation').value;
    const incidentDescription = document.getElementById('incidentDescription').value;

    // Create a new incident object
    const incident = {
        type: incidentType,
        location: incidentLocation,
        description: incidentDescription
    };

    // Add the incident to the list
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <h3>${incident.type}</h3>
        <p>Ort: ${incident.location}</p>
        <p>Beschreibung: ${incident.description}</p>
    `;
    incidentList.appendChild(listItem);

    // Clear the form
    incidentForm.reset();
});

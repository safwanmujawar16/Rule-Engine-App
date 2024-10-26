// function createRule() {
//     const ruleString = document.getElementById('ruleInput').value;
//     fetch('/api/rules/create', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ ruleString })
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert('Rule created with ID: ' + data._id);
//     })
//     .catch(err => {
//         alert('Error creating rule: ' + err.message);
//     });
// }

// function evaluateRule() {
//     const data = JSON.parse(document.getElementById('dataInput').value);
//     const ruleId = document.getElementById('ruleId').value;
//     fetch('/api/rules/evaluate', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ ruleId, data })
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert('Rule evaluation result: ' + data.result);
//     })
//     .catch(err => {
//         alert('Error evaluating rule: ' + err.message);
//     });
// }
const BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:3000' : 'https://rule-engine-app-2-euur.onrender.com';

function createRule() {
    const ruleString = document.getElementById('ruleInput').value;

     console.log('Creating rule with string:', ruleString); // Debug log
    console.log('Using BASE_URL:', BASE_URL); // Debug log

    fetch(`${BASE_URL}/api/rules/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ruleString })
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => { // Get the response text for more details
                throw new Error(`Network response was not ok: ${response.status} - ${text}`);
            });
        }
        return response.json(); // Only parse if the response is OK
    })
    .then(data => {
        alert('Rule created with ID: ' + data._id);
    })
    .catch(err => {
        console.error('Error creating rule:', err); // Log error to console for 
        alert('Error creating rule: ' + err.message);
    });
}

function evaluateRule() {
    const data = JSON.parse(document.getElementById('dataInput').value);
    const ruleId = document.getElementById('ruleId').value;

    fetch(`${BASE_URL}/api/rules/evaluate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ruleId, data })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json(); // Only parse if the response is OK
    })
    .then(data => {
        alert('Rule evaluation result: ' + data.result);
    })
    .catch(err => {
        alert('Error evaluating rule: ' + err.message);
    });
}

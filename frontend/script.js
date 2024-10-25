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

function createRule() {
    const ruleString = document.getElementById('ruleInput').value;

    fetch('http://localhost:3000/api/rules/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ruleString })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json(); // Only parse if the response is OK
    })
    .then(data => {
        alert('Rule created with ID: ' + data._id);
    })
    .catch(err => {
        alert('Error creating rule: ' + err.message);
    });
}

function evaluateRule() {
    const data = JSON.parse(document.getElementById('dataInput').value);
    const ruleId = document.getElementById('ruleId').value;

    fetch('http://localhost:3000/api/rules/evaluate', {
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
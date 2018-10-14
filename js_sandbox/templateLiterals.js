const name = 'Noman'
const age = 24;
const job = 'Developer';
const city = 'Chicago';
const state = 'Illinois';

// Including HTML inside our JS

html = '<ul><li>Name: ' + name + '</li></ul>';
html = '<ul>' +
            '<li>Age: '+age+'</li>'+
            '<li>Age: '+age+'</li>'+
            '<li>Age: '+age+'</li>'+
        '</ul>';

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>City: ${city}</li>
        <li>Job: ${job}</li>
        <li>State: ${state}</li>
        <li>${age>30 ? "Over 30" : "Under 30"}</li>
    </ul>
`

//Output
document.body.innerHTML = html;
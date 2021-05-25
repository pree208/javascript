const name = 'preethi';
const age = 20;
const job = 'web developer';
const city = 'perambalur';
let html;

//without template strings(es5)
html = '<ul><li>Name:' + name + '</li><li>Age:' + age + '</li><li>Job:' + job + '</li><li>City:' + city + '</li></ul>'

html = '<ul>' +
  '<li>Name:' + name + '</li>' +
  '<li>Age:' + age + '</li>' +
  '<li>Job:' + job + '</li>' +
  '<li>City:' + city + '</li>' +
  '</ul>'


//with template strings(es6)

html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
</ul>
`;


document.body.innerHTML = html;
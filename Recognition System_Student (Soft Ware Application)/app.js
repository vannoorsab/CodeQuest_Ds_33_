const fs = require('fs'); 
const studentForm = document.getElementById('studentForm');
const successMessage = document.getElementById('successMessage');
const viewDataBtn = document.getElementById('viewData');
const viewTop3Btn = document.getElementById('viewTop3');
const dataDisplay = document.getElementById('dataDisplay');
const top3Display = document.getElementById('top3Display');
const allDataSection = document.getElementById('allData');
const topStudentsSection = document.getElementById('topStudents');
const scrollToAllDataBtn = document.getElementById('scrollToAllData');
const scrollToTop3Btn = document.getElementById('scrollToTop3');


studentForm.addEventListener('submit', function (event) {
    event.preventDefault();

    
    const name = document.getElementById('name').value;
    const batch = document.getElementById('batch').value;
    const academic = parseFloat(document.getElementById('academic').value);
    const coreCourses = parseFloat(document.getElementById('core_courses').value);
    const hackathons = parseInt(document.getElementById('hackathons').value, 10);
    const papers = parseInt(document.getElementById('papers').value, 10);
    const contributions = parseFloat(document.getElementById('contributions').value);

    
    const score = (academic * 0.4) + 
                  (coreCourses * 0.3) + 
                  (hackathons * 0.1) + 
                  (papers * 0.1) + 
                  (contributions * 0.1);

    
    const student = { name, batch, academic, coreCourses, hackathons, papers, contributions, score };


    let students = [];
    if (fs.existsSync('students.json')) {
        const data = fs.readFileSync('students.json', 'utf-8');
        students = JSON.parse(data);
    }

    
    students.push(student);
    
    fs.writeFileSync('students.json', JSON.stringify(students, null, 2));
    const top3 = students.sort((a, b) => b.score - a.score).slice(0, 3);
    fs.writeFileSync('top_students.json', JSON.stringify(top3, null, 2));

    successMessage.classList.remove('hidden');
    studentForm.reset();
});


viewDataBtn.addEventListener('click', () => {
    allDataSection.classList.remove('hidden');
    const students = JSON.parse(fs.readFileSync('students.json', 'utf-8'));
    dataDisplay.innerHTML = students.map(student =>
        `<p>${student.name} (Batch: ${student.batch}) - Score: ${student.score.toFixed(2)}</p>`
    ).join('');


    dataDisplay.scrollTop = dataDisplay.scrollHeight;
});


viewTop3Btn.addEventListener('click', () => {
    topStudentsSection.classList.remove('hidden');
    const top3 = JSON.parse(fs.readFileSync('top_students.json', 'utf-8'));
    
    top3Display.innerHTML = top3.map(student =>
        `<p>${student.name} - Score: ${student.score.toFixed(2)}</p>`
    ).join('');


    top3Display.scrollTop = top3Display.scrollHeight;
});


scrollToAllDataBtn.addEventListener('click', () => {
    allDataSection.scrollIntoView({ behavior: 'smooth' });
});


scrollToTop3Btn.addEventListener('click', () => {
    topStudentsSection.scrollIntoView({ behavior: 'smooth' });
});

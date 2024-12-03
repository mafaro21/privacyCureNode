const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8800

// Middleware to parse incoming request bodies (form data)
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., your HTML form) from the public directory
app.use(express.static(path.join(__dirname, './documents/')));

app.get('/', (req, res) => {
    res.send('working')
})

app.post('/submit-form', (req, res) => {
    // Get data from the form submission
    const { name, email, phone, request, message } = req.body
    console.log('Received data:', { name, email, phone, request, message });

    // You can process the data here, such as saving to a database

    // Send a response back to the client
    // res.send(`Thank you for submitting, ${name}. We will contact you at ${email}.`);
    res.redirect('/index.html')
});


app.get('/cdpa', (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join('./documents/Cyber & Data Protection Act Cap1207 No 5 of 2021.pdf');

    res.download(filePath, fileName, (err) => {
    })
})

app.get('/cdpr', (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join('./documents/sI 155 of 2024 Cyber and Data Protection.pdf');

    res.download(filePath, fileName, (err) => {
    })
})

app.get('/license', (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join('./documents/Data Controller Application Form.docx');

    res.download(filePath, fileName, (err) => {
    })
})

app.get('/guidelines', (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join('./documents/Implementation Guidelines on Appointment, Roles, Responsibilities, Training and Certification of Data Protection Officers.pdf');
    // const filePath = path.join('./documents/Implementation and Guidelines for Data Protection Officers.pdf');

    res.download(filePath, fileName, (err) => {
    })
})

app.get('/breach', (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join('./documents/DP3 - DATA BREACH NOTIFICATION FORM.pdf');

    res.download(filePath, fileName, (err) => {
    })
})

app.get('/dpo', (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join('./documents/DP2 - DPO NOTIFICATION FORM.pdf');

    res.download(filePath, fileName, (err) => {
    })
})

app.get('/jd', (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join('./documents/DATA PROTECTION OFFICER JOB DESCRIPTION.pdf');

    res.download(filePath, fileName, (err) => {
    })
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

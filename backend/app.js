const express = require("express");
const path = require("path");

const app = express();

// Define port (Production ready)
const port = process.env.PORT || 8000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve frontend assets (CSS, JS)
app.use('/assets', express.static(path.join(__dirname, '../frontend')));

// Serve images
app.use('/static', express.static(path.join(__dirname, 'static')));

// Pug setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// STRICT Validation Functions
function validateName(name) {
    const trimmed = name.trim();
    return trimmed.length >= 3 && /^[a-zA-Z\s]+$/.test(trimmed);
}

function validatePhone(phone) {
    return /^\d{10}$/.test(phone.trim()); // Exactly 10 digits
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

// Routes
app.get('/', (req, res) => { 
    res.status(200).render('home');
});

app.get('/about', (req, res) => { 
    res.status(200).render('about');
});

app.get('/contact', (req, res) => { 
    res.status(200).render('contact');
});

// STRICT Contact Form Validation (Name*, Email*, Phone* REQUIRED)
app.post('/contact', (req, res) => {
    const { name, phone, email, address, desc } = req.body;
    
    // Validation with specific error messages
    let errors = [];
    
    if (!name || !validateName(name)) {
        errors.push("Name* must be at least 3 characters (letters only)");
    }
    
    if (!phone || !validatePhone(phone)) {
        errors.push("Phone* must be exactly 10 digits (numbers only)");
    }
    
    if (!email || !validateEmail(email)) {
        errors.push("Email* must contain valid @ symbol (e.g. example@gmail.com)");
    }
    
    // Show errors if any
    if (errors.length > 0) {
        return res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Form Error - Useless Dance Academy</title>
                <link href="https://fonts.googleapis.com/css?family=Yeon+Sung|ZCOOL+QingKe+HuangYou&display=swap" rel="stylesheet">
                <style>
                    * { margin: 0; padding: 0; box-sizing: border-box; }
                    body {
                        font-family: 'ZCOOL QingKe HuangYou', sans-serif;
                        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%);
                        min-height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 2rem;
                    }
                    .error-container {
                        background: white;
                        padding: 6rem 4rem;
                        border-radius: 35px;
                        box-shadow: 0 35px 90px rgba(0,0,0,0.12);
                        max-width: 700px;
                        width: 100%;
                        text-align: center;
                        border-top: 8px solid #dc2626;
                    }
                    .error-title {
                        font-family: 'Yeon Sung', cursive;
                        font-size: clamp(3rem, 8vw, 5rem);
                        color: #dc2626;
                        margin-bottom: 2rem;
                    }
                    .error-list {
                        background: #fef2f2;
                        border: 2px solid #fecaca;
                        border-radius: 15px;
                        padding: 2.5rem;
                        margin: 2rem 0;
                        text-align: left;
                    }
                    .error-list h3 {
                        color: #dc2626;
                        margin-bottom: 1.5rem;
                        font-family: 'Yeon Sung', cursive;
                        font-size: 1.8rem;
                    }
                    .error-list ul {
                        list-style: none;
                        font-size: 1.4rem;
                        color: #991b1b;
                        line-height: 1.6;
                    }
                    .error-list li {
                        padding: 1rem 0;
                        position: relative;
                        padding-left: 2rem;
                    }
                    .error-list li::before {
                        content: "✕";
                        color: #dc2626;
                        font-weight: bold;
                        position: absolute;
                        left: 0;
                        font-size: 1.2rem;
                    }
                    .back-btn {
                        display: inline-block;
                        background: linear-gradient(135deg, #2563eb, #1d4ed8);
                        color: white;
                        padding: 1.5rem 3rem;
                        font-size: 1.6rem;
                        text-decoration: none;
                        border-radius: 30px;
                        font-weight: bold;
                        font-family: 'Yeon Sung', cursive;
                        transition: all 0.3s ease;
                        box-shadow: 0 10px 30px rgba(37,99,235,0.3);
                        text-transform: uppercase;
                        letter-spacing: 1px;
                    }
                    .back-btn:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 20px 40px rgba(37,99,235,0.4);
                    }
                    @media (max-width: 768px) {
                        .error-container { padding: 4rem 2rem; }
                        .error-list { padding: 2rem; }
                    }
                </style>
            </head>
            <body>
                <div class="error-container">
                    <h1 class="error-title">Validation Error!</h1>
                    <div class="error-list">
                        <h3>Please fix these required fields:</h3>
                        <ul>${errors.map(error => `<li>${error}</li>`).join('')}</ul>
                    </div>
                    <a href="/contact" class="back-btn">Fix Form ←</a>
                </div>
            </body>
            </html>
        `);
    }
    
    // SUCCESS - All validations passed
    console.log('VALIDATED Contact Form Submission:', {
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        address: address || 'Not provided',
        message: desc || 'Not provided'
    });
    
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank You - Useless Dance Academy</title>
            <link href="https://fonts.googleapis.com/css?family=Yeon+Sung|ZCOOL+QingKe+HuangYou&display=swap" rel="stylesheet">
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body {
                    font-family: 'ZCOOL QingKe HuangYou', sans-serif;
                    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%);
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                }
                .success-container {
                    background: white;
                    padding: 6rem 4rem;
                    border-radius: 35px;
                    box-shadow: 0 35px 90px rgba(0,0,0,0.12);
                    max-width: 700px;
                    width: 100%;
                    text-align: center;
                    border-top: 8px solid #2563eb;
                }
                .success-title {
                    font-family: 'Yeon Sung', cursive;
                    font-size: clamp(3rem, 8vw, 5rem);
                    color: #2563eb;
                    margin-bottom: 2rem;
                }
                .success-message {
                    font-size: clamp(1.4rem, 4vw, 2rem);
                    color: #64748b;
                    margin-bottom: 3rem;
                    line-height: 1.7;
                }
                .database-notice {
                    background: #eff6ff;
                    padding: 2.5rem;
                    border-radius: 20px;
                    border-left: 6px solid #2563eb;
                    margin: 3rem 0;
                    font-size: 1.3rem;
                    color: #1e40af;
                    line-height: 1.6;
                }
                .back-btn {
                    display: inline-block;
                    background: linear-gradient(135deg, #2563eb, #1d4ed8);
                    color: white;
                    padding: 1.5rem 3rem;
                    font-size: 1.6rem;
                    text-decoration: none;
                    border-radius: 30px;
                    font-weight: bold;
                    font-family: 'Yeon Sung', cursive;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 30px rgba(37,99,235,0.3);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .back-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 20px 40px rgba(37,99,235,0.4);
                }
                @media (max-width: 768px) {
                    .success-container { padding: 4rem 2rem; }
                }
            </style>
        </head>
        <body>
            <div class="success-container">
                <h1 class="success-title">Thank You!</h1>
                <p class="success-message">
                    We received your message. Our team will contact you within 24 hours.
                </p>
                
                <div class="database-notice">
                    <strong>Database Notice:</strong><br>
                    Currently running in demo mode. Database connection is disabled for portfolio showcase.<br>
                    Your details are safely logged for demonstration purposes.
                </div>
                
                <a href="/" class="back-btn">Back to Home</a>
            </div>
        </body>
        </html>
    `);
});

// Start Server
app.listen(port, () => {
    console.log(`Useless Dance Academy running on port ${port}`);

});

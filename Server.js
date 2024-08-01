const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("C:\\Ruchith\\Griffith Uni-20240618T014729Z-001\\Griffith Uni\\Software Frameworks\\Week 3"));

const users = [
  { email: 'email1@com.au', password: '123' },
  { email: 'email2@com.au', password: '456' },
  { email: 'email3@com.au', password: '789' }
];

app.get('/', (req, res) => {
  res.send(`
    <form action="/login" method="post">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"><br><br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password"><br><br>
      <button type="submit">Login</button>
    </form>
  `);
});

app.get('/account', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Account Page</title>
        <style> body {background: darkolivegreen; text-align: center}</style>
      </head>
      <body>
        <h2>Account Information</h2>
        <img src="download.jpeg" alt="User Image">
        <p>Name: John Doe</p>
      </body>
    </html>
  `);
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.redirect("/account")

  } else {
    res.json({ valid: false });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

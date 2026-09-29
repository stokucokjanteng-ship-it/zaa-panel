const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let users = [{ username: 'admin', password: '123456' }];

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>ZAA PANEL</title>
<style>
body{background:#000;color:#0f0;font-family:monospace;display:flex;justify-content:center;align-items:center;height:100vh;margin:0}
.box{border:2px solid #0f0;padding:30px;border-radius:10px;width:90%;max-width:350px;box-shadow:0 0 20px #0f0}
h2{text-align:center}
input{width:100%;padding:12px;margin:8px 0;background:#111;border:1px solid #0f0;color:#0f0;border-radius:5px;box-sizing:border-box}
button{width:100%;padding:12px;background:#0f0;color:#000;border:none;font-weight:bold;border-radius:5px;margin-top:10px}
</style>
</head>
<body>
<div class="box">
<h2>ZAA PANEL LOGIN</h2>
<form method="POST" action="/login">
<input name="username" placeholder="Username" required>
<input name="password" type="password" placeholder="Password" required>
<button type="submit">LOGIN</button>
</form>
<p style="text-align:center;font-size:12px;margin-top:15px">admin / 123456</p>
</div>
</body>
</html>
  `);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const found = users.find(u => u.username === username && u.password === password);
  if (found) {
    res.send(`
      <body style="background:#000;color:#0f0;font-family:monospace;display:flex;justify-content:center;align-items:center;height:100vh">
      <div style="text-align:center;border:2px solid #0f0;padding:40px;border-radius:10px">
      <h1>LOGIN SUKSES!</h1>
      <p>Welcome ${username}</p>
      <h2 style="color:white">ZAA PANEL AKTIF</h2>
      <p>Panel lu udah jadi!</p>
      </div>
      </body>
    `);
  } else {
    res.send('<h2 style="color:red;text-align:center">LOGIN GAGAL! <a href="/">Balik</a></h2>');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('ZAA PANEL RUN ON ' + PORT));

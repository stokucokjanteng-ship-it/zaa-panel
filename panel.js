const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
  <body style="background:black;color:white;text-align:center;padding-top:50px;font-family:sans-serif">
    <h2 style="color:#00ff88">ZAA PANEL LOGIN 🚀</h2>
    <form method="POST" action="/login" style="margin-top:20px">
      <input name="username" placeholder="Username" style="padding:10px"><br><br>
      <input name="password" type="password" placeholder="Password" style="padding:10px"><br><br>
      <button style="padding:10px 20px;background:#00ff88;border:none">LOGIN</button>
    </form>
  </body>
  `);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '123456') {
    res.redirect('/panel');
  } else {
    res.send('Gagal login <a href="/">kembali</a>');
  }
});

app.get('/panel', (req, res) => {
  res.send(`
  <body style="background:black;color:white;text-align:center;padding-top:50px">
    <h2 style="color:#00ff88">ZAA PANEL AKTIF 🚀</h2>
    <div style="background:#111;padding:20px;border-radius:10px;display:inline-block">
      <h3>Status: ONLINE</h3>
      <p>Deploy berhasil!</p>
      <p>Username default: admin<br>Password: 123456</p>
    </div>
  </body>
  `);
});

app.listen(process.env.PORT || 3000);

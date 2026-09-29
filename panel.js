const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <body style="background:black;color:white;font-family:sans-serif;display:flex;justify-content:center;align-items:center;height:100vh">
      <form method="POST" action="/login" style="background:#111;padding:30px;border-radius:15px;text-align:center;width:300px">
        <h2 style="color:#0f0">ZAA PANEL LOGIN</h2>
        <input name="user" placeholder="Username" style="width:100%;padding:10px;margin:10px 0;border-radius:8px"><br>
        <input name="pass" type="password" placeholder="Password" style="width:100%;padding:10px;margin:10px 0;border-radius:8px"><br>
        <button style="width:100%;padding:10px;background:#0f0;color:black;font-weight:bold;border-radius:8px">LOGIN</button>
      </form>
    </body>
  `);
});

app.post('/login', (req,res)=>{
  if(req.body.user==='admin' && req.body.pass==='123456'){
    res.send('<h1 style="background:black;color:#0f0;text-align:center;padding-top:100px">✅ LOGIN BERHASIL! Selamat datang di ZAA PANEL 🚀</h1>');
  } else {
    res.send('<h1 style="color:red;text-align:center;padding-top:100px">Password salah! <a href="/">Coba lagi</a></h1>');
  }
});

app.listen(process.env.PORT || 3000, ()=> console.log('aktif'));

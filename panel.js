const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req,res)=>{
  res.send(`
  <html>
  <head><title>ZAA PANEL</title>
  <style>
  body{background:#0f0f0f;color:white;font-family:sans-serif;text-align:center;padding:50px}
  h1{color:#00ff88} 
  .box{background:#1a1a1a;padding:20px;border-radius:10px;margin-top:20px}
  </style>
  </head>
  <body>
  <h1>ZAA PANEL AKTIF 🚀</h1>
  <div class="box">
  <h2>Status: ONLINE</h2>
  <p>Deploy berhasil!</p>
  <p>Username default: admin<br>Password: 123456</p>
  </div>
  </body>
  </html>
  `);
});

app.listen(PORT, ()=> console.log('ZAA PANEL jalan di port '+PORT));

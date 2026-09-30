const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send(`
  <body style="background:#000;color:#fff;font-family:sans-serif;text-align:center;padding-top:50px">
  <h1 style="color:#00ff88">ZAA PANEL AKTIF ✅</h1>
  <p>Web lu udah bisa dijangkau!</p>
  <a href="/panel" style="background:#00ff88;color:#000;padding:12px 20px;text-decoration:none;border-radius:8px;font-weight:bold">MASUK PANEL</a>
  </body>`);
});
app.get('/panel', (req,res) => {
  res.send(`
  <body style="background:#000;color:#fff;font-family:sans-serif;padding:20px">
  <h2 style="color:#00ff88">ZAA PANEL STORE</h2>
  <form onsubmit="buat(event)" style="background:#111;padding:15px;border-radius:10px;max-width:400px">
  <input id="u" placeholder="Username" required style="width:90%;padding:10px;margin:5px;background:#222;color:#fff;border:1px solid #333"><br>
  <input id="p" placeholder="Password" required style="width:90%;padding:10px;margin:5px;background:#222;color:#fff;border:1px solid #333"><br>
  <select id="r" style="width:95%;padding:10px;margin:5px;background:#222;color:#fff"><option>1GB</option><option>2GB</option><option>5GB</option><option>UNLIMITED</option></select><br>
  <button style="width:95%;padding:12px;background:#00ff88;border:none;font-weight:bold;border-radius:6px">CREATE PANEL</button>
  </form>
  <div id="hasil"></div>
  <script>
  function buat(e){e.preventDefault();let u=document.getElementById('u').value,p=document.getElementById('p').value,r=document.getElementById('r').value;document.getElementById('hasil').innerHTML='<div style=\\'background:#111;border-left:3px solid #00ff88;padding:10px;margin-top:15px\\'><b>USERNAME:</b> '+u+'<br><b>PASSWORD:</b> '+p+'<br><b>RAM:</b> '+r+'<br><br><small style=\\'color:#888\\'>Copy kirim ke pembeli</small></div>';}
  </script></body>`);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log('Running on '+PORT));

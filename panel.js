const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
let panels = [];
app.get('/', (req, res) => { res.redirect('/panel'); });
app.get('/panel', (req, res) => {
  let list = panels.map(p => `<li style="background:#111;padding:10px;margin:5px;border-left:3px solid #00ff88">User: <b>${p.user}</b> | Pass: <b style="color:#00ff88">${p.pw}</b> | Ram: ${p.ram}</li>`).join('');
  res.send(`<body style="background:#000;color:white;font-family:sans-serif;padding:20px"><h2 style="color:#00ff88">ZAA PANEL AKTIF 🚀</h2><p style="color:#aaa">Login otomatis - gak perlu password</p><div style="background:#111;padding:20px;border-radius:10px;max-width:500px"><h3>Create Panel Baru</h3><form method="POST" action="/create"><input name="user" placeholder="Username Panel" required style="padding:10px;width:90%;margin:5px;background:#222;color:white;border:1px solid #333"><br><input name="pw" placeholder="Password Panel" required style="padding:10px;width:90%;margin:5px;background:#222;color:white;border:1px solid #333"><br><select name="ram" style="padding:10px;width:92%;margin:5px;background:#222;color:white;border:1px solid #333"><option value="1GB">1GB</option><option value="2GB">2GB</option><option value="4GB">4GB</option><option value="8GB">8GB</option><option value="Unlimited">Unlimited</option></select><br><button style="padding:10px 20px;background:#00ff88;border:none;margin-top:10px;width:92%;font-weight:bold">CREATE SEKARANG</button></form></div><h3 style="margin-top:30px">List Panel Terbuat (${panels.length}):</h3><ul style="list-style:none;padding:0;max-width:500px">${list || '<p style="color:#666">Belum ada panel</p>'}</ul></body>`);
});
app.post('/create', (req, res) => {
  panels.push({ user: req.body.user, ram: req.body.ram, pw: req.body.pw });
  res.redirect('/panel');
});
app.listen(process.env.PORT || 3000, () => console.log('ZAA PANEL RUN NO LOGIN'));

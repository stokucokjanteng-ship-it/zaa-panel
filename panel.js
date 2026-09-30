const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
let db = [];
app.get('/', (req,res)=>res.redirect('/panel'));
app.get('/panel', (req,res)=>{
  let html = db.map((d,i)=>`
  <div style="background:#111;border-left:3px solid #00ff88;padding:10px;margin:8px 0;border-radius:6px">
  <b>#${i+1} ${d.user}</b> - ${d.ram}<br>
  <small style="color:#888">User: ${d.user} | Pass: <span style="color:#00ff88">${d.pw}</span><br>
  Link Login: ${d.domain}/<br>
  Dibuat: ${d.date}</small>
  </div>`).join('');
  res.send(`
  <body style="background:#000;color:#fff;font-family:sans-serif;padding:15px">
  <h2 style="color:#00ff88">ZAA PANEL STORE 🚀</h2>
  <div style="background:#111;padding:15px;border-radius:10px;max-width:400px;border:1px solid #222">
  <h3>Create Panel</h3>
  <form method="POST" action="/create">
  <input name="user" placeholder="Username Panel" required style="width:90%;padding:10px;margin:5px;background:#222;color:#fff;border:1px solid #333"><br>
  <input name="pw" placeholder="Password Panel" required style="width:90%;padding:10px;margin:5px;background:#222;color:#fff;border:1px solid #333"><br>
  <input name="domain" placeholder="Link Panel Ptero (isi nanti kalo ada)" value="https://panel.zaa-store.my.id" style="width:90%;padding:10px;margin:5px;background:#222;color:#fff;border:1px solid #333"><br>
  <select name="ram" style="width:95%;padding:10px;margin:5px;background:#222;color:#fff"><option>1GB</option><option>2GB</option><option>4GB</option><option>8GB</option><option>UNLIMITED</option></select><br>
  <button style="width:95%;padding:12px;background:#00ff88;border:none;font-weight:bold;margin-top:10px;border-radius:6px">CREATE</button>
  </form>
  </div>
  <h3>List Order (${db.length})</h3>
  <div style="max-width:400px">${html || '<p style="color:#666">Belum ada</p>'}</div>
  <script>if(window.location.search.includes('created')){alert('PANEL BERHASIL DIBUAT! Copy data dan kirim ke pembeli');}</script>
  </body>`);
});
app.post('/create', (req,res)=>{
  db.push({...req.body, date: new Date().toLocaleString('id-ID')});
  res.redirect('/panel?created=1');
});
app.listen(process.env.PORT || 3000, '0.0.0.0', () => console.log('RUN'));

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const BOT_TOKEN = "8654218018:AAHW4TUDal_gospQs6VjAA9HYWiPe_6c8Ro";
const CHAT_ID = "8553930415";

app.get('/', (req, res) => {
  res.send(`
  <html><head><meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
  body{background:#0a0a0a;color:#fff;font-family:sans-serif;padding:15px}
  .card{background:#111;border:1px solid #222;border-radius:16px;padding:22px;max-width:400px;margin:20px auto;box-shadow:0 0 30px #00ff8811}
  h2{color:#00ff88;text-align:center;margin:0 0 5px 0}
  input,select{width:100%;padding:13px;margin:8px 0;background:#1a1a1a;border:1px solid #2a2a2a;color:#fff;border-radius:10px;box-sizing:border-box}
  button{width:100%;padding:14px;background:#00ff88;border:none;border-radius:10px;font-weight:bold;font-size:16px;margin-top:10px;cursor:pointer}
  </style></head><body>
  <div class="card">
  <h2>ZAA PANEL STORE</h2>
  <p style="text-align:center;color:#666;font-size:13px;margin-bottom:15px">Respon 1-5 menit • Auto Notif Telegram</p>
  <input id="u" placeholder="Username Panel (contoh: zaa123)"><select id="r">
  <option value="1GB - 1K">1GB - Rp1.000</option>
  <option value="2GB - 2K">2GB - Rp2.000</option>
  <option value="3GB - 3K">3GB - Rp3.000</option>
  <option value="4GB - 4K">4GB - Rp4.000</option>
  <option value="5GB - 5K">5GB - Rp5.000</option>
  <option value="6GB - 6K">6GB - Rp6.000</option>
  <option value="UNLI - 7K">UNLIMITED - Rp7.000</option>
</select>
  <button onclick="order()">ORDER SEKARANG</button>
  <div id="hasil" style="margin-top:15px"></div>
  </div>
  <script>
  async function order(){
    let u=document.getElementById('u').value, wa=document.getElementById('wa').value, r=document.getElementById('r').value;
    if(!u||!wa)return alert('Isi username & WA!');
    document.getElementById('hasil').innerHTML='<p style=color:#888>⏳ Mengirim order...</p>';
    let res=await fetch('/order',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:u,wa:wa,ram:r})});
    let data=await res.json();
    document.getElementById('hasil').innerHTML='<div style="background:#00ff8822;border:1px solid #00ff88;padding:12px;border-radius:10px;color:#00ff88">✅ Order terkirim!<br>Admin ZAA akan proses & hubungi WA: '+wa+'</div>';
  }
  </script></body></html>`);
});

app.post('/order', async (req, res) => {
  const { username, wa, ram } = req.body;
  const text = `🔔 ORDER BARU ZAA PANEL\n\n👤 Username: ${username}\n📱 WA: ${wa}\n💾 Paket: ${ram}\n⏰ Jam: ${new Date().toLocaleString('id-ID')}\n\nSegera buatin di Ptero bang!`;
  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text: text })
    });
  } catch(e){ console.log('Telegram error', e) }
  res.json({ ok: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log('ZAA RUN on '+PORT));

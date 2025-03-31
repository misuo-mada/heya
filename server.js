const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// CORSの設定（ローカル開発用）
const cors = require('cors');
const { evidenceData } = require('./evidenceData');
app.use(cors());

// 静的ファイルの提供（フロントエンド用）
app.use(express.static('public'));

// 証拠データのAPIエンドポイント
app.get('/api/evidence/:id', (req, res) => {
    const id = req.params.id;
    if (evidenceData[id]) {
        res.json(evidenceData[id]);
    } else {
        res.status(404).json({ error: "証拠が見つかりません" });
    }
});

// サーバー起動
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

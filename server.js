const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// CORSの設定（ローカル開発用）
const cors = require('cors');
app.use(cors());

// 静的ファイルの提供（フロントエンド用）
app.use(express.static('public'));

// 証拠データ (サーバー側で管理)
const evidenceData = {
    1: {
        img: "jaket.jpg",
        desc: "血痕が床に付着している。"
    },
    2: {
        img: "key.jpg",
        desc: "破れた手紙が落ちている。"
    }
};

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

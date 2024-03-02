//모듈
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000;
const cors = require("cors");
app.use(cors());

app.get("/api/students", (req, res) => {
  res.json([
    {
      뻔선: { 학번: "2023216049", 이름: "변예섭" },
      뻔후: { 학번: "2024216049", 이름: "최예윤" },
    },
  ]);
});

app.listen(PORT, () => console.log(`서버 가동 ${PORT}`));

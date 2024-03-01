//모듈
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 4000;

//라우팅
// const home = require("./src/routes/home");

//앱 세팅
// app.set("views", "./src/views");
// app.set("view engine", "ejs");

// app.use(express.static(`${__dirname}/src/public`));

// app.use("/", home); //use -> 미들웨어를 등록해주는 메서드

app.get("/api/hello", (req, res) => {
  res.send({ message: "hello express" });
});

app.listen(PORT, () => console.log(`서버 가동 ${PORT}`));

module.exports = app;

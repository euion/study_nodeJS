const express = require("express");

const app = express();
// 여기에 들어오는 요청엔 어떤 종류의 데이터가 있는지 확인한 다음 해당 데이터를 추출하는 미들웨어 함수가 필요.
app.use(express.urlencoded({ extended: false })); // 경고를 받지 않도록 명시적으로 설정

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
}); // localhost:3000/currenttime

app.get("/", function (req, res) {
  res.send(
    "<form action='/store-user' method='POST'><label>Your Name</label><input type='text' name='username'><button>Submit</button></form>"
  );
}); // localhost:3000

app.post("/store-user", function (req, res) {
  const userName = req.body.username;
  console.log(userName);
  res.send("<h1>Username stored!</h1>");
});

app.listen(3000);

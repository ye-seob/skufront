class UserStorage {
  static _users = [
    { 학번: "2023216054", 이름: "정다솜", pin: "4876" },
    { 학번: "2024216050", 이름: "정민준", pin: "2158" },
    { 학번: "2024216055", 이름: "오승현", pin: "7342" },
    { 학번: "2023216055", 이름: "신민서", pin: "6921" },
    { 학번: "2024216052", 이름: "손예은", pin: "1098" },
    { 학번: "2024216058", 이름: "김수현", pin: "5473" },
    { 학번: "2023216050", 이름: "박서연", pin: "8214" },
    { 학번: "2024216051", 이름: "이승우", pin: "3569" },
    { 학번: "2024216054", 이름: "박준혁", pin: "4682" },
    { 학번: "2023216057", 이름: "이윤서", pin: "9537" },
    { 학번: "2023216056", 이름: "김하윤", pin: "6245" },
    { 학번: "2023216051", 이름: "최지원", pin: "1874" },
    { 학번: "2023216053", 이름: "이지훈", pin: "5723" },
    { 학번: "2024216049", 이름: "김영훈", pin: "3948" },
    { 학번: "2024216057", 이름: "박준서", pin: "8065" },
    { 학번: "2023216058", 이름: "최민석", pin: "2407" },
    { 학번: "2023216052", 이름: "김현우", pin: "6810" },
    { 학번: "2024216053", 이름: "한가람", pin: "5132" },
    { 학번: "2023216056", 이름: "양진우", pin: "9751" },
    { 학번: "2023216057", 이름: "이윤서", pin: "3296" },
  ];

  static getUser() {
    return this._users;
  }
}

module.exports = UserStorage;


const saveTeachersinLocalStorage = () => {
  var name = document.getElementById("name");
  var avatar = document.getElementById("avatar")
  var whatsappNumber = document.getElementById("whatsapp")
  var bio = document.getElementById("bio")
  var subject = document.getElementById("subject")
  var cost = document.getElementById("cost")
  var weekDay = document.getElementById("weekDay")
  var timeFrom = document.getElementById("timeFrom")
  var timeTo = document.getElementById("timeTo")

    var data = JSON.parse(localStorage.getItem("teacherData"));

    if (data == null) {
    localStorage.setItem("teacherData", "[]")
    data = [];
    }

    var auxRegister = {
      name: name.value,
      avatar: avatar.value,
      whatsappNumber: whatsappNumber.value,
      bio: bio.value,
      subject: subject.value,
      cost: cost.value,
      weekDay: weekDay.value,
      timeFrom: timeFrom.value,
      timeTo: timeTo.value
    }

    data.push(auxRegister)

    localStorage.setItem("teacherData", JSON.stringify(data));
}
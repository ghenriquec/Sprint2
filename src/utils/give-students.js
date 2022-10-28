
const saveStudentsinLocalStorage = () => {
  var name = document.getElementById("name");
  var avatar = document.getElementById("avatar")
  var whatsappNumber = document.getElementById("whatsapp")
  var bio = document.getElementById("bio")

    var dataStudent = JSON.parse(localStorage.getItem("teacherData"));

    if (dataStudent == null) {
    localStorage.setItem("studentsData", "[]")
    dataStudent = [];
    }

    var auxRegister = {
      name: name.value,
      avatar: avatar.value,
      whatsappNumber: whatsappNumber.value,
      bio: bio.value
    }

    dataStudent.push(auxRegister)

    localStorage.setItem("studentsData", JSON.stringify(dataStudent));
}
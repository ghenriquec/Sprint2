const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Portugês",
  "Química"
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

const handlePhone = (event) => {
  let whatsappNumber = event.target
  whatsappNumber.value = phoneMask(whatsappNumber.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}

function getSubjects(subjectNumber) {
  const position = +subjectNumber -1
  return subjects[position]
}

function convertHoursToMinutes(time) {
  const [ hour, minutes ] = time.split(":")
  return Number((hour * 60) + minutes)
}

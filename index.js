// Имитирую обращение к бекенду, как бы обращаюсь с помощю fetch к файлу ZonAnn.Ts+dSST
// для преобразования файла с форматом CSV используем метод text()
fetch('./ZonAnn.Ts+dSST.csv')
    .then(res => res.text())
    .then(data => console.log(data))


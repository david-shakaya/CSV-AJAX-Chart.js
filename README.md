# CSV-AJAX-Chart.js

- Ставим аналог вебпака но пороще parceljs
- Доки: https://ru.parceljs.org/getting_started.html
  -1 Устанавл. файл package.json - npm init -y
  -2 Устан. сборщик npm install parcel-bundler --save-dev
  -3 в Пке.джейсон ставим крипты

  - "dev": "parcel index.html",
  - "build": "parcel build index.html"
  - не забываем в index.html добавить скрипт на index.js: <script src="./index.js"></script>
    И запускаем режим разработки npm run dev

- Иза того что parcel.js сработал некоректно с fetch, его удаляем и работаю без сборщика на лайв сервере.

- Что бы распарсить CSV будем использовать библиотеку https://www.papaparse.com/

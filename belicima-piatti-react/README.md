Щоб клонувати проект, треба створити папку у зручному місці на комп'ютері, відкрити її, правою кнопкою миші проклікати і обрати "Git Bash here", далі прописати такі команди:
git init # ініціалізація поточного репозиторію
git clone https://github.com/korniykom/Belicima-piatti.git # клонування віддаленого репозиторію

У репозиторії міститься папка belicima-piatti-react, яку можна закинути у VS Code і запустити проект у терміналі командою npm start

У проекті по замовчуванню при створенні встановлюються всі необхідні залежності:

"dependencies": {
"@testing-library/jest-dom": "^5.17.0",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-scripts": "^5.0.1",
"web-vitals": "^2.1.4"
}

/* eslint-disable no-undef */

import readline from 'readline';

// Створення інтерфейсу для читання з терміналу
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Запитати користувача номер задачі
rl.question('Введіть номер задачі (1-7): ', async(answer) => {
  // Перевірка на валідність введеного номера
  if (answer >= 1 && answer <= 7) {
    try {
      // Зчитування вмісту файлу, що відповідає введеному номеру
      const module = (await import(`./task${answer}.mjs`)).default;
      module();
    } catch (err) {
      console.error(`Помилка читання файлу task${answer}.mjs: ${err}`);
    }
  } else {
    console.error('Неправильний номер задачі. Введіть число від 1 до 7.');
    rl.close();
  }
});
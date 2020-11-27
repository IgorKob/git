// https://create-react-app.dev/docs/adding-typescript
// Щоб розпочати новий проект Create React App із TypeScript , ви можете запустити:
npx create-response-app my-app --template typecript
yarn create response-app my-app --template typecript
// Якщо ви раніше встановлювали create-react-app глобально через npm install -g create-react-app, 
// ми рекомендуємо видалити пакет за допомогою npm uninstall -g create-react-app або, 
// yarn global remove create-react-app щоб npx завжди використовувати останню версію.

// Щоб додати TypeScript до існуючого проекту Create React App, спочатку встановіть його:
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
yarn add typescript @types/node @types/react @types/react-dom @types/jest
// Далі перейменуйте будь-який файл у файл TypeScript (наприклад, src/index.jsу src/index.tsx) та перезапустіть сервер розробки !


// 1.
import React, { useState } from 'react';
 
const App = () => {
  const [greeting, setGreeting] = useState(
    'Hello Function Component!'
  );
 
  const handleChange = event => setGreeting(event.target.value);
 
  return (
    <Headline headline={greeting} onChangeHeadline={handleChange} />
  );
};
 
const Headline = ({
  headline,
  onChangeHeadline,
}: {
  headline: string,
  onChangeHeadline: Function,
}) => (
  <div>
    <h1>{headline}</h1>
 
    <input type="text" value={headline} onChange={onChangeHeadline} />
  </div>
);
 
export default App;
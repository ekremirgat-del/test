import { useEffect, useState } from 'react';
import { getHealth } from './services/api';

function App() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getHealth()
      .then(setHealth)
      .catch((requestError) => setError(requestError.message));
  }, []);

  return (
    <main>
      <h1>React + Node.js</h1>
      <p>Frontend ve backend bağlantısı</p>
      <output aria-live="polite">
        {health?.message || error || 'Backend bağlantısı kontrol ediliyor...'}
      </output>
    </main>
  );
}

export default App;

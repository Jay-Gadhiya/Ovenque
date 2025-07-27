/**
 * Main App Component - Following SOLID Principles
 * Orchestrates routing and global state
 */

import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { ErrorBoundary } from './components/ui/error-boundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
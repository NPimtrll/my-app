import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PrelimAnalysisPage from './PrelimAnalysis/index';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <PrelimAnalysisPage />
    </React.StrictMode>
); 
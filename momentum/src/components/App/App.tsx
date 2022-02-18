import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundry } from '../ErrorBoundry';
import {Header} from '../Header';
import {MainContent} from '../MainContent';
import {AudioPlayer} from '../AudioPlayer';
import {VideoPlayer} from '../VideoPlayer';
import {Footer} from '../Footer';





export const App: React.FC = () => {
  return (
    <ErrorBoundry>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/audioPlayer" element={<AudioPlayer />} />
          <Route path="/videoPlayer" element={<VideoPlayer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ErrorBoundry>
  );
}


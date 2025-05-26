// App.js
import React from 'react';
import './App.css';
import BottomSheet from './BottomSheet';

function App() {
  return (
    <div className="app">
      <h1>🌸 React Spring Bottom Sheet</h1>
      <p className="subtitle">Experience interactive, animated sheets with beautiful pastel styling.</p>
      <BottomSheet />
    </div>
  );
}

export default App;

// App.css
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(to right, #ffd1ff, #f8f0c6); /* soft pastel gradient */
  color: #333;
  height: 100%;
  overflow: hidden;
}

.app {
  text-align: center;
  padding-top: 60px;
  animation: fadeIn 1s ease-in-out;
}

.subtitle {
  font-size: 18px;
  color: #444;
  margin-bottom: 40px;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

// BottomSheet.js
import React, { useRef, useState, useEffect } from 'react';
import './BottomSheet.css';

const BottomSheet = () => {
  const sheetRef = useRef(null);
  const [position, setPosition] = useState('closed');
  const startY = useRef(null);
  const [dragY, setDragY] = useState(0);

  const snapPoints = {
    full: 0,
    half: window.innerHeight * 0.5,
    closed: window.innerHeight - 80
  };

  const handleDragStart = (e) => {
    startY.current = e.touches ? e.touches[0].clientY : e.clientY;
  };

  const handleDragMove = (e) => {
    if (startY.current == null) return;
    const currentY = e.touches ? e.touches[0].clientY : e.clientY;
    const deltaY = currentY - startY.current;
    const newY = Math.min(Math.max(snapPoints.full + deltaY, snapPoints.full), snapPoints.closed);
    setDragY(newY);
  };

  const handleDragEnd = () => {
    const mid = (snapPoints.full + snapPoints.closed) / 2;
    const newPos =
      dragY < mid * 0.75 ? 'full' :
      dragY < mid * 1.25 ? 'half' : 'closed';

    setPosition(newPos);
    startY.current = null;
    setDragY(0);
  };

  useEffect(() => {
    const sheet = sheetRef.current;
    if (sheet) {
      const top = position === 'full' ? snapPoints.full :
                  position === 'half' ? snapPoints.half : snapPoints.closed;
      sheet.style.transform = `translateY(${top}px)`;
    }
  }, [position]);

  const currentTranslateY = dragY || snapPoints[position];

  return (
    <div className="bottom-sheet"
      ref={sheetRef}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
      style={{ transform: `translateY(${currentTranslateY}px)` }}
    >
      <div className="handle"></div>
      <div className="content">
        <h2>✨ Explore the Sheet</h2>
        <p>This pastel bottom sheet includes:</p>
        <ul>
          <li>🎯 Drag & Snap Transitions</li>
          <li>📱 Fully Responsive UI</li>
          <li>🌈 Pastel Gradient Styling</li>
        </ul>
        <div className="buttons">
          <button onClick={() => setPosition('full')}>Full View</button>
          <button onClick={() => setPosition('half')}>Half View</button>
          <button onClick={() => setPosition('closed')}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;

// BottomSheet.css
.bottom-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90%;
  background: #fff6fa; /* pastel background */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 1000;
  touch-action: none;
}

.handle {
  width: 60px;
  height: 6px;
  background-color: #ddd;
  border-radius: 3px;
  margin: 12px auto;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scaleX(1); }
  50% { transform: scaleX(1.2); }
}

.content {
  padding: 24px;
  color: #333;
  text-align: center;
}

.content h2 {
  margin-top: 0;
  color: #c471ed;
}

.content ul {
  list-style: none;
  padding: 0;
  color: #555;
  margin-bottom: 20px;
}

.buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

button {
  padding: 10px 20px;
  border: none;
  background: #ffdde1; /* pastel pink */
  color: #333;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background: #ffc3a0;
  transform: scale(1.05);
}

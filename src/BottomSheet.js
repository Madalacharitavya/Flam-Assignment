import React, { useState, useRef } from 'react';
import './BottomSheet.css';

const BottomSheet = () => {
  const sheetRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (position) => {
    const sheet = sheetRef.current;
    if (!sheet) return;

    if (position === 'full') {
      sheet.style.transform = 'translateY(0%)';
    } else if (position === 'half') {
      sheet.style.transform = 'translateY(50%)';
    } else {
      sheet.style.transform = 'translateY(100%)';
    }

    setIsOpen(position !== 'close');
  };

  return (
    <>
      <div className="sheet-trigger" onClick={() => handleOpen('half')}>
        Tap for Options
      </div>

      <div ref={sheetRef} className="bottom-sheet">
        <div className="sheet-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            commodi, animi consequatur facilis ullam inventore.
          </p>
          <div className="btn-group">
            <button onClick={() => handleOpen('full')}>Fully open</button>
            <button onClick={() => handleOpen('close')}>Fully close</button>
            <button onClick={() => handleOpen('half')}>Half open</button>
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      {isOpen && <div className="overlay" onClick={() => handleOpen('close')} />}
    </>
  );
};

export default BottomSheet;

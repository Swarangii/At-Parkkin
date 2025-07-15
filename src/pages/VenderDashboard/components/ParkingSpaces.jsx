import React from "react";

const ParkingSpaces = () => {
  const generateSpaces = () => {
    const spaces = [];
    const statuses = ["available", "occupied", "busy", "late"];

    // Red dots (occupied)
    const redSpaces = [48, 79, 83, 92];

    // Orange dots (busy/reserved)
    const orangeSpaces = Array.from({ length: 22 }, (_, i) => i + 1);

    // Blue dots (available)
    const blueSpaces = Array.from({ length: 20 }, (_, i) => i + 7);

    for (let i = 1; i <= 54; i++) {
      let status = "available";
      if (redSpaces.includes(i)) status = "occupied";
      else if (orangeSpaces.includes(i)) status = "busy";
      else if (blueSpaces.includes(i)) status = "available";

      spaces.push({
        id: i,
        number: i,
        status: status,
      });
    }

    return spaces;
  };

  const spaces = generateSpaces();

  return (
    <div className="parking-spaces-vender">
      <div className="spaces-grid-vender">
        {spaces.map((space) => (
          <div
            key={space.id}
            className={`parking-space-vender ${space.status}`}
          >
            <div className="car-icon-vender">🚗</div>
            <div className="space-number-vender">{space.number}</div>
            <div className={`status-dot-vender ${space.status}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParkingSpaces;

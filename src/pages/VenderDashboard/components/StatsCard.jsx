import React from "react";
import ImgMap from "../../../assets/map-bg.jpg";
const StatsCards = () => {
  return (
    <div className="stats-section-vender">
      <div className="parking-image-vender">
        <img src={ImgMap} alt="Royal Parking Plaza" />
        <div className="parking-info-vender">
          <h3>Royal Parking Plaza</h3>
          <div className="rating-vender">⭐ 4.3</div>
          <p>80 Wellington St. - Toronto</p>
          <div className="amenities-vender">
            <span>♿</span>
            <span>🚗</span>
            <span>🏢</span>
            <span>🔒</span>
            <span>🏠</span>
          </div>
        </div>
      </div>

      <div className="stats-grid-vender">
        <div className="stat-card-vender total-vender">
          <div className="stat-number-vender">124</div>
          <div className="stat-label-vender">Total spaces</div>
        </div>
        <div className="stat-card-vender available-vender">
          <div className="stat-number-vender">89</div>
          <div className="stat-label-vender">Available Spaces</div>
        </div>
        <div className="stat-card-vender busy-vender">
          <div className="stat-number-vender">31</div>
          <div className="stat-label-vender">Busy Spaces</div>
        </div>
        <div className="stat-card-vender late-vender">
          <div className="stat-number-vender">04</div>
          <div className="stat-label-vender">Late Spaces</div>
        </div>
      </div>

      <div className="price-info-vender">
        <span>Price per day</span>
        <span className="price-vender">$19</span>
      </div>
    </div>
  );
};

export default StatsCards;

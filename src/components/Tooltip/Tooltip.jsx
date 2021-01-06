import React, { Component } from "react";
import { Popup } from "react-map-gl";
import styles from "./Tooltip.module.scss";

class Tooltip extends Component {
  render() {
    const { details, fields, handleCloseTooltip } = this.props;

    const regex = /\B(?=(\d{3})+(?!\d))/g;

    return (
      <Popup
        tipSize={0}
        longitude={details.coordinates.longitude}
        latitude={details.coordinates.latitude}
        closeButton={true}
        onClose={() => handleCloseTooltip()}
      >
        <div className={styles.mapTooltip}>
          <div className={styles.mapTooltipField}>
            <div
              className={styles.mapTooltipFlag}
              style={{ backgroundImage: `url(${details.flag})` }}
            />
            <div className={styles.mapTooltipHeader}>{details.name}</div>
          </div>

          <div className={styles.margin} />

          {fields.map((field, index) => (
            <div className={styles.mapTooltipField} key={index}>
              <div className={styles.mapTooltipLabel}>{field}:</div>
              <div className={styles.mapTooltipValue}>
                {details[field].toString().replace(regex, ",")}
              </div>
            </div>
          ))}
        </div>
      </Popup>
    );
  }
}

export default Tooltip;

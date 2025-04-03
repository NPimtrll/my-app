import { Dataset } from "../../../../Domains/Chart/Dataset";
import styles from "./styles.module.scss";
import { useState } from "react";

export function Overall() {
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    data: null,
  });

  const data: Dataset[] = [
    { title: "SVSector", data: [39, 29, 53] },
    { title: "SVMarket", data: [20, 25, 27] },
    { title: "FOSector", data: [32, 36, 47] },
    { title: "FOMarket", data: [39, 29, 53] },
    { title: "PMSector", data: [20, 25, 27] },
    { title: "PMMarket", data: [32, 36, 47] },
    { title: "BFSector", data: [20, 25, 27] },
    { title: "BFMarket", data: [32, 36, 47] },
  ];

  const categories = [
    "Shareholders Value & Market Sentiment",
    "Growth",
    "Profitability & Efficiency",
    "Stability & Governance",
  ];

  return (
    <div className={styles.box}>
      <div className={styles.overall}>
        <div className={styles.groupChart}>
          <div>
            <img
              src="./assets/pillar.svg"
              alt="Pillar"
              className={styles.pillarImage}
            />
          </div>
          <div>
            <div className={styles.psContainer}>
              {categories.map((category, index) => {
                const sectorData = data[index * 2]?.data;
                const marketData = data[index * 2 + 1]?.data;
                return (
                  <div key={index} className={styles.pillarLine}>
                    {["Sector", "Market"].map((label, subIndex) => {
                      const currentData =
                        subIndex === 0 ? sectorData : marketData;
                      return (
                        <div
                          key={subIndex}
                          className={styles.scoreLine}
                          onMouseEnter={(e) =>
                            setTooltip({
                              visible: true,
                              x: e.clientX,
                              y: e.clientY,
                              data: {
                                company: currentData[0],
                                average: currentData[1],
                                top5: currentData[2],
                              },
                            })
                          }
                          onMouseLeave={() =>
                            setTooltip({
                              visible: false,
                              x: 0,
                              y: 0,
                              data: null,
                            })
                          }
                        >
                          <div className={styles.scoreBar}>
                            <div
                              className={`${styles.capsule} ${styles.top}`}
                              style={{ left: `${currentData[2]}%` }}
                            ></div>
                            <div
                              className={`${styles.capsule} ${styles.average}`}
                              style={{ left: `${currentData[1]}%` }}
                            ></div>
                            <div
                              className={`${styles.capsule} ${styles.yourCompany}`}
                              style={{ left: `${currentData[0]}%` }}
                            >
                              <span>{currentData[0]}</span>
                            </div>
                          </div>
                          <span>{label}</span>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div></div>
          <div className={styles.groupScore}>
            <div className={styles.scoreNumbers}>
              {["0", "25", "50", "75", "100"].map((num, index) => (
                <span key={index}>{num}</span>
              ))}
              <span className={styles.label}>คะแนน</span>
            </div>
          </div>
          <div></div>
          <div className={styles.pillarLegend}>
            {[
              { label: "Your Company", class: styles.yourCompany },
              { label: "Average", class: styles.average },
              { label: "Top 5", class: styles.top },
            ].map((legend, index) => (
              <div key={index} className={styles.legendItem}>
                <div
                  className={`${styles.legendCapsule} ${legend.class}`}
                ></div>
                <span>{legend.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {tooltip.visible && (
        <div
          className={styles.tooltipPillar}
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: "translate(10px, 10px)",
            pointerEvents: "none",
          }}
        >
          <div>
            <div className={styles.tooltipItem}>
              <div className={styles.colorBox + " " + styles.yourCompany} />
              <span className={styles.itemName}>Your Company:</span>
              <span className={styles.itemScore}>{tooltip.data.company}</span>
            </div>
            <div className={styles.tooltipItem}>
              <div className={styles.colorBox + " " + styles.average} />
              <span className={styles.itemName}>Average:</span>
              <span className={styles.itemScore}>{tooltip.data.average}</span>
            </div>
            <div className={styles.tooltipItem}>
              <div className={styles.colorBox + " " + styles.top} />
              <span className={styles.itemName}>Top 5:</span>
              <span className={styles.itemScore}>{tooltip.data.top5}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

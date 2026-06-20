import React, { useEffect, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";
import "./index.css";

const isDev = process.env.NODE_ENV === "development";
const dummyDataAllTime = isDev ? require("./dummyLeaderboard.json") : null;
const dummyDataCurrentMonth = isDev
  ? require("./leaderboard-current-month.json")
  : null;
const dummyDataPreviousMonth = isDev
  ? require("./leaderboard-previous-month.json")
  : null;

const TranslationsLeaderboardContent = () => {
  const { siteConfig } = useDocusaurusContext();

  const [leaderboardData, setLeaderboardData] = useState([]);
  const [currentSelection, setCurrentSelection] = useState("allTime");
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    const loadData = (filename, dummyFallback) => {
      if (isDev && dummyFallback) {
        if (Array.isArray(dummyFallback)) {
          setLeaderboardData(dummyFallback);
          setMetadata({ period: "Development Data" });
        } else {
          setLeaderboardData(dummyFallback.data || []);
          setMetadata(dummyFallback.metadata || { period: "Development Data" });
        }
      } else {
        // Static reference mapping instead of direct string template interpolation to make webpack happy
        let dataPromise;
        if (filename === "leaderboard-current-month.json") {
          dataPromise = import("./leaderboard-current-month.json");
        } else if (filename === "leaderboard-previous-month.json") {
          dataPromise = import("./leaderboard-previous-month.json");
        } else {
          dataPromise = import("./leaderboard.json");
        }

        dataPromise
          .then((module) => {
            const data = module.default;
            if (Array.isArray(data)) {
              setLeaderboardData(data);
              setMetadata({ period: "Legacy Data" });
            } else {
              setLeaderboardData(data.data || []);
              setMetadata(data.metadata || { period: "Unknown Period" });
            }
          })
          .catch((err) =>
            console.error("Error loading leaderboard data:", err),
          );
      }
    };

    let fileToLoad;
    let dummyFallback;

    switch (currentSelection) {
      case "allTime":
        fileToLoad = "leaderboard.json";
        dummyFallback = dummyDataAllTime;
        break;
      case "currentMonth":
        fileToLoad = "leaderboard-current-month.json";
        dummyFallback = dummyDataCurrentMonth;
        break;
      case "previousMonth":
        fileToLoad = "leaderboard-previous-month.json";
        dummyFallback = dummyDataPreviousMonth;
        break;
      default:
        fileToLoad = "leaderboard.json";
        dummyFallback = dummyDataAllTime;
    }

    loadData(fileToLoad, dummyFallback);
  }, [currentSelection]);

  // Added safety check for server execution before hitting browser navigation contexts
  const locale =
    siteConfig.locale ||
    (typeof navigator !== "undefined" ? navigator.language : "en");

  const formatWords = (wordsCount) => {
    const numericCount = Number(wordsCount);
    return numericCount.toLocaleString(locale);
  };

  const formatDateRange = (metadata) => {
    if (!metadata) return "";
    if (metadata.startDate && metadata.endDate) {
      try {
        const start = new Date(metadata.startDate);
        const end = new Date(metadata.endDate);

        const dateOptions = {
          day: "numeric",
          month: "short",
          year: "numeric",
          timeZone: "UTC",
        };

        const startFormatted = start.toLocaleDateString(locale, dateOptions);
        const endFormatted = end.toLocaleDateString(locale, dateOptions);

        return `${startFormatted} - ${endFormatted}`;
      } catch (e) {
        return metadata.period || "";
      }
    }
    return metadata.period || "";
  };

  const filteredLeaderboardData = leaderboardData.filter(
    (user) => Number(user["Translated (Words)"]) > 0,
  );

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <div className="leaderboard-buttons">
          <button
            onClick={() => setCurrentSelection("allTime")}
            className={currentSelection === "allTime" ? "active" : ""}
          >
            All Time
          </button>
          <button
            onClick={() => setCurrentSelection("currentMonth")}
            className={currentSelection === "currentMonth" ? "active" : ""}
          >
            Current Month
          </button>
          <button
            onClick={() => setCurrentSelection("previousMonth")}
            className={currentSelection === "previousMonth" ? "active" : ""}
          >
            Previous Month
          </button>
        </div>
        {metadata && (
          <div className="date-range-display">{formatDateRange(metadata)}</div>
        )}
      </div>
      {filteredLeaderboardData.map((user, index) => (
        <div key={index} className="user-card">
          <div className="avatar-container">
            <span className="ranking">
              {index === 0
                ? "🏆"
                : index === 1
                  ? "🥈"
                  : index === 2
                    ? "🥉"
                    : index + 1}
            </span>
            <img
              className="avatar"
              src={user.avatarUrl}
              alt={`${user.Name}'s avatar`}
            />
            <div className="user-info">
              <span className="username">{user.Name}</span>
              <span className="languages">{user.Languages || "N/A"}</span>
            </div>
          </div>
          <span className="translated-words">
            {formatWords(user["Translated (Words)"])} words
          </span>
        </div>
      ))}
    </div>
  );
};

// Default export wrapped cleanly inside BrowserOnly isolation to let the compilation clear smoothly
export default function TranslationsLeaderboard() {
  return (
    <BrowserOnly
      fallback={
        <div style={{ textAlign: "center", padding: "20px" }}>
          Loading Leaderboard...
        </div>
      }
    >
      {() => <TranslationsLeaderboardContent />}
    </BrowserOnly>
  );
}

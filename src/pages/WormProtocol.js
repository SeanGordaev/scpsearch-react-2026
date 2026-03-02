import "../style/WP.css";
import { ReactTyped as Typed } from "react-typed";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const bootSequence = [
  "> Establishing encrypted channel...",
  "> Routing traffic through internal gateway...",
  "> Cipher protocol: AES-256-O5-4",
  "> Generating session entropy...",
  "> Validating digital signature...",
  "> Verifying quantum checksum...",
  "> Checking clearance registry...",
  "> Cross-matching identity shard...",
  "> Synchronizing secure node cluster...",
  "> Access vector anomaly detected...",
  "> Re-validating credentials...",
  "> Comparing access vector signature...",
];

const intrusionSequence = [
  "> ALERT: UNAUTHORIZED ACCESS CONFIRMED",
  "> ALERT: Unauthorized presence confirmed.",
  "> CLEARANCE MISMATCH DETECTED",
  "> USER NOT REGISTERED IN FOUNDATION INDEX",
  "> ACCESS DENIED",
  "> Logging intrusion attempt...",
  "> Trace route initialized...",
  "> Geo-location triangulation: ███████",
  "> Threat level escalated to RED.",
];

const emergencySequence = [
  "> INITIATING EMERGENCY PROTOCOL Ω-4",
  "> Isolating affected network segment...",
  "> Deploying counter-intrusion daemons...",
  "> Locking classified archives...",
  "> Encrypting operational directives...",
  "> Purging volatile memory sectors...",
  "> Scrambling authentication residue...",
  "> Activating fail-secure lockdown...",
];

const finalSequence = [
  "> MEMORY SECTOR WIPE COMPLETE",
  "> SESSION SIGNATURE DESTROYED",
  "> INCIDENT LOGGED IN CENTRAL ARCHIVE",
  "> NODE LOCKED",
  "[ ~~ THIS SYSTEM PROTECTS CRITICAL GLOBAL INFRASTRUCTURE ~~ ]",
  "[ ~~ UNAUTHORIZED PRESENCE JEOPARDIZES WORLD SECURITY ~~ ]",
  "[ !! FURTHER ACCESS REQUIRES LEVEL 4 OVERRIDE !! ]",
];

export const WP = () => {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState([]);
  const nav = useNavigate();
  const lineDelay = 250;

  // function - typing effect for lines
  const pushLines = (arr, delay = lineDelay) => {
    arr.forEach((line, i) => {
      setTimeout(() => {
        setLines((prev) => [...prev, line]);
      }, i * delay);
    });
  };

  // Phase 1
  useEffect(() => {
    if (phase === 1) {
      pushLines(bootSequence);
      setTimeout(() => {
        pushLines(intrusionSequence);
        setPhase(2);
      }, bootSequence.length * lineDelay + 900);
    }

     // eslint-disable-next-line
  }, [phase]);

  
  // Phase 2
  useEffect(() => {
    if (phase === 2) {
      setTimeout(() => {
        pushLines(emergencySequence);
      }, intrusionSequence.length * lineDelay + 500);

      let interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setPhase(3);
            return 100;
          }
          return prev + 3;
        });
      }, lineDelay / 2);
    }
     // eslint-disable-next-line
  }, [phase]);

  // Phase 3
  useEffect(() => {
    if (phase === 3) {
      setTimeout(() => {
        pushLines(finalSequence);
      }, 1000);
    }
     // eslint-disable-next-line
  }, [phase]);
  

  return (
    <div className={`unauth-display ${phase >= 2 ? "emergency-mode" : ""}`}>

      <div className="center">
        {/* Title */}
        {phase === 0 && (
          <label className="title">
            <Typed
              strings={["SECURE FOUNDATION NODE ACCESS"]}
              typeSpeed={50}
              showCursor={false}
              onComplete={() => {setTimeout(() => { setPhase(1); }, 500)}} // open terminal - delay of 500 ms
            />
          </label>
        )}

        {/* terminal */}
        {phase >= 1 && (
          <div className="terminal">
            {lines.map((line, index) => (
              <p 
                key={index}
                className={
                  line.includes("DENIED") ||
                  line.includes("MISMATCH") ||
                  line.includes("ALERT")
                    ? "error"
                    : line.includes("Ω")
                    ? "critical"
                    : ""
                }
              >
                {line}
              </p>
            ))}

            {phase >= 2 && (
              <>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="warning">
                  {`> DATA PURGE SEQUENCE: ${progress}%`}
                </p>
              </>
            )}
          </div>
        )}

        {/* Button - Back To Home Page */}
        {phase === 3 && (
          <div className="return-panel">
            <span>From ██████:</span>
            <span>{"Need A Help?))"}</span>
            <button onClick={() => nav("/")}>
              RETURN
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
import React, { useRef, useState, useEffect } from "react";

export default function CuteDateProposal() {
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [dateTime, setDateTime] = useState("");
  const [food, setFood] = useState("");
  const [hearts, setHearts] = useState([]);

  const audioRef = useRef(null);

  const moveNo = () => {
    setNoPos({
      x: Math.random() * 400 - 200,
      y: Math.random() * 400 - 200,
    });
  };

  const accept = () => {
    setAccepted(true);
    audioRef.current?.play().catch(() => {});
  };

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // 💖 floating hearts
  useEffect(() => {
    const t = setInterval(() => {
      setHearts((h) => [
        ...h,
        { id: Math.random(), left: Math.random() * 100 },
      ]);
    }, 500);

    return () => clearInterval(t);
  }, []);

  const styles = {
    page: {
  height: "100vh",
  width: "100vw",
  background:
    "linear-gradient(to bottom right, #ffc0cb, #ffe4ec, #e9d5ff)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Arial",
  overflow: "hidden",
  position: "relative",
},

    card: {
      background: "rgba(255,255,255,0.92)",
      padding: 60,
      borderRadius: 30,
      width: "90%",
      maxWidth: "900px",
      textAlign: "center",
      boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
      fontSize: "24px",
      lineHeight: "1.8",
      position: "relative",
      zIndex: 2,
      margin: "auto",
    },

    title: {
      fontSize: "44px",
      fontWeight: "bold",
      color: "#ff4da6",
      marginBottom: 10,
    },

    subtitle: {
      fontSize: "26px",
      color: "#444",
    },

    btn: {
      padding: "14px 24px",
      margin: 10,
      borderRadius: 30,
      border: "none",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "18px",
    },

    yes: {
      background: "#ff4da6",
      color: "white",
    },

    no: {
      background: "#ddd",
      position: "relative",
      transform: `translate(${noPos.x}px, ${noPos.y}px)`,
      transition: "0.2s",
    },

    input: {
      width: "100%",
      padding: 14,
      marginTop: 10,
      borderRadius: 12,
      border: "1px solid #ccc",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.page}>

      {/* 🎺 MUSIC */}
      <audio ref={audioRef} src="/music.mp3" loop />

      {/* 💖 HEARTS */}
      {hearts.map((h) => (
        <div
          key={h.id}
          style={{
            position: "absolute",
            top: "100%",
            left: `${h.left}%`,
            fontSize: 22,
            animation: "float 6s linear",
          }}
        >
          💖
        </div>
      ))}

      <style>
        {`
          @keyframes float {
            from { transform: translateY(0); opacity: 1; }
            to { transform: translateY(-120vh); opacity: 0; }
          }
        `}
      </style>

      <div style={styles.card}>

        {!accepted ? (
          <>
            <h1 style={styles.title}>
              Salut falcaoasa mica 💕
            </h1>

            <p style={styles.subtitle}>
              vrei sa luam cina impreuna? 🥺🍷
            </p>

            <div style={{ marginTop: 30 }}>
              <button
                style={{ ...styles.btn, ...styles.yes }}
                onClick={accept}
              >
                DAAAAAAAAAA
              </button>

              <button
                style={{ ...styles.btn, ...styles.no }}
                onMouseEnter={moveNo}
                onClick={moveNo}
              >
                Nu 🙈
              </button>
            </div>
          </>
        ) : !submitted ? (
          <>
            <h2 style={styles.subtitle}>
              pfeew credeam ca o sa spui nu 😳
            </h2>

            <img
              src="/shrek.png"
              alt="shocked shrek"
              style={{
  width: "50%",
  borderRadius: 20,
  marginTop: 20,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
}}
            />

            <form onSubmit={submit} style={{ marginTop: 30 }}>
              <input
                type="datetime-local"
                style={styles.input}
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
              />

              <input
                placeholder="Ce mâncăm? 🍕🍣🍰"
                style={styles.input}
                value={food}
                onChange={(e) => setFood(e.target.value)}
              />

              <button
                style={{
                  ...styles.btn,
                  ...styles.yes,
                  width: "100%",
                  marginTop: 20,
                }}
              >
                Confirm 💖
              </button>
            </form>
          </>
        ) : (
          <>
         <h2 style={styles.title}>
    Să vă dea Dumnezeu sănătate 💖
  </h2>

  <p style={{ marginTop: 20 }}>
    și Măicuța Domnului impreună cu El,
    să nu vă lase singurel la...
  </p>

  <textarea
    placeholder="completează tu aici 😳"
    style={{
      width: "100%",
      height: 120,
      marginTop: 20,
      padding: 15,
      borderRadius: 15,
      border: "1px solid #ccc",
      fontSize: "18px",
      resize: "none",
    }}
  />

  <p style={{ marginTop: 25 }}>
    📅 {dateTime}
  </p>

  <p>
    🍽️ {food}
  </p>

  <p style={{ marginTop: 20, fontSize: 28 }}>
    🌹💕✨
  </p>
</>
        )}

      </div>
    </div>
  );
}
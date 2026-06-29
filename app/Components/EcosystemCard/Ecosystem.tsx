import { motion } from "motion/react"
import { EcosystemDiagram } from "../Diagram/EcosystemDiagram"

export const EcosystemCard = () => {
    return (
        <>
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                position: "absolute",
                top: "30%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 280,
                height: 280,
                background:
                  "radial-gradient(circle, rgba(185,255,107,0.04) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 6,
                background: "rgba(255,255,255,0.01)",
                padding: "28px 24px",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 24,
                }}
              >
                {["#ff5f57", "#ffbd2e", "#28c941"].map((c) => (
                  <span
                    key={c}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: c,
                      opacity: 0.5,
                    }}
                  />
                ))}
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    color: "#303030",
                    marginLeft: 8,
                    letterSpacing: "0.04em",
                  }}
                >
                  ecosystem.config.ts
                </span>
              </div>
              <EcosystemDiagram />
            </div>
          </motion.div>
        </div>

        {/* <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 120,
            background: "linear-gradient(to bottom, transparent, #070707)",
            pointerEvents: "none",
          }}
        /> */}
        </>
    )
}
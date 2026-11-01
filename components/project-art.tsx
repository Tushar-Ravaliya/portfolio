export function ProjectArt({ slug }: { slug: string }) {
  return (
    <div className={`project-art art-${slug}`} aria-hidden="true">
      <div className="art-caption mono">
        <span>
          FIELD STUDY /{" "}
          {slug === "trip-tracker"
            ? "001"
            : slug === "ghosttrade"
              ? "002"
              : slug === "realtime-chat"
                ? "003"
                : "004"}
        </span>
        <span>CONCEPT DIAGRAM</span>
      </div>
      {slug === "trip-tracker" && (
        <svg viewBox="0 0 660 400" fill="none">
          <defs>
            <pattern
              id="map-grid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path d="M32 0H0V32" stroke="currentColor" opacity=".08" />
            </pattern>
          </defs>
          <rect width="660" height="400" fill="url(#map-grid)" />
          <g stroke="currentColor" opacity=".15" strokeWidth="1">
            <path d="M-30 330 220 150 410 240 690 90M-30 100 240 280 480 100 690 270M150-10 180 170 110 410M380-10 340 180 470 420M550-20 530 180 600 420" />
            <path d="m-10 220 180-50 180 35 165-40 170 15M0 40l220 60 240-30 230-50" />
          </g>
          <path
            d="M112 280 182 230 276 244 337 192 329 114 434 139 535 91"
            stroke="#e8e1d3"
            strokeWidth="16"
            strokeLinejoin="round"
          />
          <path
            className="route-line"
            d="M112 280 182 230 276 244 337 192 329 114 434 139 535 91"
            stroke="#bb4c2d"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <circle
            cx="112"
            cy="280"
            r="8"
            fill="#e8e1d3"
            stroke="#bb4c2d"
            strokeWidth="2"
          />
          <circle cx="535" cy="91" r="7" fill="#bb4c2d" />
          <circle cx="535" cy="91" r="17" stroke="#bb4c2d" opacity=".4" />
          <g fill="currentColor" fontFamily="monospace" fontSize="10">
            <text x="90" y="314">
              ORIGIN
            </text>
            <text x="487" y="65">
              DESTINATION
            </text>
          </g>
          <g transform="translate(294 183)">
            <rect width="87" height="31" fill="#263c35" />
            <path d="m13 15 7-4-2 8-1-3-4-1Z" fill="#e9ede3" />
            <text
              x="30"
              y="19"
              fill="#e9ede3"
              fontFamily="monospace"
              fontSize="9"
            >
              EN ROUTE
            </text>
          </g>
        </svg>
      )}
      {slug === "ghosttrade" && (
        <svg viewBox="0 0 660 400" fill="none">
          <g stroke="#b1bfa5" opacity=".18">
            {[100, 160, 220, 280, 340].map((y) => (
              <path key={y} d={`M50 ${y}H610`} />
            ))}
          </g>
          <path
            d="m50 300 36-20 23 18 37-70 28 17 25-40 28 12 33-43 30 25 34-67 25 17 35-23 30 14 32-64 26 9 34-30 34 15 45-36"
            stroke="#c6d6a5"
            strokeWidth="2.5"
          />
          <g fill="#c6d6a5" fontFamily="monospace" fontSize="10">
            <text x="50" y="65">
              A STUDY IN MARKET MOVEMENT
            </text>
            <text x="50" y="370">
              VIRTUAL TRADES. REAL LEARNING.
            </text>
          </g>
          <circle cx="609" cy="134" r="5" fill="#c6d6a5" />
          <path
            d="M609 140V340"
            stroke="#c6d6a5"
            strokeDasharray="3 5"
            opacity=".4"
          />
        </svg>
      )}
      {slug === "realtime-chat" && (
        <svg viewBox="0 0 660 400" fill="none">
          <circle cx="330" cy="200" r="126" stroke="#b1b5c7" opacity=".3" />
          <circle cx="330" cy="200" r="93" stroke="#b1b5c7" opacity=".2" />
          <path
            d="M130 155H530M130 245H530"
            stroke="#e0e0ef"
            opacity=".5"
            strokeDasharray="4 7"
          />
          <g fill="#dedde9">
            <rect x="89" y="108" width="202" height="65" rx="2" />
            <rect x="363" y="216" width="202" height="65" rx="2" />
          </g>
          <g fill="#36374d" fontSize="15" fontFamily="monospace">
            <text x="112" y="146">
              hello, world.
            </text>
            <text x="386" y="254">
              message received.
            </text>
          </g>
          <circle cx="330" cy="155" r="5" fill="#d0b3ff" />
          <circle cx="330" cy="245" r="5" fill="#d0b3ff" />
          <g fill="#dedde9" fontSize="10" fontFamily="monospace">
            <text x="91" y="93">
              SEND
            </text>
            <text x="491" y="307">
              RECEIVE
            </text>
          </g>
        </svg>
      )}
      {slug === "clausecraft" && (
        <svg viewBox="0 0 660 400" fill="none">
          <g transform="rotate(-9 330 200)">
            <rect x="200" y="48" width="243" height="310" fill="#d0baa2" />
            <rect x="185" y="35" width="243" height="310" fill="#f6f0e5" />
            <g fill="#5c4533" fontFamily="monospace">
              <text x="211" y="74" fontSize="9">
                CLAUSECRAFT / DRAFT 01
              </text>
              <text x="211" y="124" fontSize="18">
                An agreement.
              </text>
              <text x="211" y="149" fontSize="18">
                A clearer beginning.
              </text>
            </g>
            <g stroke="#bcaa94" strokeWidth="2">
              {[180, 194, 208, 236, 250, 264].map((y, i) => (
                <path key={y} d={`M211 ${y}h${i % 3 === 2 ? 110 : 184}`} />
              ))}
            </g>
            <path
              d="m213 309 8-12 2 13 8-10 7 3 10-13 6 18 18-11"
              stroke="#bb4c2d"
              strokeWidth="1.5"
            />
          </g>
          <circle cx="448" cy="280" r="39" fill="#b44d33" />
          <path d="m431 281 11 11 22-24" stroke="#f6f0e5" strokeWidth="2" />
        </svg>
      )}
      <div className="art-bottom mono">
        <span>
          {slug === "trip-tracker"
            ? "CONNECTING THE MOVING PARTS"
            : slug === "ghosttrade"
              ? "UNDERSTANDING THE UPS & DOWNS"
              : slug === "realtime-chat"
                ? "THE SPACE BETWEEN TWO PEOPLE"
                : "FROM INPUT TO UNDERSTANDING"}
        </span>
        <span>↗</span>
      </div>
    </div>
  );
}

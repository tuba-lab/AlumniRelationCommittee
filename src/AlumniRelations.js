import React from "react";

export default function AlumniRelations() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "4px solid #004d40",
          borderRadius: "20px",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", flex: "1" }}>
          <img
            src="https://amubuddy.com/wp-content/uploads/2023/06/amu-logo.jpg"
            alt="AMU Logo"
            style={{ height: "45px", marginRight: "10px" }}
          />
          <span
            style={{
              color: "#004d40",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Aligarh Muslim University
          </span>
        </div>
        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "15px",
            color: "#004d40",
            fontWeight: "bold",
            fontSize: "14px",
            flex: "1",
            textAlign: "center",
          }}
        >
          <span style={{ cursor: "pointer" }}>Home</span>
          <span style={{ cursor: "pointer" }}>About</span>
          <span style={{ cursor: "pointer" }}>Programs</span>
          <span style={{ cursor: "pointer" }}>Faculty</span>
          <span style={{ cursor: "pointer" }}>Contact</span>
          <span style={{ cursor: "pointer" }}>Links</span>
        </nav>
      </header>

      {/* Body Section */}
      <section
        style={{
          backgroundColor: "#f5f5f5",
          padding: "30px 10px",
          minHeight: "70vh",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            color: "#004d40",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "22px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Alumni Relation Committee
          </h2>
          <ul
            style={{
              listStyle: "none",
              paddingLeft: 0,
              lineHeight: "2",
              fontSize: "15px",
            }}
          >
            <li>
              <strong>Prof. Arman Rasool Faridi</strong> – Chairperson
            </li>
            <li>Prof. Mohammad Ubaidullah Bokhari</li>
            <li>Prof. Suhail Mustajab</li>
            <li>Prof. Swalaha Zubair</li>
            <li>Dr. Shafiqul Abidin</li>
            <li>Dr. Mohammad Nadeem</li>
            <li>
              <strong>Prof. Aasim Zafar</strong> – Convener
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "white",
          textAlign: "center",
          padding: "20px",
          borderTop: "4px solid #004d40",
          borderBottomLeftRadius: "25px",
          borderBottomRightRadius: "25px",
        }}
      >
        <p style={{ color: "#004d40", margin: 0, fontSize: "13px" }}>
          © 2025 Aligarh Muslim University, Department of Computer Science.
        </p>
      </footer>

      {/* Responsive styles via style tag */}
      <style>
        {`
          @media (max-width: 600px) {
            header {
              flex-direction: column !important;
              align-items: flex-start !important;
              padding: 15px 10px !important;
            }
            header span {
              font-size: 16px !important;
            }
            nav {
              justify-content: flex-start !important;
              font-size: 13px !important;
            }
            section {
              padding: 20px 10px !important;
            }
            h2 {
              font-size: 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

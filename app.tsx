export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.logoBox}>
        <div style={styles.icon}>🚚</div>
        <h1 style={styles.title}>Zunga Delivery</h1>
        <p style={styles.subtitle}>O seu mambo chega rápido!</p>
      </div>

      <button style={{ ...styles.button, ...styles.primary }}>
        🍽️ Quero Pedir
      </button>

      <button style={{ ...styles.button, ...styles.blue }}>
        🏍️ Sou Entregador
      </button>

      <button style={{ ...styles.button, ...styles.green }}>
        🏪 Sou Parceiro (Restaurante)
      </button>

      <button style={{ ...styles.button, ...styles.dark }}>
        🔒 Gestão Admin
      </button>

      <footer style={styles.footer}>
        Feito em Angola 🇦🇴 para o Mundo
      </footer>
    </div>
  );
}

const styles: any = {
  container: {
    backgroundColor: "#f97316",
    minHeight: "100vh",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "14px",
    fontFamily: "Arial, sans-serif",
  },
  logoBox: {
    textAlign: "center",
    color: "white",
    marginBottom: "20px",
  },
  icon: {
    fontSize: "48px",
  },
  title: {
    margin: "10px 0 4px",
  },
  subtitle: {
    fontSize: "14px",
    opacity: 0.9,
  },
  button: {
    padding: "14px",
    borderRadius: "10px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
  primary: {
    backgroundColor: "white",
    color: "#f97316",
  },
  blue: {
    backgroundColor: "#1e3a8a",
    color: "white",
  },
  green: {
    backgroundColor: "#059669",
    color: "white",
  },
  dark: {
    backgroundColor: "#1f2937",
    color: "white",
  },
  footer: {
    marginTop: "auto",
    textAlign: "center",
    color: "white",
    fontSize: "12px",
    opacity: 0.9,
  },
};
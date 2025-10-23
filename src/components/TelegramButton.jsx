export default function TelegramButton() {
  return (
    <a
      href="https://t.me/TU_USUARIO" // 🔁 reemplazá con el usuario o link del café
      target="_blank"
      rel="noopener noreferrer"
      className="telegram-button"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
        alt="Telegram"
        style={{
          width: "50px",
          height: "50px",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          cursor: "pointer",
        }}
      />
    </a>
  );
}

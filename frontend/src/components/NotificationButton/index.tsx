import notification from "../../assets/img/notification-icon.svg";
import "./styles.css";

export function NotificationButton() {
  return (
    <div className="dsmeta-red-btn">
      <img src={notification} alt="Notificar" />
    </div>
  )
}

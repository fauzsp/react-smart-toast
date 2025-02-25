import {
  AlertTriangle,
  CheckCircle,
  Info,
  XCircle,
} from "lucide-react"; // ✅ Import Lucide Icons
import React from "react";
import useVoiceNotification from "../hooks/useVoiceNotification";

interface ToastProps {
  message: string;
  theme: string;
  type: "success" | "error" | "info" | "warning";
}

const ToastMessage: React.FC<ToastProps> = ({ message, theme, type }) => {
  useVoiceNotification(message);

  // ✅ Get icon based on type
  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle size={24} color="#4CAF50" />;
      case "error":
        return <XCircle size={24} color="#F44336" />;
      case "info":
        return <Info size={24} color="#2196F3" />;
      case "warning":
        return <AlertTriangle size={24} color="#FFC107" />;
      default:
        return <Info size={24} color="#2196F3" />;
    }
  };

  // ✅ Get background color based on theme & type
  const getBackgroundColor = () => {
    if (theme === "dark") {
      return {
        success: "#2E7D32",
        error: "#C62828",
        info: "#1565C0",
        warning: "#FF8F00",
      }[type] || "#333";
    } else {
      return {
        success: "#DFF2BF",
        error: "#FFBABA",
        info: "#D9EDF7",
        warning: "#FFF3CD",
      }[type] || "#FFF";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "12px 20px",
        background: getBackgroundColor(),
        color: theme === "dark" ? "#fff" : "#333",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        marginBottom: "10px",
        fontWeight: "bold",
        width: "300px",
      }}
    >
      {getIcon()} 
      <span>{message}</span>
    </div>
  );
};

export default ToastMessage;

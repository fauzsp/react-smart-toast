import React, { CSSProperties, useState } from "react";
import useThemeDetector from "../hooks/useThemeDetector";
import ToastMessage from "./ToastMessage";

interface Toast {
  id: number;
  message: string;
  type: "success" | "error" | "info" | "warning"; 
}
interface ToastContainerProps {
  defaultToasts?: Toast[]; 
  customStyles?: CSSProperties;
}

const DEFAULT_TOASTS: Toast[] = [
  { id: 1, message: "Welcome to React-Smart-Toast!", type: "success" },
  { id: 2, message: "Click the button to add a new toast!", type: "info" },
];
const defaultStyles: CSSProperties = {
  position: "fixed",
  bottom: "10px",
  right: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};
const ToastContainer: React.FC<ToastContainerProps> = ({ defaultToasts = DEFAULT_TOASTS, customStyles  }) => {
  const [messages, setMessages] = useState<Toast[]>([]);
  const theme = useThemeDetector();
  const addToast = (toasts: Toast[]) => {
    setMessages((prev) => [...prev, ...toasts]);
    toasts.forEach((toast) => {
      setTimeout(() => {
        setMessages((prev) => prev.filter((t) => t.id !== toast.id));
      }, 3000);
    });
  };
  
  return (
    <div style={customStyles || defaultStyles }> 
      {messages.map((toast) => (
        <ToastMessage key={toast.id} message={toast.message} type={toast.type} theme={theme} />
      ))}

      <button
        onClick={() =>
          addToast(defaultToasts)
        }
        style={{
          background: "#ff9800",
          color: "white",
          border: "none",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        Show Multiple Toasts
      </button>
    </div>
  );
};

export default ToastContainer;

import { useEffect } from "react";

const useVoiceNotification = (message: string) => {
    useEffect(() => {
      if ("speechSynthesis" in window) {
        const utterance = new SpeechSynthesisUtterance(message);
        speechSynthesis.speak(utterance);
      }
    }, [message]);
  };
  
  export default useVoiceNotification;
  
import React, { useEffect } from "react";

const DialogflowMessenger: React.FC = () => {
  useEffect(() => {
    if (!document.getElementById("df-messenger-script")) {
      const script = document.createElement("script");
      script.id = "df-messenger-script";
      script.src =
        "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <df-messenger
      intent="WELCOME"
      chat-title="Billboard Hot 100 QNA"
      agent-id="b93bf81a-4c82-4324-b927-21a9ed41661f"
      language-code="en"
      chat-icon="/album_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
    />
  );
};

export default DialogflowMessenger;

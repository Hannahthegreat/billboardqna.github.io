import React, { useEffect } from "react";

export function DialogflowMessenger() {
  useEffect(() => {
    // Only add the script if it hasn't been added already
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
      chat-title="Billboard_hot_100_qna"
      agent-id="b93bf81a-4c82-4324-b927-21a9ed41661f"
      language-code="en"
    ></df-messenger>
  );
}

import React from 'react';
import { LiveChatWidget } from "@microsoft/omnichannel-chat-widget";
import { OmnichannelChatSDK } from "@microsoft/omnichannel-chat-sdk";
import { useState, useEffect } from 'react';


function App() {
  const [liveChatWidgetProps, setLiveChatWidgetProps] = useState<any>();

  useEffect(() => {
    const init = async () => {
        const omnichannelConfig = {
          orgId: "bfd9d87a-79b7-4bb7-acf0-48b3b855b4da", // dummy config
          orgUrl: "https://orgf4d9cd3e-crm.omnichannelengagementhub.com", // dummy config
          widgetId: "993b007b-670c-48a6-8e80-938fccc087be" // dummy config
      };
      const chatSDK = new OmnichannelChatSDK(omnichannelConfig);
      await chatSDK.initialize(); // mandatory
      const chatConfig = await chatSDK.getLiveChatConfig();

      const liveChatWidgetProps = {
        styleProps: {
          generalStyles: {
            width: "360px",
            height: "560px",
            bottom: "20px",
            right: "20px"
          }
        },
        chatButtonProps: {
          styleProps: {
            generalStyleProps: {
              position: "absolute"
            }
          }
        },
        chatSDK: chatSDK, // mandatory
        chatConfig: chatConfig // mandatory
    };

      setLiveChatWidgetProps(liveChatWidgetProps);
    }

    init();
  }, []);

  return (
    <div className="App">
      <div>
        {liveChatWidgetProps && <LiveChatWidget {...liveChatWidgetProps} />}
      </div>
    </div>
  );
}

export default App;

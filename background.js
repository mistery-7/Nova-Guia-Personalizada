chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(["newTabUrl"], (data) => {
      if (chrome.runtime.lastError) {
          console.error("Erro ao acessar o armazenamento:", chrome.runtime.lastError);
          return;
      }

      if (!data.newTabUrl) {
          chrome.storage.sync.set({ newTabUrl: "https://www.google.com" }, () => {
              if (chrome.runtime.lastError) {
                  console.error("Erro ao salvar a URL padrão:", chrome.runtime.lastError);
              } else {
                  console.log("URL padrão definida como https://www.google.com");
              }
          });
      }
  });
});

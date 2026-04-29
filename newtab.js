chrome.storage.sync.get("newTabUrl", (data) => {
    if (chrome.runtime.lastError) {
        console.error("Erro ao acessar o armazenamento:", chrome.runtime.lastError);
        return;
    }

    if (data.newTabUrl) {
        window.location.href = data.newTabUrl;
    } else {
        window.location.href = "https://www.google.com"; // URL padrão
    }
});

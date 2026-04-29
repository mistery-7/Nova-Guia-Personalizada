document.getElementById("save").addEventListener("click", () => {
    let url = document.getElementById("url").value.trim();

    if (!url) {
        alert("Por favor, insira uma URL válida.");
        return;
    }

    if (!/^https?:\/\//i.test(url)) {
        url = "https://" + url;
    }

    chrome.storage.sync.set({ newTabUrl: url }, () => {
        if (chrome.runtime.lastError) {
            alert("Erro ao salvar a URL.");
        } else {
            alert("Nova guia definida com sucesso!");
        }
    });
});

// Adiciona funcionalidade ao botão "FECHAR"
document.getElementById("close").addEventListener("click", () => {
    window.close();
});

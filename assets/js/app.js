// Registro do Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js")
    .then(() => console.log("Service Worker ativo"))
    .catch(err => console.error("Erro SW:", err));
}

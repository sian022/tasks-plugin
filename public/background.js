// Listen for clicks on the extension action
chrome.action.onClicked.addListener((tab) => {
  chrome.storage.local.get(["widgetVisible"], (result) => {
    // Initialize widget visibility status if it doesn't exist
    if (result.widgetVisible === undefined) {
      chrome.storage.local.set({ widgetVisible: false });
    }

    const widgetVisible = result.widgetVisible;

    if (!widgetVisible) {
      // Inject the widget script if not already injected
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: injectWidget,
      });
      chrome.storage.local.set({ widgetVisible: true });
    } else {
      // Remove the widget if it's visible
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: removeWidget,
      });
      chrome.storage.local.set({ widgetVisible: false });
    }
  });
});

// Function to inject the widget script into the page
function injectWidget() {
  if (!document.getElementById("widget-root")) {
    const script = document.createElement("script");
    script.src = chrome.runtime.getURL("main.js");
    script.onload = () => {
      console.log("Widget script loaded");
      const widget = document.getElementById("widget-root");
      console.log(widget, "widget");
    };
    document.body.appendChild(script);
  }
}

// Function to remove the widget from the page
function removeWidget() {
  const widget = document.getElementById("widget-root");
  if (widget) {
    widget.remove();
  }
}

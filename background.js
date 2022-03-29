browser.compose.onBeforeSend.addListener((tab, details) => {
  if (details.type == "reply") {
    browser.messages.archive([details.relatedMessageId])
  }
})
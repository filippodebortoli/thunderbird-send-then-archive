browser.composeAction.onClicked.addListener(async (tab) => {
  // Get the existing message.
  let details = await browser.compose.getComposeDetails(tab.id);

  browser.compose.sendMessage(tab.id).then((outcome) => {
  if (outcome & details.type == "reply") {
    browser.messages.archive([details.relatedMessageId])
  }});
})
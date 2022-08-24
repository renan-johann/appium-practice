browser.overwriteCommand("pause", async function (origPauseFunction, ms) {
  console.log(` Sleeping for ${ms}`);
  await origPauseFunction(ms);
  return ms;
});

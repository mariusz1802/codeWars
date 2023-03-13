function toCamelCase(str) {
  const replaceStr = str.replace(/-/g, "");
  console.log(replaceStr);
}

toCamelCase("the-stealth-warrior");

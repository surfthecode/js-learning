const url = window.location.href;
const word = "html";
const isThere = url.indexOf(word);

if (isThere >= 0) {
  console.log(
    `Input '${word}' found in URL '${url}' first at index ${isThere}.`
  );
} else console.log(`Input '${word}' not found in URL '${url}'.`);

export default function catchWindowReszize(setState) {
  return window.addEventListener("resize", () => {
    setState(window.outerWidth);
  });
}

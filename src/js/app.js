export default function matchers(value) {
  return value.sort((a, b) => b.health - a.health);
}

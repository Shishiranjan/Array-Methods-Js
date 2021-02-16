//For sorting strings with non-ASCII characters, i.e. strings with accented characters (e, é, è, a, ä, etc.),
//strings from languages other than English, use String.localeCompare. This function can compare
//those characters so they appear in the right order.

var items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

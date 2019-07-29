String.prototype.format = function() {
  let args = arguments;
  return this.replace(/{(\d+)}/g, function(match: string, number: number) {
    return typeof args[number] != "undefined" ? args[number] : match;
  });
};
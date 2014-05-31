(function() {
  describe('Progress Bar', function() {
    return it("should be available", function() {
      return expect(typeof ProgressBar !== "undefined" && ProgressBar !== null).toBeTruthy();
    });
  });

}).call(this);

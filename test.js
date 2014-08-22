var expect = require("chai").expect;
var whichWinShell = require("./");

var windows = process.platform.indexOf("win") == 0;

var describe_unixOnly    = eval( !windows ? "describe" : "describe.skip" );
var describe_windowsOnly = eval(  windows ? "describe" : "describe.skip" );



describe_unixOnly("Unix", function()
{
	it("should get no value", function(done)
	{
		expect( whichWinShell() ).to.be.empty;
		done();
	});
});



describe_windowsOnly("Windows", function()
{
	it("should get a value", function(done)
	{
		var expectedValue = whichWinShell();
		console.log(expectedValue, expectedValue=="");
		expect(expectedValue).to.be.not.empty;
		expect(expectedValue).to.equal( "cmd" || "powershell" );
		done();
	});
});

// Cached because the value is not read-only
// This is about as reliable as it gets, unfortunately
// Fortunately, this value is [almost?] never modified
var cachedTitle = process.title;



function whichWinShell()
{
	if (process.platform.indexOf("win") == 0)
	{
		if (cachedTitle.indexOf("Command Prompt") == 0)
		{
			return "cmd";
		}
		
		//if (cachedTitle.indexOf("Windows PowerShell") > -1)
		if ( /^([^:]+: )?Windows PowerShell/.test(cachedTitle) )
		{
			return "powershell";
		}
	}
	
	return "";
}



module.exports = whichWinShell;

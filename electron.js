
var platformElectron = require("electron"); // Somehow this works even when electron isn't in node_modules anywhere
var app = platformElectron.app;
var win; // Keep a global reference to the window object so it's not garbage collected, which would close the window

app.on("ready", function() { // Electron has finished starting and is ready to make windows
	win = new platformElectron.BrowserWindow({width: 800, height: 800}); // Create the browser window
	win.loadURL("file://" + __dirname + "/" + process.argv[2]); // Load the page of the app
	win.webContents.openDevTools(); // Open the developer tools

	win.on("closed", function() { // The user closed the window
		win = null; // Discard our reference to the window object
	});
});

app.on("window-all-closed", function() { // All the windows are closed
	app.quit();
});

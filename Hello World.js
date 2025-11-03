// Import required modules for display and keyboard functionality
var display = require("display");
var keyboard = require("keyboard");

// Get display dimensions for responsive layout
var displayWidth = display.width();
var displayHeight = display.height();

// Flag to control application exit
var exitApp = false;

// Fill display with UI background color
display.fill(BRUCE_BGCOLOR);

// Main application loop
while (!exitApp) {

    // Check for exit button press
    if (keyboard.getEscPress()) {
        exitApp = true;
        break;
    }

    // Set text alignment to center both horizontally and vertically
    display.setTextAlign('center', 'middle');

    // Display "Hello World!" using specified text size and primary UI color
    display.setTextSize(3);
    display.setTextColor(BRUCE_PRICOLOR);
    display.drawText("Hello World!", displayWidth / 2, displayHeight / 2 - 10);

    // Display "This is only a test" using specified text size and secondary UI color
    display.setTextSize(2);
    display.setTextColor(BRUCE_SECCOLOR);
    display.drawText("This is only a test", displayWidth / 2, displayHeight / 2 + 10);

    // Small delay to prevent excessive CPU usage
    delay(50);
}

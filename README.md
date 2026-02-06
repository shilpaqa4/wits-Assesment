Playwright Automation – SDET Screening
This project demonstrates end-to-end (E2E) browser automation using Playwright and TypeScript for the WITS SDET Screening Assessment.

 Tech Stack
Language: TypeScript

Framework: Playwright (Test Runner)

Reporting: Built-in Playwright HTML Reporter

 Test Scenarios Automated
The scripts automate a dining reservation flow with the following steps:

Navigate to the booking platform.

Initiate the booking process.

Select Party Size (3).

Select Dining Date (Feb 11).

Select Time (12:00).

Finalize the booking.

Automated capture of execution video and final state screenshots.

 How to Run
Follow these steps to execute the tests locally:

Clone the repository or download the source code.

Install Dependencies: Open your terminal in the project folder and run:

Bash
npm install
Note: Ensure you have Node.js installed on your system.

Install Playwright Browsers:

Bash
npx playwright install
Execute Tests: To run the specific test files:

Bash
npx playwright test Complete_booking_video.spec.ts
npx playwright test Complete_booking_screenshot.spec.ts
Output & Evidence
Screenshots: Captured upon successful completion and stored in the /screenshots directory.

Videos: Recorded during execution to demonstrate the end-to-end flow.

HTML Report: Run npx playwright show-report after execution to view the detailed test results.

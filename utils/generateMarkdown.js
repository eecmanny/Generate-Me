// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no installation, return an empty string
function renderInstallationBadge(installation) {}

// TODO: Create a function that returns the usage link
// If there is no usage, return an empty string
function renderUsageLink(usage) {}

// TODO: Create a function that returns the credit section of README
// If there is no credit, return an empty string
function renderCreditSection(credit) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

const fs = require('fs');
const { execSync } = require('child_process');

if (!fs.existsSync('node_modules')) {
  console.log("node_modules directory does not exist");
} else {
  console.log("node_modules directory exists");
  if (fs.existsSync('dist')) {
    console.log("Removing the existing 'dist' directory");
    fs.rmdirSync('dist', { recursive: true });
  } else {
    console.log("The 'dist' directory does not exist");
  }
  console.log("Copying files to 'dist'");
  execSync('robocopy .\\ dist /E /XF package-lock.json /XD node_modules dist .github /W:0 /R:0', { stdio: 'inherit' });
}

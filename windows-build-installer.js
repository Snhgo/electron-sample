var winstaller = require('electron-winstaller');

winstaller.createWindowsInstaller({
  appDirectory: './sample-win32-x64/',
  outputDirectory: '/tmp/build/installer64',
  authors: 'My App Inc.',
  description:: 'sample',
  exe: 'sample.exe'
})
  .then(() => console.log('It worked!'))
  .catch(e => console.log(`No dice: ${e.message}`));

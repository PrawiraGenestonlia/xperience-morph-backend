async function spawn() {
  console.log("morphing begins");
  const path = require('path')
  const { spawn } = require('child_process')
  function runScript() {
    return spawn('python', ["-u", path.join(__dirname, "face_morpher.py"), path.join(__dirname, "test1.jpg"), path.join(__dirname, "test2.jpg")]);
  }

  const subprocess = runScript()

  return new Promise(function (resolve, reject) {
    // print output of script
    subprocess.stdout.on('data', (data) => {
      console.log(`data:${data}`);
      resolve(1);
    });
    subprocess.stderr.on('data', (data) => {
      console.log(`error:${data}`);
      reject(data);
    });
    // subprocess.stderr.on('close', () => {
    //   console.log("Closed");
    // });
  });
}

module.exports = spawn;
async function spawn() {
  console.log("morphing begins");
  const path = require('path')
  const { spawn } = require('child_process')
  function runScript() {
    return spawn('python', ["-u", path.join(__dirname, "face_morpher.py"), path.join(__dirname, "test1.jpg"), path.join(__dirname, "test2.jpg")]);
  }

  const subprocess = runScript();

  return new Promise(function (resolve, reject) {
    // print output of script
    subprocess.stdout.on('data', (data) => {
      if (data == "Success") {
        console.log(`data:${data}`);
        resolve(1);
      }
      else {
        console.log(`error:${data}`);
        reject(data);
      }
    });
  });
}

module.exports = spawn;
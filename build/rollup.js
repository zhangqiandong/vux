var vueify = require('vueify')
var compiler = vueify.compiler
var fs = require('fs')
var path = require('path')
var fileContent = fs.readFileSync('../src/components/Icon.vue').toString()
var filePath = path.resolve(__dirname, '../src/components/Icon.vue')
var rollup = require('rollup')
var babel = require('rollup-plugin-babel')
  // filePath should be an absolute path
compiler.compile(fileContent, filePath, function(err, result) {
  fs.writeFileSync('icon.build.js', result);

  rollup.rollup({
      entry: './icon.build.js',
      plugins: [
        babel({
          // exclude: 'node_modules/**'
        })
      ]
    })
    .then(function(bundle) {
      return write('./icon.vue.js', bundle.generate({
        format: 'umd',
        moduleName: 'icon'
      }).code)
    })
    .catch(function(err){
      console.log(err)
    })
})

function write (dest, code) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(dest, code, function (err) {
      if (err) return reject(err)
      console.log(blue(dest) + ' ' + getSize(code))
      resolve()
    })
  })
}

function getSize (code) {
  return (code.length / 1024).toFixed(2) + 'kb'
}

function logError (e) {
  console.log(e)
}

function blue (str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}
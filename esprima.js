const inputFile = document.getElementById('inputFile');

inputFile.addEventListener('change', function(e){
  // console.log(e);
  Array.from(e.target.files).forEach(file => {
    fileContent(file);
  });
});

function fileContent(file) {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function(e) {
    const content = e.target.result;
    var syntax = esprima.parseModule(content);
    getImports(syntax.body);
  }
}

// function fetchFile(fileName) {
//   const content = fetch(fileName)
//     .then(function(response) {
//       return response.text();
//     })
//     .then(function(myCode) {
//       var syntax = esprima.parseModule(myCode);
//       // console.log(syntax.body[0]);
//       getImports(syntax.body);
//     });
// }
// const code = fetch('./index.js')
//   .then(function(response) {
//     return response.text();
//   })
//   .then(function(myCode) {
//     var syntax = esprima.parseModule(myCode);
//     // console.log(syntax.body[0]);
//     getImports(syntax.body);
//   });

function getImports(tree) {
  const data = _.filter(tree, {'type': 'ImportDeclaration'});
  console.log(data);
}
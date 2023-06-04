var convertBase64 = function convertBase64(file) {
  return new Promise(function (resolve, reject) {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function () {
      resolve(fileReader.result);
    };
    fileReader.onerror = function (error) {
      reject(error);
    };
  });
};

exports.convertBase64 = convertBase64;
//# sourceMappingURL=index.js.map

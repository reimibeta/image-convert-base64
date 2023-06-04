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

export { convertBase64 };
//# sourceMappingURL=index.modern.js.map

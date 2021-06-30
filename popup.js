
let data = ["Test","Angular","NodeJs"];

let next = document.getElementById("next");
let prev = document.getElementById("prev");
let add = document.getElementById("add");

let input = document.getElementById("categorie");
input.value = data[0];
prev.disabled = true;

// chrome.fileSystem.chooseEntry({type: 'saveFile'}, function(writableFileEntry) {
//     writableFileEntry.createWriter(function(writer) {
//       writer.onerror = errorHandler;
//       writer.onwriteend = function(e) {
//         console.log('write complete');
//       };
//       writer.write(new Blob(['1234567890'], {type: 'text/plain'}));
//     }, errorHandler);
// });

next.addEventListener("click", async () => {
    let newValue = data[data.indexOf(input.value) + 1] 
    input.value = newValue
    prev.disabled = false;

    if (data.indexOf(input.value) + 1 >= data.length) {
        next.disabled = true;
    }

});

prev.addEventListener("click", async () => {
    let newValue = data[data.indexOf(input.value) - 1] 
    input.value = newValue
    next.disabled = false;
    if (data.indexOf(input.value) -1 < 0) {
        prev.disabled = true;
    }
});

add.addEventListener("click",async () => {
    data.push(input.value);
});
  

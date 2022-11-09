
let output = document.getElementById('input');
function display(num) {
    output.value += num;
}

const Calculate = () => {
    try {
        output.value = eval(output.value);
    } catch (error) {
        alert("Invalid!");
        output.value = "";
    }
}

const Clear = () => {
    output.value = "";
}
const del = () => {
    output.value = output.value.slice(0, -1);
}

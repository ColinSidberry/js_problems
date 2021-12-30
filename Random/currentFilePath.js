// Test Cases
// input: path = "/a/./b/"
// output: "/a/b/"

// input: path = "/a/././b/"
// output: "/a/b/"

// input: path = "/a/../b/"
// output: "/b/"

// input: "/home//foo/" 
// output: "/home/foo/"

// input: "/a/b/../../"
// output: "/"

// Psuedo
// split input by backslashes --> "/a/./b/" => ["", a, ., b,""]
// loop through the array
// construction of the output
// if empty string
// output += "/"
// if "."
// continue
// if ".."
// remove the last character of output
// else
// add current item to the output + "/"

function currentFilePath(input) { // "/a/b/../../"
    let output = [];
    let filepath = input.split("/"); // ["",a,b,"..","..",""]
    console.debug({ filepath });

    for (let i = 0; i < filepath.length; i++) {
        if (filepath[i] === "" && i === 0) {
            output.push("/");
        } else if (filepath[i] === ".") {
            continue;
        } else if (filepath[i] === "..") {
            output.pop();
        } else if (filepath[i] !== "" && i !== filepath.length - 1) {
            output.push(filepath[i] + "/");
        }
        console.debug({ output });

    }

    return output.join(""); // output = ["/"]
}

module.exports = {
    currentFilePath
};
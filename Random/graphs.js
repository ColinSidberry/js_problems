// Picture: https://docs.google.com/presentation/d/1Ee6dmlTaAP7x_zI7VM3yYFYD7f612XeLl6B-41Kj0fQ/edit#slide=id.p
// 0. given nodes and edges
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', "LAX"],
    ['PHX', 'JFK'],
    ['JFK', "OKC"],
    ['JFK', "HEL"],
    ['JFK', "LOS"],
    ['MEX', "LAX"],
    ['MEX', "BKK"],
    ["MEX", "LIM"],
    ['MEX', 'EZE'],
    ['LIM', "BKK"]
];

// 1. adjacedncy list building blocks
const adjacencyList = {};

function addNodes (node) {
    adjacencyList[node] = [];
}

function addEdge (start, end) {
    adjacencyList[start].push(end);
    adjacencyList[end].push(start);
}

// 2. filling adjacency list
for (let airport of airports) {
    addNodes(airport);
}

for (let route of routes) {
    addEdge(...route);
}

// adjacencyList = {
//     "PHX": ['LAX', 'JFK']
//     "LAX": ['PHX', 'MEX']
//     "JFK": ['PHX', 'OKC', 'HEL', 'LOS']
//     "MEX": ['LAX', 'BKK', 'LIM', 'EZE']
//     "BKK": ['MEX', 'LIM']
//     "EZE": ['MEX']
//     "HEL": ['JFK']
//     "LAP": []
//     "LIM": ['MEX', 'BKK']
//     "LOS": ['JFK']
//     "OKC": ['JFK']
// };

// 3. searching for connection from a given start
function bfs (start, end) {
    const queue = [start];
    const visited = new Set();

    visited.add(start);

    while(queue) {
        const airport = queue.shift();

        const destinations = adjacencyList[airport];

        for (let destination of destinations) {
            if (destination === end) {
                console.log("We found a route via ", airport);
            }

            if (!visited.has(destination)) {
                visited.add(destination); // add the current destination to the list of airports we've checked so we don't check again
                queue.push(destination); // add the aiport to the queue so we can look through its destinations for the end value
            }
        }
    }

}

// Following Rithm's Pattern
class AriportNode {
    constructor(airport, adjacent = new Set()) {
        this.airport = airport;
        this.adjacent = adjacent;
    }
}

class Graph {
    constructor(nodes, edges) {
        this.nodes = nodes;
        this.edges = edges;
    }
}
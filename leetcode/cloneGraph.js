"use strict";

function Node(val = 0, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
}

// [[2,4],[1,3],[2,4],[1,3]]

function cloneGraph(node, seen = {}) {
    // if graph is empty return null 
    if (!node) {
        return null;
    }

    // if we have seen this before return node.val????
    if (seen[node.val]) {
        return seen[node.val];
    }

    const clone = new Node(node.val);
    console.log({clone});

    // ??
    seen[clone.val] = clone;


    node.neighbors.forEach((neighbor) => {
        clone.neighbors.push(cloneGraph(neighbor, seen));
    });

    return clone;
};

function cloneGraph(root) {
    // if there is no graph retturnm i
    if (!root) {
        return null;
    }

    const stack = [root];
    console.log({stack});

    const seen = {};
    seen[root.val] = new Node(root.val);

    while (stack.length) {
        const next = stack.pop();
        next.neighbors.forEach((neighbor) => {
            if (!seen[neighbor.val]) {
                seen[neighbor.val] = new Node(neighbor.val);
                stack.push(neighbor);
            }
            seen[next.val].neighbors.push(seen[neighbor.val]);
        });
    }

    return seen[root.val];
}
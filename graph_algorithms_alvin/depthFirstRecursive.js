const graphObj = {
  a: ["b", "c"],
    b: ["d"],
      c: ["e"],
        d: ["f"],
          e: [],
            f: [],
            };
            
            const graph = new Map([
              ["a", ["b", "c"]],
                ["b", ["d"]],
                  ["c", ["e"]],
                    ["d", ["f"]],
                      ["e", []],
                        ["f", []],
                        ]);
                        
const depthFirstPrint = (graph, source) => {
  console.log(source);

  for (let neighbor of graph.get(source)) {
    depthFirstPrint(graph, neighbor);
  }
};
depthFirstPrint(graph, 'a');
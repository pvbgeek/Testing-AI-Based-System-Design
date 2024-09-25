// code to call AI Model and give text / string as input.




//receive Json File from the AI Model
const graph = [
    {
        name: 'load_balancer',
        adjacencyList: ['cache', 'client']
    },
    {
        name: 'cache',
        adjacencyList: ['load_balancer']
    },
    {
        name: 'aws',
        adjacencyList: ['database']
    },
    {
        name: 'client',
        adjacencyList: ['database']
    },
];

// Traverse the UID and Node columns
const nodes = new Map(null);

graph.forEach(item => {
    if(!nodes.has(item.node)) {
        nodes.set(item.node, { name: item.node, id: item.node });
    }
    
    item.adjacencyList.forEach(node => {
        nodes.set(node, { name: node, id: node });
    });
    
});


// Simultaneously for loop select - n times - > trigger

const componentsMap = new Map(Array.from(components).map(component => [component.id, component]));

console.log(componentsMap);


graph.forEach(node => {
    const component = componentsMap.get(node.name);
    createComponent(component);
})



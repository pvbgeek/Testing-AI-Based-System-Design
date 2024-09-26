// code to call AI Model and give text / string as input.




//receive Json File from the AI Model
const graph = sampleData;

// Traverse the UID and Node columns
const componentsMap = new Map(Array.from(components).map(component => [component.getAttribute('data-tooltip'), component]));

const titleCase = (string) => 
    string.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ').trim();

const nodeCategories = new Map(null);

const addNode = ({ id, component }) => {
    const nodeList = nodeCategories.get(component) || [];
    const nodeAlreadyExists = !!nodeList.find(node => node.component === component && node.id === id);
    if(!nodeAlreadyExists) nodeList.push({ id, component });
    nodeCategories.set(component, nodeList);
};

graph.forEach(node => {
    addNode(node);
    node.adjacencyList.forEach(addNode);
});

const nodes = new Map(null);

const getNodeName = ({ id, component }) => {
    const category = nodeCategories.get(component);
    const nodeCount = category ? category.length : 0;
    return nodeCount > 1 ? `${component} ${id}` : component;
}

const createNode = ({ id, component }) => {
    const nodeKey = `${component}_${id}`;
    const node = nodes.get(nodeKey);
    if(!node) {
        const componentElement = componentsMap.get(titleCase(component));
        if(componentElement) {
            const nodeName = getNodeName({ id, component });
            createComponent(componentElement, nodeName);
        }
        nodes.set(nodeKey, { id, component });
    }
}


graph.forEach(node => {
    createNode(node);
    node.adjacencyList.forEach(createNode);
});

graph.forEach(node => {
    const sourceNode = document.querySelector(`#graph-window div[name='${getNodeName(node)}']`);
    node.adjacencyList.forEach(adjacentNode => {
        const destinationNode = document.querySelector(`#graph-window div[name='${getNodeName(adjacentNode)}']`);
        if(sourceNode && destinationNode) createArrowBetweenComponents(sourceNode, destinationNode);
    });
});


// Simultaneously for loop select - n times - > trigger




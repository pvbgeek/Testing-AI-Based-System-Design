// const sampleData = [
//   {
//     component: "Client",
//     id: 1,
//     adjacencyList: [
//       {
//         component: "DNS",
//         id: 1,
//       },
//       {
//         component: "API gateway",
//         id: 1,
//       },
//       {
//         component: "CDN",
//         id: 1,
//       },
//     ],
//   },
//   {
//     component: "DNS",
//     id: 1,
//     adjacencyList: [
//       {
//         component: "API gateway",
//         id: 1,
//       },
//       {
//         component: "CDN",
//         id: 1,
//       },
//     ],
//   },
//   {
//     component: "API gateway",
//     id: 1,
//     adjacencyList: [
//       {
//         component: "Auth server",
//         id: 1,
//       },
//       {
//         component: "Load balancer",
//         id: 1,
//       },
//       {
//         component: "Cache",
//         id: 1,
//       },
//     ],
//   },
//   {
//     component: "Firewall",
//     id: 1,
//     adjacencyList: [
//       {
//         component: "Auth server",
//         id: 1,
//       },
//       {
//         component: "Load balancer",
//         id: 1,
//       },
//       {
//         component: "Server",
//         id: 1,
//       },
//       {
//         component: "Server",
//         id: 2,
//       },
//       {
//         component: "Server",
//         id: 3,
//       },
//     ],
//   },
//   {
//     component: "Load balancer",
//     id: 1,
//     adjacencyList: [
//       {
//         component: "Server",
//         id: 1,
//       },
//       {
//         component: "Server",
//         id: 2,
//       },
//       {
//         component: "Server",
//         id: 3,
//       },
//     ],
//   },
//   {
//     component: "Server",
//     id: 1,
//     adjacencyList: [
//       {
//         component: "Database",
//         id: 1,
//       },
//       {
//         component: "Cache",
//         id: 1,
//       },
//       {
//         component: "Message queue",
//         id: 1,
//       },
//     ],
//   },
//   {
//     component: "Server",
//     id: 2,
//     adjacencyList: [
//       {
//         component: "Database",
//         id: 1,
//       },
//       {
//         component: "Cache",
//         id: 1,
//       },
//       {
//         component: "Message queue",
//         id: 1,
//       },
//     ],
//   },
//   {
//     component: "Server",
//     id: 3,
//     adjacencyList: [
//       {
//         component: "Database",
//         id: 1,
//       },
//       {
//         component: "Cache",
//         id: 1,
//       },
//       {
//         component: "Message queue",
//         id: 1,
//       },
//     ],
//   },
//   {
//     component: "Cloud",
//     id: 1,
//     adjacencyList: [
//       {
//         component: "Client",
//         id: 1,
//       },
//       {
//         component: "DNS",
//         id: 1,
//       },
//       {
//         component: "API gateway",
//         id: 1,
//       },
//       {
//         component: "CDN",
//         id: 1,
//       },
//       {
//         component: "Firewall",
//         id: 1,
//       },
//       {
//         component: "Auth server",
//         id: 1,
//       },
//       {
//         component: "Load balancer",
//         id: 1,
//       },
//       {
//         component: "Server",
//         id: 1,
//       },
//       {
//         component: "Server",
//         id: 2,
//       },
//       {
//         component: "Server",
//         id: 3,
//       },
//       {
//         component: "Cache",
//         id: 1,
//       },
//       {
//         component: "Database",
//         id: 1,
//       },
//       {
//         component: "Message queue",
//         id: 1,
//       },
//     ],
//   },
// ];


const sampleData = [
  {
  component: "Client",
    id: 1,
    adjacencyList: [
      {
        component: "DNS",
        id: 1,
      },
      {
        component: "API gateway",
        id: 1,
      },
      {
        component: "CDN",
        id: 1,
      },
    ],
  },
  {
    component: "DNS",
    id: 1,
    adjacencyList: [
      {
        component: "API gateway",
        id: 1,
      },
      {
        component: "CDN",
        id: 1,
      },
    ],
  }
];
export const mainFuseChildren = [
  {
    id: 'fuse_1',
    content: "Fuse 1",
    type: "fuse",
    children: [
      {
        id: 'cs_1',
        content: "Charging station 1",
        type: "charging_station",
      },
      {
        id: 'sl_1',
        content: " Siteload 1",
        type: "siteload",
      },
      {
        id: 'fuse_3',
        content: "Fuse 3",
        type: "fuse",
        children: [
          {
            id: 'sl_2',
            content: " Siteload 2",
            type: "siteload",
          },
        ]
      }
    ]
  },
  {
    id: 'cs_2',
    content: "Charging station 2",
    type: "charging_station",
  },
  {
    id: 'sl_3',
    content: " Siteload 3",
    type: "siteload",
  },
  {
    id: 'fuse_2',
    content: "Fuse 2",
    type: "fuse",
    children: []
  }
];

const dataTree = {
    title: "John",
    data: {fullname:"John Wich", age:35, note:"Nothing"},
    children: [
      {
        title: "Mary",
        data: {fullname:"Mary Jane", age:30, note:"Nothing"},
      },  
      {
        title: "Arthur",
        data: {fullname:"Arthur Shelby", age:40, note:"Nothing"},
        children: [
          {
            title: "Lily",
            data: {fullname:"Arthur Shelby", age:40, note:"Nothing"},
            children: [
              {
                title: "Hank",
                data: {fullname:"Tom Hank", age:60, note:"Nothing"},
              },
              {
                title: "Henry",
                data: {fullname:"Henry Shelby", age:45, note:"Nothing"},
              },
            ],
          },
          {
            title: "Billy",
            data: {fullname:"Billy Man", age:40, note:"Nothing"},
          },
        ],
      },
      {
        title: "Dolores",
        data: {fullname:"Dolores Shelby", age:40, note:"Nothing"},
      },
    ],
  };

export default dataTree
  
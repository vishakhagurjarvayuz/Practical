const config = {
    screens: {
      Posts: {
        path: "posts",
      },
     Post: {
        path: "post/:id",
        parse: {
          id: (id) => `${id}`,
        },
      },
      Notification: {
        path: "notification"
       }}
  };

  const linking = {
    prefixes: ["http://app"],
    config,
  };

  export default linking;
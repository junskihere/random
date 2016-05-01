if(_.isEqual(Posts.find().count(),0)){
  for(let i = 0; i < 25; i++){
    Posts.insert({
      name: "Post Test " + [i],
      subbmitedAtt: new Date()
    });
  };
};

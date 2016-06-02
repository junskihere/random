describe('Insert data to the categories collection and subscribe to the data to check if data is successfully inserted', function () {
  var server = meteor({flavor: "fiber"});
  var client = ddp(server, {flavor: "fiber"});

  it('should insert an object to Categories collection', function () {
    server.execute(function () {
      var data = {
        name : 'Games',
        modifiedAt : new Date(),
        createdAt : new Date(),
      }
      Meteor.call("categoriesAdd", data)
    });
  });

  it('should be able to subscribe to the Categories collection and return an object', function () {
    client.subscribe("categoriesList");sadasdsa
    var category = client.collection("categories");
    expect(category).to.be.a("Object");
  });

  it('should NOT equal to NULL or UNDEFINED', function () {
    client.subscribe("categoriesList");
    var category = client.collection("categories");
    expect(category).to.not.be.a("undefined");
  });

  it('should equal to the inserted data', function () {
    client.subscribe("categoriesList");
    var category = client.collection("categories");
    var characters = Object.keys(category);
    for(var i in category) {
      expect(category[i].name).to.be.equal('Games');
      expect(category[i].modifiedAt).to.be.a('Date');
      expect(category[i].createdAt).to.be.a('Date');
    }
  });
});

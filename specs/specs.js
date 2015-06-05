describe('Pizza', function(){
  it('will create a new pizza, and the user will select the quantity, toppings, and size', function(){
    var newOrder = new Pizza(0, "", "");
    expect(newOrder.quantity).to.eql(0);
    expect(newOrder.toppings).to.eql("");
    expect(newOrder.sizeOfPizza).to.eql("");
  });
});

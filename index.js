

function BoardMember (name, homeState, training) {
  this.name = name 
  this.homeState = homeState
  this.training = training
  this.veto = function() {
    return "No, I must disagree"
  }
   this.approve = function() {
    return "You can do that!"
  }
}




    function User (name, email){
      this.name = name;
      this.email = email;
      this.sayHello = function(){
        console.log(`Hello everybody, my name is ${this.name}!`);
      }
    }
     
    let lauren = new User('lauren', 'lauren@gmail.com')
    lauren.sayHello()
    // "Hello everybody, my name is lauren!"
     
    let fred = new User('fred', 'fred@gmail.com')
    fred.sayHello()
    // "Hello everybody, my name is fred!"
     
    let bob = new User('bob', 'bob@gmail.com')
    bob.sayHello()
    // "Hello everybody, my name is bob!"
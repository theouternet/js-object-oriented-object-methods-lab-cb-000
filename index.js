






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
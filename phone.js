// Define a generic Observer class with an empty update method
class Observer {
    update(phoneNumber) {}
  }
  
  
  class PhoneNumberObserver extends Observer {
    update(phoneNumber) {
      console.log(`Phone number dialed: ${phoneNumber}`);
    }
  }
  
  
  class CustomMessageObserver extends Observer {
    update(phoneNumber) {
      console.log(`Now Dialing ${phoneNumber}`);
    }
  }
  
  // Define the Telephone class
  class Telephone {
    
    constructor() {
      this.phoneNumbers = new Set(); 
      this.observers = []; 
    }
  
    // Method to add an observer to the list
    addObserver(observer) {
      this.observers.push(observer);
    }
  
   
    removeObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
   
    notifyObservers(phoneNumber) {
      this.observers.forEach((observer) => {
        observer.update(phoneNumber);
      });
    }
  
    
    addPhoneNumber(phoneNumber) {
      this.phoneNumbers.add(phoneNumber);
    }
  
    removePhoneNumber(phoneNumber) {
      this.phoneNumbers.delete(phoneNumber);
    }
  
    // Method to dial a phone number and notify observers
    dialPhoneNumber(phoneNumber) {
      if (this.phoneNumbers.has(phoneNumber)) {
        console.log(`Dialing ${phoneNumber}`);
        this.notifyObservers(phoneNumber);
      } else {
        console.log(`Error: Phone number ${phoneNumber} not found.`);
      }
    }
  }
  
  const phoneNumberObserver = new PhoneNumberObserver();
  const customMessageObserver = new CustomMessageObserver();
  
  // Creating an instance of the telephone
  const telephone = new Telephone();
  
  // Adding observers to the telephone
  telephone.addObserver(phoneNumberObserver);
  telephone.addObserver(customMessageObserver);
  
  // Adding phone numbers
  telephone.addPhoneNumber("1234567890");
  telephone.addPhoneNumber("2345678901");
  
  // Dialing a phone number
  telephone.dialPhoneNumber("1234567890");
  telephone.dialPhoneNumber("2345678901"); 
  
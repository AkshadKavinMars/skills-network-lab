let person = "Enrolled";
let isauthorized = false;
let dietician_interact = false ;
let auth_message;

    if(person === "Employee") { isauthorized = true;
        auth_message = "Authorized to have access to services";
    }
    else if(person === "Enrolled") { isauthorized = true;
        if(!dietician_interact) { dietician_interact = true;
            auth_message = "They have access to services and one and one interaction with a dietician"; 
        }
        
        else{
            auth_message = "Invalid Authentication...Try Refresh..."; 
        }
    }
    else if(person === "Subscriber") { isauthorized = true;
        auth_message = " Partial Access to Dietary Services..";
    }
    else if(person ==="Non-Subscriber") {
        auth_message = "Enroll first..."
    }
else { isauthorized = false;
    auth_message = "Not a proper role...Redefine first.."
}

console.log("Person - ",  person)
console.log("Authentication Status -" , isauthorized)
console.log("Dietician Interaction Status -" , dietician_interact)
console.log("Authentication Message -" , auth_message)

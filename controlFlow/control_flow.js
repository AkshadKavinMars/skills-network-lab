let user_role = "manager"
let accesslevel;

if (user_role === "admin") {
    accesslevel = "Full access granted"
}
else if (user_role == "manager") {
    accesslevel = "Limited Access Granted"
}
else {
    accesslevel = "No Access Granted"
}
console.log(accesslevel)

let isLoggedIn = true;
let userMessage;

if (isLoggedIn)
{
    if (user_role === "admin") 
    {
        userMessage = "Welcome, Admin";
    }
    else {
        userMessage = "Welcome, User";
    }
} else {
    userMessage = "please log in to access the system"
}

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

let isAuthenticated = true;
let authentication_status = isAuthenticated ? "Authenticated" : "Non - Authorized"
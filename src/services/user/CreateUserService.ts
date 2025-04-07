
interface UserRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
    async execute({name, email, password}: UserRequest){
        // Check if user exists
        // Hash password
        // Save user to database
        console.log("User created:", {name, email, password});
        return {name, email, password};
    }
}

export { CreateUserService };

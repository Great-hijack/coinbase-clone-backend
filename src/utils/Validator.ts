class Validator {
    public emailValidator(email: string) {
        if (!email) return "Email cannot be empty";
        if (!email.includes('@')) {
            return "Please enter valid email address.";
        }
        // [A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}
        if (/\s+/g.test(email)) {
            return "Email cannot have whitespaces";
        }
        return "";
    }
    
    public passwordValidator(password: String) {
        if (password.length < 8) return "Password must be greater than 8 characters";
        return "";
    }
}

export = new Validator();
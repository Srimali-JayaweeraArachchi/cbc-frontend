import "./LoginPage.css";

export default function LoginPage() {
    return (
        <div className="login-container">
            <h1>Login Page</h1>
            <h2>Enter your credentials</h2>
            <div className="login-form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </div>
        </div>
    );
}



export default function HomePage() {
    return (
        <div className="home-container">
            <header className="header">
                <h1>Welcome to Our Website</h1>
                <p>Your one-stop destination for quality products.</p>
            </header>
            <section className="content">
                <h2>Featured Products</h2>
                <div className="product-grid">
                    <div className="product-card">
                        <img src="https://via.placeholder.com/150" alt="Product 1" />
                        <h3>Product 1</h3>
                        <p>$29.99</p>
                        <button>Buy Now</button>
                    </div>
                    <div className="product-card">
                        <img src="https://via.placeholder.com/150" alt="Product 2" />
                        <h3>Product 2</h3>
                        <p>$39.99</p>
                        <button>Buy Now</button>
                    </div>
                    <div className="product-card">
                        <img src="https://via.placeholder.com/150" alt="Product 3" />
                        <h3>Product 3</h3>
                        <p>$49.99</p>
                        <button>Buy Now</button>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p>© 2025 YourCompany. All rights reserved.</p>
            </footer>
        </div>
    );
}

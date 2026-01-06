export const useCart = () => {
    const cart = useState('cart', () => []);

    // Load cart from localStorage on init (client-side only)
    const initCart = () => {
        if (import.meta.client) {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                cart.value = JSON.parse(savedCart);
            }
        }
    };

    const addToCart = (product) => {
        cart.value.push(product);
        if (import.meta.client) {
            localStorage.setItem('cart', JSON.stringify(cart.value));
        }
    };

    const removeFromCart = (index) => {
        cart.value.splice(index, 1);
        if (import.meta.client) {
            localStorage.setItem('cart', JSON.stringify(cart.value));
        }
    };

    const getCartTotal = () => {
        return cart.value.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    const clearCart = () => {
        cart.value = [];
        if (import.meta.client) {
            localStorage.removeItem('cart');
        }
    };

    return {
        cart,
        initCart,
        addToCart,
        removeFromCart,
        getCartTotal,
        clearCart
    };
};


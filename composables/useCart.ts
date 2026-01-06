export const useCart = () => {
    const cart = useState('cart', () => []);
    const { user } = useAuth();
    const router = useRouter();

    const initCart = () => {
        if (import.meta.client) {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                cart.value = JSON.parse(savedCart);
            }
        }
    };

    const addToCart = (product) => {
        if (!user.value) {
            alert("Please log in to add items to your cart.");
            router.push('/login');
            return;
        }

        const existingItem = cart.value.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.value.push({ product, quantity: 1 });
        }

        saveCart();
    };

    const updateQuantity = (productId, change) => {
        const item = cart.value.find(i => i.product.id === productId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                removeFromCart(productId);
            } else {
                saveCart();
            }
        }
    };

    const removeFromCart = (productId) => {
        const index = cart.value.findIndex(i => i.product.id === productId);
        if (index > -1) {
            cart.value.splice(index, 1);
            saveCart();
        }
    };

    const getCartTotal = () => {
        return cart.value.reduce((total, item) => total + (item.product.price * item.quantity), 0).toFixed(2);
    };

    const getCartCount = computed(() => {
        return cart.value.reduce((count, item) => count + item.quantity, 0);
    });

    const saveCart = () => {
        if (import.meta.client) {
            localStorage.setItem('cart', JSON.stringify(cart.value));
        }
    };

    const clearCart = () => {
        cart.value = [];
        saveCart();
    };

    return {
        cart,
        initCart,
        addToCart,
        updateQuantity,
        removeFromCart,
        getCartTotal,
        getCartCount,
        clearCart
    };
};


// Initialize the products array
let products = [
    {
        id: 1,
        name: "Laptop",
        price: 999,
        category: "Electronics",
        inStock: true,
    },
    {
        id: 2,
        name: "Headphones",
        price: 129,
        category: "Electronics",
        inStock: false,
    },
    {
        id: 3,
        name: "Coffee Mug",
        price: 12,
        category: "Kitchen",
        inStock: true,
    },
    { id: 4, name: "Book", price: 24, category: "Books", inStock: true },
    {
        id: 5,
        name: "Smartphone",
        price: 699,
        category: "Electronics",
        inStock: true,
    },
    {
        id: 6,
        name: "Water Bottle",
        price: 15,
        category: "Kitchen",
        inStock: false,
    },
];

// Function to display results
function displayOutput(heading, content) {
    const outputElement = document.getElementById("output");
    let outputText = `--- ${heading} ---\n\n`;

    if (typeof content === "object") {
        outputText += JSON.stringify(content, null, 2);
    } else {
        outputText += content;
    }

    outputElement.textContent = outputText;
}

// Show original array
function showOriginal() {
    displayOutput("Original Products Array", products);
}

// Add item using push
function addPush() {
    const newProduct = {
        id: products.length + 1,
        name: "Gaming Mouse",
        price: 59,
        category: "Electronics",
        inStock: true,
    };
    products.push(newProduct);
    displayOutput("Added Product with push()", {
        addedProduct: newProduct,
        updatedArray: products,
    });
}

// Add item using unshift
function addUnshift() {
    const newProduct = {
        id: 0,
        name: "Keyboard",
        price: 89,
        category: "Electronics",
        inStock: true,
    };
    products.unshift(newProduct);
    displayOutput("Added Product with unshift()", {
        addedProduct: newProduct,
        updatedArray: products,
    });
}

// Remove last item using pop
function removePop() {
    if (products.length === 0) {
        displayOutput("Pop Operation", "Array is empty, nothing to remove");
        return;
    }
    const removedProduct = products.pop();
    displayOutput("Removed Last Product with pop()", {
        removedProduct: removedProduct,
        updatedArray: products,
    });
}

// Remove first item using shift
function removeShift() {
    if (products.length === 0) {
        displayOutput("Shift Operation", "Array is empty, nothing to remove");
        return;
    }
    const removedProduct = products.shift();
    displayOutput("Removed First Product with shift()", {
        removedProduct: removedProduct,
        updatedArray: products,
    });
}

// Remove items using splice
function removeSplice() {
    if (products.length < 3) {
        displayOutput(
            "Splice Operation",
            "Need at least 3 items for this operation"
        );
        return;
    }
    const removedProducts = products.splice(1, 2);
    displayOutput("Removed Products with splice(1, 2)", {
        removedProducts: removedProducts,
        updatedArray: products,
    });
}

// Transform using map
function mapBtn() {
    const productSummaries = products.map((product) => {
        return {
            name: product.name,
            priceWithTax: (product.price * 1.1).toFixed(2),
            status: product.inStock ? "Available" : "Out of Stock",
        };
    });
    displayOutput("Transformed Array with map()", productSummaries);
}

// Filter array
function filterBtn() {
    const inStockProducts = products.filter((product) => product.inStock);
    const expensiveProducts = products.filter((product) => product.price > 100);
    displayOutput("Filtered Arrays", {
        inStockProducts: inStockProducts,
        expensiveProducts: expensiveProducts,
    });
}

// Reduce array
function reduceBtn() {
    const totalValue = products.reduce(
        (sum, product) => sum + product.price,
        0
    );
    const categoryCount = products.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
    }, {});
    displayOutput("Reduce Operations", {
        totalInventoryValue: `$${totalValue.toFixed(2)}`,
        productsByCategory: categoryCount,
    });
}

// Sort array
function sortBtn() {
    // Create copies to avoid modifying the original array
    const byPrice = [...products].sort((a, b) => a.price - b.price);
    const byName = [...products].sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });
    displayOutput("Sorted Arrays", {
        byPrice: byPrice,
        byName: byName,
    });
}

// Method chaining
function chainBtn() {
    // Get the average price of in-stock electronics
    const electronicsData = products.filter(
        (product) => product.category === "Electronics" && product.inStock
    );

    let electronicsAvg = 0;
    if (electronicsData.length > 0) {
        electronicsAvg =
            electronicsData
                .map((product) => product.price)
                .reduce((sum, price) => sum + price, 0) /
            electronicsData.length;
    }

    // Get names of products sorted by price
    const productNamesByPrice = [...products]
        .sort((a, b) => a.price - b.price)
        .map((product) => product.name)
        .join(", ");

    displayOutput("Method Chaining Results", {
        averagePriceOfElectronics: `$${electronicsAvg.toFixed(2)}`,
        productNamesByPrice: productNamesByPrice,
    });
}

// Optional chaining
function optionalChainingBtn() {
    const inventory = {
        locations: [
            {
                name: "Main Warehouse",
                products: { electronics: 150, books: 200 },
            },
            {
                name: "Branch Store",
                // No products property
            },
        ],
    };

    // Access nested properties safely with optional chaining
    const mainElectronics = inventory.locations[0]?.products?.electronics;
    const branchElectronics = inventory.locations[1]?.products?.electronics;
    const nonExistentLocation = inventory.locations[2]?.name;

    displayOutput("Optional Chaining Examples", {
        "inventory.locations[0]?.products?.electronics": mainElectronics,
        "inventory.locations[1]?.products?.electronics": branchElectronics,
        "inventory.locations[2]?.name": nonExistentLocation,
    });
}

// Assign onclick handlers when the window loads
window.onload = function () {
    document.getElementById("showOriginal").onclick = showOriginal;
    document.getElementById("addPush").onclick = addPush;
    document.getElementById("addUnshift").onclick = addUnshift;
    document.getElementById("removePop").onclick = removePop;
    document.getElementById("removeShift").onclick = removeShift;
    document.getElementById("removeSplice").onclick = removeSplice;
    document.getElementById("mapBtn").onclick = mapBtn;
    document.getElementById("filterBtn").onclick = filterBtn;
    document.getElementById("reduceBtn").onclick = reduceBtn;
    document.getElementById("sortBtn").onclick = sortBtn;
    document.getElementById("chainBtn").onclick = chainBtn;
    document.getElementById("optionalChainingBtn").onclick =
        optionalChainingBtn;
};

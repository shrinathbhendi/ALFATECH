/**
 * all.js - Complete categories page with products display and slider functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Categories page loaded');
    
    // Get container
    const categoriesGrid = document.getElementById('categoriesGrid');
    
    if (!categoriesGrid) {
        console.error('Categories grid container not found');
        return;
    }
    
    // Generate HTML for all categories with their products and slider for multi-product categories
    function generateCategoriesHTML() {
        let html = '';

        // Helper to get product price HTML
        const getProductPriceHtml = (price) => {
            return price && price.toLowerCase() !== 'inquiry' ? `<div class="product-price">${price}</div>` : '';
        };

        categoriesWithProducts.forEach(category => {
            const productsToDisplay = category.products;
            const originalCount = productsToDisplay.length;
            let productsHtml = '';
            const productCount = productsToDisplay.length;
            const hasSlider = originalCount > 3; // Show slider navigation only if more than 3 products
            
            productsToDisplay.forEach(product => {
                productsHtml += `
                    <a href="${product.link}" class="product-card-category">
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='assets/images.png/Newplant1.png';">
                        </div>
                        <div class="product-info">
                            <h3>${product.name}</h3>
                            ${getProductPriceHtml(product.price)}
                            <span class="product-view-btn">View Details →</span>
                        </div>
                    </a>
                `;
            });
            
            // Check if we should use a slider or a simple grid
            if (!hasSlider) {
                // 4 or fewer products - no slider, no arrows
                html += `
                    <div class="category-wrapper no-slider-category" id="category-${category.id}" data-product-count="${productCount}" data-aos="fade-up">
                        <div class="category-header">
                            <h2 class="category-title">${category.name}</h2>
                        </div>
                        <div class="products-grid">
                            ${productsHtml}
                        </div>
                    </div>
                `;
            } else {
                // More than 4 products - add slider with navigation buttons
                const sliderId = `slider-${category.id}`;
                html += `
                    <div class="category-wrapper" id="category-${category.id}" data-product-count="${productCount}" data-aos="fade-up">
                        <div class="category-header">
                            <h2 class="category-title">${category.name}</h2>
                        </div>
                        <div class="slider-container" id="${sliderId}">
                            <div class="products-grid">
                                ${productsHtml}
                            </div>
                            <button class="slider-btn slider-btn-prev" data-slider="${sliderId}">
                                <i class="fas fa-chevron-left"></i>
                            </button>
                            <button class="slider-btn slider-btn-next" data-slider="${sliderId}">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                            <div class="scroll-indicator">
                                <span><i class="fas fa-arrows-alt-h"></i> Scroll for more products →</span>
                            </div>
                        </div>
                    </div>
                `;
            }
        });
        
        categoriesGrid.innerHTML = html;
        
        // Initialize slider functionality for all sliders
        initializeSliders();

        // ========== SEARCH FUNCTIONALITY ==========
        const searchInput = document.getElementById('productSearchInput');
        const clearBtn = document.getElementById('clearSearch');

        if (searchInput) {
            const handleSearch = function() {
                const rawQuery = searchInput.value.toLowerCase().trim();
                if (clearBtn) clearBtn.style.display = rawQuery.length > 0 ? 'block' : 'none';

                // Synonyms & key terms expansion map
                let expandedQuery = rawQuery
                    .replace(/\bkhoya\b/g, 'khawa mawa')
                    .replace(/\bmawa\b/g, 'khawa khoya')
                    .replace(/\btofu\b/g, 'paneer soya')
                    .replace(/\bscale\b/g, 'weighing scale')
                    .replace(/\bbmc\b/g, 'bulk milk cooler')
                    .replace(/\bpasteuriser\b/g, 'pasteurizer');

                const tokens = expandedQuery.split(/\s+/).filter(t => t.length > 0);

                const categoryWrappers = document.querySelectorAll('.category-wrapper');
                const categoriesGrid = document.getElementById('categoriesGrid');
                let foundAny = false;

                categoryWrappers.forEach(wrapper => {
                    const titleEl = wrapper.querySelector('.category-title');
                    const categoryTitle = titleEl ? titleEl.textContent.toLowerCase() : '';
                    const productCards = wrapper.querySelectorAll('.product-card-category');
                    let hasVisibleProduct = false;

                    const grid = wrapper.querySelector('.products-grid');
                    if (grid && tokens.length > 0) grid.scrollLeft = 0; // Reset scroll on search

                    productCards.forEach(card => {
                        const h3 = card.querySelector('h3');
                        const productName = h3 ? h3.textContent.toLowerCase() : '';
                        const href = card.getAttribute('href') ? card.getAttribute('href').toLowerCase() : '';
                        
                        const fullText = `${productName} ${categoryTitle} ${href}`;

                        // Check if EVERY search token matches somewhere in fullText
                        const matches = tokens.length === 0 || tokens.every(token => fullText.includes(token));

                        card.style.display = matches ? 'flex' : 'none';
                        if (matches) hasVisibleProduct = true;
                    });

                    if (hasVisibleProduct) {
                        wrapper.style.display = 'block';
                        foundAny = true;
                        
                        if(grid) {
                            grid.style.overflowX = tokens.length > 0 ? 'visible' : 'auto';
                            grid.style.flexWrap = tokens.length > 0 ? 'wrap' : 'nowrap';
                        }
                        wrapper.querySelectorAll('.slider-btn, .scroll-indicator').forEach(el => 
                            el.style.display = tokens.length > 0 ? 'none' : ''
                        );
                    } else {
                        wrapper.style.display = 'none';
                    }
                });

                let noResultsMsg = document.getElementById('noResultsMessage');
                if (!foundAny && tokens.length > 0) {
                    if (!noResultsMsg) {
                        noResultsMsg = document.createElement('div');
                        noResultsMsg.id = 'noResultsMessage';
                        noResultsMsg.className = 'text-center py-5';
                        noResultsMsg.innerHTML = `<i class="fas fa-search-minus mb-3" style="font-size: 3rem; color: #cbd5e1;"></i><h3 style="color: #5a6e7c;">No machines found matching "${rawQuery}"</h3>`;
                        categoriesGrid.appendChild(noResultsMsg);
                    }
                } else if (noResultsMsg) {
                    noResultsMsg.remove();
                }
            };

            searchInput.addEventListener('input', handleSearch);

            if (clearBtn) {
                clearBtn.addEventListener('click', function() {
                    searchInput.value = '';
                    handleSearch();
                });
            }
        }
    }

    // Restoration of missing slider logic
    function initializeSliders() {
        const sliders = document.querySelectorAll('.slider-container');
        
        sliders.forEach(slider => {
            const productsGrid = slider.querySelector('.products-grid');
            const prevBtn = slider.querySelector('.slider-btn-prev');
            const nextBtn = slider.querySelector('.slider-btn-next');
            
            if (productsGrid && prevBtn && nextBtn) {
                const getScrollAmount = () => {
                    const card = productsGrid.querySelector('.product-card-category');
                    return card ? card.offsetWidth + 20 : 330;
                };
                
                prevBtn.addEventListener('click', () => {
                    productsGrid.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
                });
                
                nextBtn.addEventListener('click', () => {
                    productsGrid.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
                });
                
                const updateButtonsVisibility = () => {
                    const maxScroll = productsGrid.scrollWidth - productsGrid.clientWidth;
                    if (productsGrid.scrollLeft <= 10) {
                        prevBtn.style.opacity = '0.5';
                        prevBtn.style.cursor = 'not-allowed';
                    } else {
                        prevBtn.style.opacity = '1';
                        prevBtn.style.cursor = 'pointer';
                    }
                    
                    if (productsGrid.scrollLeft >= maxScroll - 10) {
                        nextBtn.style.opacity = '0.5';
                        nextBtn.style.cursor = 'not-allowed';
                    } else {
                        nextBtn.style.opacity = '1';
                        nextBtn.style.cursor = 'pointer';
                    }
                };
                
                productsGrid.addEventListener('scroll', updateButtonsVisibility);
                window.addEventListener('resize', () => {
                    setTimeout(updateButtonsVisibility, 100);
                });
                setTimeout(updateButtonsVisibility, 100);
            }
        });
    }
    
    // Generate products on load
    if (categoriesGrid) {
        generateCategoriesHTML();
    }
});

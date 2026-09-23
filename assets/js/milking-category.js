/**
 * milking-category.js
 * Premium Product Details & Sliding Category Showcase for Alfa Tech India
 * Matches exact user reference design (Clean checkmarked specs + Sliding cards)
 */

(function () {
    'use strict';

    const MILKING_PRODUCTS = {
        'double-bucket': {
            id: 'double-bucket',
            name: 'Double Bucket Milking Machine (without Engine)',
            shortName: 'Double Bucket Machine',
            category: 'MILKING MACHINES',
            mainImage: 'assets/withoutengin.png',
            thumbnails: [
                'assets/withoutengin.png',
                'assets/images.png/doublebuket3.png',
                'assets/images.png/doublebuket2.png',
                'assets/images.png/dublebuket5.png'
            ],
            specs: [
                { key: 'Milk Can Capacity:', val: '20 L each (Double Bucket)' },
                { key: 'Milk Extraction Applicable To:', val: 'Buffalo & Cow (Adjustable Pressure)' },
                { key: 'Automation Grade:', val: 'Semi Automatic' },
                { key: 'Design Type:', val: 'Fixed Station' },
                { key: 'Number of Buckets:', val: 'Double Bucket (2 Buckets)' },
                { key: 'Milking Cluster:', val: 'Double Cluster Assembly' },
                { key: 'Cows/hour:', val: '24-25 Cows or 15-16 Buffaloes' }
            ],
            description: 'Alfa Tech India offers all range of Milking Machines. Double Bucket Milking Machine can milk about 24/25 cows or 15/16 Buffalos per hour. This is the only Milking Machine which also milks Buffalo by adjusting pressure. Alfa Tech Milking Machine is very easy to use and very much suitable for Indian climate & animals.'
        },
        'single-bucket': {
            id: 'single-bucket',
            name: 'Alfa Tech India Single Bucket Fixed machine',
            shortName: 'Single Bucket Fixed',
            category: 'MILKING MACHINES',
            mainImage: 'assets/images.png/photo19.png',
            thumbnails: [
                'assets/images.png/photo19.png',
                'assets/images.png/photo18.png',
                'assets/images.png/photo20.png'
            ],
            specs: [
                { key: 'Milk Can Capacity:', val: '20 L Heavy-Duty SS 304 Can' },
                { key: 'Milk Extraction Applicable To:', val: 'Cows & Buffaloes' },
                { key: 'Automation Grade:', val: 'Semi Automatic' },
                { key: 'Design Type:', val: 'Fixed Bench Model' },
                { key: 'Number of Buckets:', val: 'Single Bucket (1 Bucket)' },
                { key: 'Milking Cluster:', val: 'Single Cluster Assembly' },
                { key: 'Cows/hour:', val: '10-12 Cows or 8-10 Buffaloes' }
            ],
            description: 'The Alfa Tech Single Bucket Milking Machine provides gentle, rhythmic milking without hurting animals. Built with heavy-duty SS304 materials, standard 1.5HP motor or 1.5HP Honda Engine option, 300 LPM vacuum pump, and leak-proof gasket seals suitable for both cows and buffaloes.'
        },
        'double-bucket-engine': {
            id: 'double-bucket-engine',
            name: 'Milking Machine Double Bucket (with Engine)',
            shortName: 'Double Bucket Engine',
            category: 'MILKING MACHINES',
            mainImage: 'assets/images.png/photo18.png',
            thumbnails: [
                'assets/images.png/photo18.png',
                'assets/images.png/photo19.png',
                'assets/images.png/doublebuket3.png'
            ],
            specs: [
                { key: 'Milk Can Capacity:', val: '20 L each (Double Bucket)' },
                { key: 'Dual Power System:', val: '1.5 HP Motor + 1.5 HP Petrol/Kerosene Engine' },
                { key: 'Automation Grade:', val: 'Semi Automatic' },
                { key: 'Design Type:', val: 'Fixed Station with Engine Mount' },
                { key: 'Number of Buckets:', val: 'Double Bucket (2 Buckets)' },
                { key: 'Milking Cluster:', val: 'Double Cluster Assembly' },
                { key: 'Cows/hour:', val: '20-25 Cows or 15-16 Buffaloes' }
            ],
            description: 'Double Bucket Milking Machine equipped with both an electric motor and auxiliary engine drive option for uninterrupted milking operations during rural power outages. Ensures consistent milk extraction cycles for cows and buffaloes.'
        },
        'alfa-double-bucket': {
            id: 'alfa-double-bucket',
            name: 'Alfa Tech India Double Bucket Milking Machine',
            shortName: 'Alfa Double Bucket',
            category: 'MILKING MACHINES',
            mainImage: 'assets/images.png/doublebuket3.png',
            thumbnails: [
                'assets/images.png/doublebuket3.png',
                'assets/images.png/doublebuket2.png',
                'assets/images.png/dublebuket5.png'
            ],
            specs: [
                { key: 'Milk Can Capacity:', val: '2 x 20 L SS 304 Food-Grade Cans' },
                { key: 'Vacuum Volume:', val: '350 LPM Dry Vacuum Pump with Regulator' },
                { key: 'Automation Grade:', val: 'Semi Automatic' },
                { key: 'Design Type:', val: 'Commercial Grade Fixed Model' },
                { key: 'Number of Buckets:', val: 'Double Bucket (2 Buckets)' },
                { key: 'Milking Cluster:', val: 'Dual Independent Clusters' },
                { key: 'Cows/hour:', val: '25 Cows or 16 Buffaloes' }
            ],
            description: 'Premium stainless steel double bucket milking machine engineered for commercial dairy farming. Features dual pulsators, hygienic food-grade liners, and sturdy frame design.'
        },
        'trolly-milking': {
            id: 'trolly-milking',
            name: 'Alfa Tech Trolly Milking Machine (Single Bucket)',
            shortName: 'Trolley Milking Unit',
            category: 'MILKING MACHINES',
            mainImage: 'assets/images.png/photo20.png',
            thumbnails: [
                'assets/images.png/photo20.png',
                'assets/images.png/photo18.png',
                'assets/images.png/photo19.png'
            ],
            specs: [
                { key: 'Milk Can Capacity:', val: '25 L Heavy Duty SS Can' },
                { key: 'Mobility:', val: 'All-Terrain Wheeled Mobile Trolley' },
                { key: 'Automation Grade:', val: 'Semi Automatic' },
                { key: 'Design Type:', val: 'Mobile Trolley Station' },
                { key: 'Number of Buckets:', val: 'Single Bucket (25L)' },
                { key: 'Hose Length:', val: '20 Feet Food-Grade Silicon Hose' },
                { key: 'Cows/hour:', val: '10-12 Cows in one hour' }
            ],
            description: 'The Alfa Tech Trolly Milking Machine is mounted on sturdy rubber wheels with an ergonomic push handle for effortless movement between cattle sheds. Equipped with 20ft food-grade hose, 25L SS can, and works efficiently on household inverter power.'
        },
        'four-bucket': {
            id: 'four-bucket',
            name: 'Milking Machine Four Bucket',
            shortName: 'Four Bucket Machine',
            category: 'MILKING MACHINES',
            mainImage: 'assets/images.png/four2.png',
            thumbnails: [
                'assets/images.png/four2.png',
                'assets/images.png/for1.png',
                'assets/images.png/four3.png',
                'assets/images.png/four4.png'
            ],
            specs: [
                { key: 'Bucket Capacity:', val: '4 x 20 L SS 304 Buckets (80 L Total)' },
                { key: 'Motor Power:', val: '2 HP - 3 HP Heavy-Duty Induction Motor' },
                { key: 'Automation Grade:', val: 'Commercial Semi Automatic' },
                { key: 'Design Type:', val: 'Commercial Multi-Station Pipeline' },
                { key: 'Number of Buckets:', val: 'Four Buckets (4 Buckets)' },
                { key: 'Milking Clusters:', val: '4 Independent Automatic Pulsators' },
                { key: 'Cows/hour:', val: '40-50 Cows per hour' }
            ],
            description: 'High-yield commercial milking machine designed for large dairy farms. Milks 4 animals simultaneously with individual pulsators, automatic shutoff claws, and dual high-volume vacuum reservoirs.'
        },
        'portable-single-bucket': {
            id: 'portable-single-bucket',
            name: 'Portable Single Bucket Milking Machine',
            shortName: 'Portable Milking Unit',
            category: 'MILKING MACHINES',
            mainImage: 'assets/images.png/Portable Single Bucket Milking Machine.jpeg',
            thumbnails: [
                'assets/images.png/Portable Single Bucket Milking Machine.jpeg',
                'assets/images.png/photo19.png'
            ],
            specs: [
                { key: 'Milk Can Capacity:', val: '20 L SS 304 Can' },
                { key: 'Frame Type:', val: 'Ultra Lightweight Portable Carry Frame' },
                { key: 'Automation Grade:', val: 'Semi Automatic' },
                { key: 'Power Requirement:', val: '220V Single Phase / 1kVA Inverter' },
                { key: 'Number of Buckets:', val: 'Single Bucket' },
                { key: 'Milking Cluster:', val: 'Gentle Pulsation Single Cluster' },
                { key: 'Cows/hour:', val: '8-10 Cows per hour' }
            ],
            description: 'Ultra-portable single bucket milking system ideal for small farmers and dairy keepers. Lightweight carry frame, whisper-quiet operation, gentle pulsation, and quick wash design.'
        },
        'milking-parts': {
            id: 'milking-parts',
            name: 'Milking Machine Parts & Accessories',
            shortName: 'Milking Machine Parts',
            category: 'MILKING MACHINES',
            mainImage: 'assets/images.png/machinepart2.png',
            thumbnails: [
                'assets/images.png/machinepart2.png',
                'assets/images.png/machinpart1.png',
                'assets/images.png/dublebuket5.png'
            ],
            specs: [
                { key: 'Product Range:', val: 'Pulsators, Liners, Teat Shells, Claws, Gaskets' },
                { key: 'Material:', val: 'Food-Grade Silicone, SS 304 & Rubber' },
                { key: 'Compatibility:', val: 'Fits all Single, Double & Four Bucket Models' },
                { key: 'Quality Standard:', val: '100% Genuine Alfa Tech Factory Spares' },
                { key: 'Stock Availability:', val: 'In Stock & Ready for Immediate Dispatch' },
                { key: 'Warranty:', val: '6 Months Manufacturer Guarantee' }
            ],
            description: 'Complete range of genuine spare parts including pneumatic pulsators, food-grade silicone teat liners, stainless steel teat cups, 240cc/300cc claws, food-grade milk tubing, and airtight bucket lid gaskets.'
        }
    };

    // Render Sliding Category Carousel (Exact User Reference Image 1)
    function renderCategorySlider(activeId) {
        const track = document.getElementById('milkingCategorySlider');
        if (!track) return;

        let html = '';
        Object.keys(MILKING_PRODUCTS).forEach(key => {
            const p = MILKING_PRODUCTS[key];
            const isActive = p.id === activeId;

            html += `
                <div class="model-slide-card ${isActive ? 'is-active' : ''}" data-product-id="${p.id}">
                    ${isActive ? '<div class="model-active-tag">Viewing</div>' : ''}
                    <div class="model-card-image-wrap">
                        <img src="${p.mainImage}" alt="${p.name}" loading="lazy" onerror="this.onerror=null; this.src='assets/withoutengin.png';">
                    </div>
                    <div class="model-card-footer">
                        <div class="model-footer-dark">
                            <span class="model-card-name" title="${p.name}">${p.shortName || p.name}</span>
                        </div>
                        <div class="model-footer-arrow-wrap">
                            <span class="model-footer-arrow">&rarr;</span>
                        </div>
                    </div>
                </div>
            `;
        });

        track.innerHTML = html;

        // Attach click listeners to cards
        const cards = track.querySelectorAll('.model-slide-card');
        cards.forEach(card => {
            card.addEventListener('click', function (e) {
                e.preventDefault();
                const prodId = this.getAttribute('data-product-id');
                if (prodId) {
                    switchToProduct(prodId, true);
                }
            });
        });
    }

    // Switch Active Product
    function switchToProduct(productId, shouldScroll) {
        const prod = MILKING_PRODUCTS[productId];
        if (!prod) return;

        const mainContainer = document.getElementById('productDetailSection');
        if (mainContainer) {
            mainContainer.classList.add('detail-fade-out');
        }

        setTimeout(() => {
            // 1. Update Title
            const titleEl = document.getElementById('activeProductTitle');
            if (titleEl) titleEl.textContent = prod.name;

            // 2. Update Image
            const mainImg = document.getElementById('mainProductImage');
            if (mainImg) {
                mainImg.src = prod.mainImage;
                mainImg.alt = prod.name;
            }

            // 3. Update Thumbnails
            const thumbContainer = document.getElementById('activeProductThumbnails');
            if (thumbContainer && prod.thumbnails) {
                let tHtml = '';
                prod.thumbnails.forEach((src, idx) => {
                    tHtml += `<img src="${src}" class="product-thumb-item ${idx === 0 ? 'active' : ''}" alt="Thumbnail ${idx + 1}" data-image="${src}">`;
                });
                thumbContainer.innerHTML = tHtml;
                attachThumbnailListeners();
            }

            // 4. Update Specifications List (Exact checkmarked bullet layout matching reference)
            const specsContainer = document.getElementById('activeProductSpecs');
            if (specsContainer && prod.specs) {
                let sHtml = '';
                prod.specs.forEach(s => {
                    sHtml += `
                        <div class="spec-clean-row">
                            <span class="spec-clean-label">
                                <i class="fas fa-check-circle spec-clean-icon"></i>
                                ${s.key}
                            </span>
                            <span class="spec-clean-val">${s.val}</span>
                        </div>
                    `;
                });
                specsContainer.innerHTML = sHtml;
            }

            // 5. Update Description
            const descEl = document.getElementById('activeProductDescription');
            if (descEl) descEl.textContent = prod.description;

            // 6. Update Breadcrumb
            const breadcrumbCurrent = document.getElementById('breadcrumbCurrentProduct');
            if (breadcrumbCurrent) breadcrumbCurrent.textContent = prod.name;

            // 7. Update WhatsApp Link
            const waBtn = document.getElementById('activeProductWhatsApp');
            if (waBtn) {
                waBtn.href = `https://wa.me/918047653483?text=Hello%2C%20I%20am%20interested%20in%20${encodeURIComponent(prod.name)}`;
            }

            // 8. Update URL Query Param without page reload
            const newUrl = new URL(window.location);
            newUrl.searchParams.set('product', prod.id);
            window.history.replaceState({ productId: prod.id }, '', newUrl);

            // 9. Re-render Slider Cards to show active status
            renderCategorySlider(prod.id);

            // 10. Update Document Title
            document.title = `${prod.name} | Alfa Tech India`;

            if (mainContainer) {
                mainContainer.classList.remove('detail-fade-out');
                mainContainer.classList.add('detail-fade-in');
                setTimeout(() => mainContainer.classList.remove('detail-fade-in'), 300);
            }

            // 11. Scroll if requested
            if (shouldScroll && mainContainer) {
                const navOffset = 85;
                const targetY = mainContainer.getBoundingClientRect().top + window.scrollY - navOffset;
                window.scrollTo({
                    top: targetY,
                    behavior: 'smooth'
                });
            }
        }, 120);
    }

    // Thumbnail Click Listener
    function attachThumbnailListeners() {
        const thumbs = document.querySelectorAll('.product-thumb-item');
        const mainImg = document.getElementById('mainProductImage');

        thumbs.forEach(t => {
            t.addEventListener('click', function () {
                thumbs.forEach(el => el.classList.remove('active'));
                this.classList.add('active');
                if (mainImg) {
                    const newSrc = this.getAttribute('data-image') || this.src;
                    mainImg.src = newSrc;
                }
            });
        });
    }

    // Slider Navigation Arrows Setup
    function setupSliderArrows() {
        const trackContainer = document.getElementById('sliderTrackContainer');
        const prevBtn = document.getElementById('sliderPrevBtn');
        const nextBtn = document.getElementById('sliderNextBtn');

        if (!trackContainer) return;

        const scrollAmount = 330;

        if (prevBtn) {
            prevBtn.addEventListener('click', function () {
                trackContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function () {
                trackContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
        }

        // Mouse Drag to Scroll
        let isDown = false;
        let startX;
        let scrollLeft;

        trackContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            trackContainer.style.cursor = 'grabbing';
            startX = e.pageX - trackContainer.offsetLeft;
            scrollLeft = trackContainer.scrollLeft;
        });

        trackContainer.addEventListener('mouseleave', () => {
            isDown = false;
            trackContainer.style.cursor = 'grab';
        });

        trackContainer.addEventListener('mouseup', () => {
            isDown = false;
            trackContainer.style.cursor = 'grab';
        });

        trackContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - trackContainer.offsetLeft;
            const walk = (x - startX) * 1.5;
            trackContainer.scrollLeft = scrollLeft - walk;
        });
    }

    // Initialize on DOM Ready
    document.addEventListener('DOMContentLoaded', function () {
        const urlParams = new URLSearchParams(window.location.search);
        let activeId = urlParams.get('product');

        if (!activeId && window.location.hash) {
            const hashId = window.location.hash.replace('#', '').toLowerCase();
            if (MILKING_PRODUCTS[hashId]) {
                activeId = hashId;
            }
        }

        if (!activeId || !MILKING_PRODUCTS[activeId]) {
            activeId = 'double-bucket';
        }

        renderCategorySlider(activeId);
        setupSliderArrows();
        attachThumbnailListeners();

        if (activeId !== 'double-bucket') {
            switchToProduct(activeId, false);
        }

        window.addEventListener('popstate', function () {
            const params = new URLSearchParams(window.location.search);
            const pId = params.get('product') || 'double-bucket';
            if (MILKING_PRODUCTS[pId]) {
                switchToProduct(pId, false);
            }
        });
    });

    window.AlfaMilkingHub = {
        products: MILKING_PRODUCTS,
        switchTo: switchToProduct
    };
})();

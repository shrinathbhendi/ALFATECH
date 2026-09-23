/**
 * Products Grid and Filtering Logic for Alfa Tech India
 * Organizes 17 new industrial dairy equipment categories.
 */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        console.log('Industrial products grid initializing...');

        const gridContainer = document.getElementById('productsGrid');
        const filterGrid = document.getElementById('dynamicFilterGrid');
        const backToTopBtn = document.getElementById('backToTopBtn');

        // Only run product catalog logic on products.html page
        if (!document.getElementById('categorySidebarList') && !document.getElementById('mobileMarqueeContent')) return;

        // New Industrial Categories List
        const categories = [
            { name: 'Milking Machines', slug: 'milking-parlour-system' },
            { name: 'Milk Analysers', slug: 'milk-analyser' },
            { name: 'Cream Separators', slug: 'cream-separator' },
            { name: 'Khoya / Mawa Machines', slug: 'khawa-machine' },
            { name: 'Paneer Press', slug: 'paneer-making-machine' },
            { name: 'Bulk Milk Coolers', slug: 'bulk-milk-cooler' },
            { name: 'Vacuum Packaging Machine', slug: 'vacuum-packing-machine' },
            { name: 'Electrical Weighing Scale', slug: 'electrical-weighing-scale' },
            { name: 'Steam Boiler', slug: 'steam-boiler' },
            { name: 'Dairy Plant', slug: 'dairy-plant' },
            { name: 'Soya Milk Plant', slug: 'soya-milk-plant' },
            { name: 'Cheese Processing Plant', slug: 'cheese-processing-plant' },
            { name: 'Band Sealer Machine', slug: 'band-sealer-machine' },
            { name: 'Pneumatic Paneer Press', slug: 'pneumatic-paneer-press' },
            { name: 'Packing Machine', slug: 'packing-machine' },
            { name: 'Milk Boiler', slug: 'milk-boiler' },
            { name: 'Shrikhand Sweet Machine', slug: 'shrikhand-sweet-machine' },
            { name: 'Pouch Packing Machine', slug: 'pouch-packing-machine' },
            { name: 'Paste Filler Machine', slug: 'paste-filler-machine' },
            { name: 'Ghee Making Machine', slug: 'ghee-making-machine' }
        ];

        // New Industrial Products Data Set (22 products mapped to 17 categories)
        const products = [
            // Category: Dairy Plant (Parent)
            {
                name: 'Curd Plant',
                categorySlug: 'dairy-plant',
                categoryName: 'Dairy Plant',
                image: 'assets/images.png/Newplant2.png',
                desc: 'Hygienic milk culture and incubation systems for curd/yogurt processing. Includes pasteurization, culture vats, incubation, and cooling units.',
                link: 'product-plant.html'
            },
            {
                name: 'Milk Processing Plant',
                categorySlug: 'dairy-plant',
                categoryName: 'Dairy Plant',
                image: 'assets/images.png/Newplant1.png',
                desc: 'Complete commercial milk processing setups with integrated pasteurization and homogenization. Optimizes milk safety, stability, and product quality.',
                link: 'product-milk-processing-plant.html',
                subProducts: [
                    {
                        name: 'Pasteuriser',
                        desc: 'Plate heat exchanger (PHE) pasteurizer with automated digital control, holding tube, and flow diversion valves.'
                    },
                    {
                        name: 'Homogeniser',
                        desc: 'High-pressure double-stage homogenizer to reduce milk fat globule sizes for smooth, stable, cream-separated consistency.'
                    }
                ]
            },
            // Category: Bulk Milk Cooler
            {
                name: 'Bulk Milk Cooler (Stainless Steel Milk Cooling Tank)',
                categorySlug: 'bulk-milk-cooler',
                categoryName: 'Bulk Milk Cooler',
                image: 'assets/images.png/Stainless Steel Milk Cooling Tank.png',
                desc: 'Direct expansion (DX) stainless steel AISI 304 milk cooling tank with laser welded evaporators. Rapid cooling from 35°C to 4°C - 6°C with automatic Rotojet 5-cycle CIP cleaning system.',
                link: 'product-bulk-cooler.html'
            },
            // Category: Ghee Making Machine
            {
                name: 'Ghee Plant',
                categorySlug: 'ghee-making-machine',
                categoryName: 'Ghee Making Machine',
                image: 'assets/images.png/Pneumatic-Ghee-Filling-Machine.png',
                desc: 'Industrial-grade ghee processing lines. Configured for efficient moisture evaporation, clarification, and filtration to preserve traditional flavor.',
                link: 'product-dairy-ghee-plant.html'
            },
            {
                name: 'Fully Automatic Ghee Making Plant (500 LPD)',
                categorySlug: 'ghee-making-machine',
                categoryName: 'Ghee Making Machine',
                image: 'assets/images.png/Ghee-Plant-Layout-500LPD.png',
                desc: 'Turnkey 500 LPD fully automatic ghee manufacturing plant. Includes balance tank, storage tank, SS 304 ghee kettle, butter churner, ghee pump, sieve filtration, and pneumatic jar filling machine.',
                link: 'product-500lpd-ghee.html'
            },
            // Category: Cream Separator
            {
                name: '1000LIT Online Cream Separator',
                categorySlug: 'cream-separator',
                categoryName: 'Cream Separator',
                image: 'assets/images.png/Online-Cream-Separator-1000LPH.png',
                desc: 'Industrial 1000 LPH online milk skimming and cream separation machine. Built with food-grade SS 304 contact parts, integrated feed pump, and continuous discharge.',
                link: 'product-cream-separator.html'
            },
            {
                name: 'Cream Separator Online (Model AEO-1)',
                categorySlug: 'cream-separator',
                categoryName: 'Cream Separator',
                image: 'assets/images.png/Cream-Separator-AEO1-Catalog.png',
                desc: 'High-speed 1000 LPH separation & 1200 LPH clarification online model. 7000-7200 RPM dynamically balanced bowl, 1 HP 440V 3-phase motor, and heavy cast iron frame.',
                link: 'product-cream-separator.html'
            },
            {
                name: 'Alfa Tech India Whey Cream Separator',
                categorySlug: 'cream-separator',
                categoryName: 'Cream Separator',
                image: 'assets/images.png/photo26.png',
                desc: '500 LPH 25L SS304 whey cream separator for continuous extraction of high-purity whey cream during cheese & paneer processing.',
                link: 'product-whey-separator.html'
            },
            // Category: Paneer Making Machine
            {
                name: 'Paneer Making Machine',
                categorySlug: 'paneer-making-machine',
                categoryName: 'Paneer Making Machine',
                image: 'assets/images.png/paneer2.png',
                desc: 'Food-grade stainless steel paneer coagulation vats and manual pressing setups. Streamlines small to mid-scale commercial dairy production.',
                link: 'product-paneer-machine.html'
            },
            // Category: Pneumatic Paneer Cutter
            {
                name: 'Paneer Plant',
                categorySlug: 'paneer-making-machine',
                categoryName: 'Paneer Press',
                image: 'assets/images.png/Newpaneeer1.png',
                desc: 'Commercial high-capacity paneer processing plants. Features automated coagulation, whey draining, pressing, and chilling systems for uniform yield.',
                link: 'product-paneer-machine.html'
            },
            {
                name: 'Pneumatic Paneer Cutter',
                categorySlug: 'paneer-making-machine',
                categoryName: 'Paneer Press',
                image: 'assets/images.png/cutter2.png',
                desc: 'Pneumatic slab and cube cutting machine. Cuts large paneer blocks into consistent commercial sizes using custom-designed SS wire frames.',
                link: 'product-pneumatic-cutter.html'
            },
            // Category: Pneumatic Paneer Press
            {
                name: 'Pneumatic Paneer Press',
                categorySlug: 'pneumatic-paneer-press',
                categoryName: 'Paneer Press',
                image: 'assets/images.png/press1.png',
                desc: 'Heavy-duty pneumatic pressing machine for paneer blocks. Provides uniform pressure for consistent moisture removal and perfect block formation.',
                link: 'product-paneer-press.html'
            },
            {
                name: 'Pneumatic Press Machine',
                categorySlug: 'pneumatic-paneer-press',
                categoryName: 'Paneer Press',
                image: 'assets/images.png/Pneumatic1.png',
                desc: 'Industrial pneumatic press machine for efficient pressing. Built with robust materials for consistent and high-quality results.',
                link: 'product-pneumatic-press-1.html'
            },
            // Category: Khawa Machine
            {
                name: 'Khawa Machine',
                categorySlug: 'khawa-machine',
                categoryName: 'Khawa Machine',
                image: 'assets/images.png/khawa3.png',
                desc: 'Heavy-duty mawa and khoya making machines. Features spring-loaded Teflon scraper blades to prevent milk scorching and burning.',
                link: 'product-khoya-machine.html'
            },
            // Category: Packing Machine
            {
                name: 'Packing Machine',
                categorySlug: 'packing-machine',
                categoryName: 'Packing Machine',
                image: 'assets/images.png/Newmachine.png',
                desc: 'Automatic pouch packing systems. Delivers high-speed volumetric filling and reliable leak-proof sealing for milk, buttermilk, and curds.',
                link: 'product-portable-packing.html'
            },
            // Category: Milk Analyser
            {
                name: 'Milk Analyser (Multi Parameter)',
                categorySlug: 'milk-analyser',
                categoryName: 'Milk Analyser (AMCU)',
                image: 'assets/images.png/dyna-milk-analyzer.png',
                desc: 'Quick multi-parameter analyses of milk on fat (FAT), non-fat solids (SNF), proteins, lactose, water content %, temperature (°C), pH, freezing point, salts, conductivity and density (60 samples/hr).',
                link: 'product-milk-analyser.html'
            },
            {
                name: 'Data Processing Unit',
                categorySlug: 'milk-analyser',
                categoryName: 'Milk Analyser (AMCU)',
                image: 'assets/images.png/Data processing unit.png',
                desc: 'Centralized data collection for milk collection centers. Features massive data storage, dual display, and scale/analyzer sync.',
                link: 'product-data-processing-unit.html'
            },
            {
                name: 'RMRD Dock Electronic Weighing Scale',
                categorySlug: 'electrical-weighing-scale',
                categoryName: 'Electrical Weighing Scale',
                image: 'assets/images.png/photo22.png',
                desc: '500 LPH RMRD Raw Milk Reception Dock electronic scale with 500L SS304 weigh bowl, 50-1000g accuracy, RS232 PC interface & remote display.',
                link: 'product-weighing-digital.html'
            },
            {
                name: 'Electronic Platform Scale',
                categorySlug: 'electrical-weighing-scale',
                categoryName: 'Electrical Weighing Scale',
                image: 'assets/electronic.png',
                desc: 'Precision digital platform scales for accurate milk and material measurement at collection points.',
                link: 'product-platform-weighing-scale.html'
            },
            {
                name: 'Electronic Weighing Scale (300kg Capacity)',
                categorySlug: 'electrical-weighing-scale',
                categoryName: 'Electrical Weighing Scale',
                image: 'assets/images.png/Electronic weighing scale 300lit.png',
                desc: 'Heavy duty scales for bulk milk cans weighing. Features accurate load cells and a rugged platform.',
                link: 'product-electronic-weighing-scale.html'
            },

            // Category: Vacuum Packing Machine
            {
                name: 'Single Chamber Table Top Vacuum Packaging Machine',
                categorySlug: 'vacuum-packing-machine',
                categoryName: 'Vacuum Packing Machine',
                image: 'assets/images.png/vaccum2.png',
                desc: '12x12 inch single chamber 10-inch sealing tabletop vacuum packaging machine for 1-1.5kg paneer & mawa packages.',
                link: 'product-tabletop-vacuum.html'
            },
            {
                name: 'Double Chamber Vacuum Packaging Machine',
                categorySlug: 'vacuum-packing-machine',
                categoryName: 'Vacuum Packing Machine',
                image: 'assets/images.png/photo25.png',
                desc: 'Heavy duty SS304 500mm dual chamber vacuum packaging machine for high-speed continuous industrial packaging.',
                link: 'product-double-chamber.html'
            },
            // Category: Band Sealer Machine
            {
                name: 'Continuous Band Sealing Machine',
                categorySlug: 'band-sealer-machine',
                categoryName: 'Band Sealer Machine',
                image: 'assets/images.png/continuous-band-sealing-machine.png',
                desc: 'Horizontal continuous heat sealing machine with conveyor belt. Features adjustable sealing speed, adjustable temperature range & mild steel powder coated body for sealing laminated pouches, plastic bags & foil packets.',
                link: 'sealing-machine.html'
            },
            // Category: Paste Filler Machine
            {
                name: 'Paste Filler Machine',
                categorySlug: 'paste-filler-machine',
                categoryName: 'Paste Filler Machine',
                image: 'assets/images.png/photo34.png',
                desc: 'Semi-automatic piston filler for high-viscosity products. Delivers accurate fills for curd, cream, paste, ghee, and dairy sweets.',
                link: 'product-liquid-auto.html'
            },
            // Category: Milk Can (Sub-products separate cards)
            {
                name: 'Stainless Steel Milk Can',
                categorySlug: 'bulk-milk-cooler',
                categoryName: 'Bulk Milk Coolers',
                image: 'assets/images.png/Stainless-steel-304-20-ltr-40-ltr.jpeg',
                desc: 'Premium SS 304 food-grade milk storage and transport cans. Durable, hygienic, and easy to clean with tight-fitting lids for secure transit.',
                link: 'product-milk-can-ss.html'
            },
            {
                name: 'Aluminium Milk Can',
                categorySlug: 'bulk-milk-cooler',
                categoryName: 'Bulk Milk Coolers',
                image: 'assets/images.png/can1.png',
                desc: 'Lightweight, sturdy aluminium milk cans ideal for daily dairy farm collection. Features reinforced bottom and strong handles.',
                link: 'product-aluminium-cans.html'
            },
            // Category: Milking Parlour System (Mapping Milking Parlour System to slug milk-parlour-system)
            {
                name: 'Milking Parlour System',
                categorySlug: 'milking-parlour-system',
                categoryName: 'Milking Parlour System',
                image: 'assets/images.png/milkpoluar.png',
                desc: 'Turnkey Herringbone and parallel milking parlour layouts. Engineered with automatic vacuum milking clusters for large-scale dairies.',
                link: 'product-milking-parlour.html'
            },
            // Category: Soya Milk Plant
            {
                name: 'Soya Milk Production Line',
                categorySlug: 'soya-milk-plant',
                categoryName: 'Soya Milk Plant',
                image: 'assets/images.png/photo11.png',
                desc: 'Complete machinery setup for extraction, filtration, homogenization, cooking, and pouch filling of high protein soya milk.',
                link: 'product-soya-milk.html'
            },
            {
                name: 'Soya Paneer Making Machine',
                categorySlug: 'soya-milk-plant',
                categoryName: 'Soya Milk Plant',
                image: 'assets/images.png/photo23.png',
                desc: '200/300/500 LPH heavy duty SS304 Soya Paneer & Tofu making machine with zero beany-odor removal technology.',
                link: 'product-soya-paneer.html'
            },
            // Category: Cheese Processing Plant
            {
                name: 'Cheese Production Line',
                categorySlug: 'cheese-processing-plant',
                categoryName: 'Cheese Processing Plant',
                image: 'assets/images.png/Cheese-Production-Line.png',
                desc: 'Compact cheese processing plant manufactured with SS304/SS316 food-grade material. Equipped with curd cutter, 2-arm hot water stretcher (250 kg/hr), and twin auger moulding unit.',
                link: 'product-cheese-production.html'
            },
            {
                name: 'Cheese Vat Tank',
                categorySlug: 'cheese-processing-plant',
                categoryName: 'Cheese Processing Plant',
                image: 'assets/images.png/Cheese-Vat-Tank.png',
                desc: 'Industrial round triple-wall SS-304 cheese heating vat tank with 50mm glass wool insulation, top-mounted 1 HP agitator, and 51mm hygienic butterfly outlet valve.',
                link: 'product-cheese-vat.html'
            },
            // Category: Shrikhand & Sweet Machine
            {
                name: 'Shrikhand Blender',
                categorySlug: 'shrikhand-sweet-machine',
                categoryName: 'Shrikhand & Sweet Machine',
                image: 'assets/images.png/Shrikhand-Blender.png',
                desc: '10 Kg/batch capacity planetary Shrikhand blender. Built with SS 304 food-grade body and 1 HP electric motor for smooth and uniform blending of hung curd/chakka.',
                link: 'product-shrikhand-blender.html'
            },
            {
                name: 'Chakka Shredding Machine',
                categorySlug: 'shrikhand-sweet-machine',
                categoryName: 'Shrikhand & Sweet Machine',
                image: 'assets/images.png/Chakka-Shredding-Machine.png',
                desc: '10 Kg/hour output capacity Chakka shredding machine. Constructed from SS 304 with 1 HP electric motor for efficient shredding and lump removal of strained curd.',
                link: 'product-chakka-shredder.html'
            },
            {
                name: 'Manual Cup Sealer Machine',
                categorySlug: 'band-sealer-machine',
                categoryName: 'Band Sealer Machine',
                image: 'assets/images.png/Manual-Cup-Sealer.png',
                desc: 'Desktop manual cup sealing machine (70mm, 75mm, 90mm & 95mm sealing diameters). High output capacity of 500-600 cups/hr for beverages, curds, and takeaway items.',
                link: 'product-manual-cup-sealer.html'
            },
            {
                name: 'Curd Incubation Chamber (WI-1200)',
                categorySlug: 'dairy-plant',
                categoryName: 'Dairy Plant',
                image: 'assets/images.png/Curd-Incubation-Chamber.png',
                desc: '1250 Ltr/batch walk-in combo curd incubation chamber with integrated heating (32°C to 45°C) and blast cooling (-5°C to 8°C) for commercial dahi processing.',
                link: 'product-curd-incubation.html'
            },
            // Category: Milk Boiler
            {
                name: 'SS Milk Boiler (Capacity: 100Lit)',
                categorySlug: 'milk-boiler',
                categoryName: 'Milk Boiler',
                image: 'assets/images.png/photo.png',
                desc: '100 Liters commercial food-grade SS 304 electric milk boiler with intuitive control panel, quick heating elements, and energy efficient performance.',
                link: 'product-boiler-electric.html'
            },
            // Category: Steam Boiler
            {
                name: 'Solid Fuel Steam Boiler',
                categorySlug: 'steam-boiler',
                categoryName: 'Steam Boiler',
                image: 'assets/images.png/Gheeplant-2.png',
                desc: 'High efficiency wood and coal fired steam boiler for industrial dairy and ghee heating applications.',
                link: 'product-steam-boiler-solid.html'
            },
            // Category: Khawa Machine
            {
                name: 'Khowa Or Ghee Making Machine',
                categorySlug: 'khawa-machine',
                categoryName: 'Khawa Machine',
                image: 'assets/images.png/photo12.png',
                desc: '60/120/180 Ltr commercial food grade SS304 automatic Khoya/Mawa & Ghee making machine with motor scraper and dual gas burners.',
                link: 'product-khowa-machine.html'
            },
            // Category: Dairy Plant
            {
                name: 'ALFA TECH INDIA Online Milk Pasteurizer 500 LPH',
                categorySlug: 'dairy-plant',
                categoryName: 'Dairy Plant',
                image: 'assets/images.png/photo15.png',
                desc: '500 LPH skid-mounted automatic SS304 plate milk pasteurizer plant with holding tube, 50L balance tank, digital control panel, and 1 HP Crompton pumps.',
                link: 'product-pasteurizer-500lph.html'
            },
            // Category: Milking Machines
            {
                name: 'Alfa Tech Single Bucket Milking Machine',
                categorySlug: 'milking-parlour-system',
                categoryName: 'Milking Machine',
                image: 'assets/images.png/photo19.png',
                desc: 'Single bucket 20L SS milking machine with 300 LPM dry vacuum pump, pulsator assembly, pressure gauge, and optional 1.5HP Honda Engine.',
                link: 'product-single-bucket.html'
            },
            {
                name: 'Alfa Tech Trolly Milking Machine',
                categorySlug: 'milking-parlour-system',
                categoryName: 'Milking Machine',
                image: 'assets/images.png/photo20.png',
                desc: 'Mobile 25L SS single bucket trolley milking machine with 1HP motor, 200 LPM vacuum pump, 20ft hose, works on electricity & inverter.',
                link: 'product-trolly-milking.html'
            },
            // Category: Pouch Packing Machine
            {
                name: 'Semi-Automatic Pouch Packing Machine',
                categorySlug: 'pouch-packing-machine',
                categoryName: 'Pouch Packing Machine',
                image: 'assets/images.png/photo21.png',
                desc: '220V electric SS semi-automatic pouch packing machine with AC frequency speed control for moisture-proof liquid & paste packaging.',
                link: 'product-pouch-semi.html'
            }
        ];

        // 1. POPULATE SIDEBAR CATEGORY LIST & COUNTS
        const categorySidebarList = document.getElementById('categorySidebarList');
        const activeCategoryTitle = document.getElementById('activeCategoryTitle');
        const visibleProductCount = document.getElementById('visibleProductCount');

        const categoryCounts = {};
        products.forEach(p => {
            categoryCounts[p.categorySlug] = (categoryCounts[p.categorySlug] || 0) + 1;
        });

        if (categorySidebarList) {
            let sidebarHtml = `
                <div class="sidebar-category-wrapper mb-2 border-bottom pb-2">
                    <div class="sidebar-category-item active d-flex align-items-center justify-content-between p-3 cursor-pointer" data-filter="all">
                        <span class="fw-bold">All Products</span>
                        <span class="badge rounded-pill bg-white text-navy shadow-sm px-2 py-1">${products.length}</span>
                    </div>
                </div>
            `;
            categories.forEach(cat => {
                const count = categoryCounts[cat.slug] || 0;
                
                const catProducts = products.filter(p => p.categorySlug === cat.slug);
                let subProductsHtml = '';
                let chevronHtml = '';
                
                if (catProducts.length > 0) {
                    chevronHtml = '<i class="fas fa-chevron-down ms-2 text-muted accordion-icon" style="font-size: 0.8rem; transition: transform 0.3s;"></i>';
                    subProductsHtml = '<div class="sidebar-subproducts ps-4 pe-2 pb-2" style="display: none;">';
                    catProducts.forEach(p => {
                        subProductsHtml += `<a href="${p.link}" class="d-block py-1 text-decoration-none" style="font-size: 0.85rem; color: #475569;">- ${p.name}</a>`;
                    });
                    subProductsHtml += '</div>';
                }

                sidebarHtml += `
                    <div class="sidebar-category-wrapper mb-2 border-bottom pb-2">
                        <div class="sidebar-category-item d-flex align-items-center justify-content-between p-3 cursor-pointer" data-filter="${cat.slug}">
                            <span class="fw-semibold">${cat.name}</span>
                            <div class="d-flex align-items-center">
                                <span class="badge rounded-pill bg-light-soft text-muted border px-2 py-1">${count}</span>
                                ${chevronHtml}
                            </div>
                        </div>
                        ${subProductsHtml}
                    </div>
                `;
            });
            categorySidebarList.innerHTML = sidebarHtml;
        }

        // 1B. POPULATE MOBILE AUTO-SCROLL SLIDER & TOUCH DRAG
        const mobileMarqueeContent = document.getElementById('mobileMarqueeContent');
        const mobileSliderTrack = document.getElementById('mobileSliderTrack');

        if (mobileMarqueeContent && mobileSliderTrack) {
            const createMarqueePill = (name, slug, count, isActive) => `
                <div class="mobile-marquee-pill ${isActive ? 'active' : ''}" data-filter="${slug}">
                    <span>${name}</span>
                    <span class="badge rounded-pill px-2 py-1">${count}</span>
                </div>
            `;

            let html = createMarqueePill('All Products', 'all', products.length, true);
            categories.forEach(cat => {
                const count = categoryCounts[cat.slug] || 0;
                html += createMarqueePill(cat.name, cat.slug, count, false);
            });

            // Duplicate list for endless scroll loop
            mobileMarqueeContent.innerHTML = html + html;

            // Auto-scroll + Touch Drag Logic
            let autoScrollSpeed = 0.6;
            let isUserInteracting = false;
            let resumeTimeout = null;

            function autoScroll() {
                if (!isUserInteracting && mobileSliderTrack) {
                    mobileSliderTrack.scrollLeft += autoScrollSpeed;
                    if (mobileSliderTrack.scrollLeft >= (mobileSliderTrack.scrollWidth / 2)) {
                        mobileSliderTrack.scrollLeft = 0;
                    }
                }
                requestAnimationFrame(autoScroll);
            }

            const pauseAutoScroll = () => {
                isUserInteracting = true;
                if (resumeTimeout) clearTimeout(resumeTimeout);
                resumeTimeout = setTimeout(() => {
                    isUserInteracting = false;
                }, 2500);
            };

            mobileSliderTrack.addEventListener('touchstart', pauseAutoScroll, { passive: true });
            mobileSliderTrack.addEventListener('touchmove', pauseAutoScroll, { passive: true });
            mobileSliderTrack.addEventListener('mousedown', pauseAutoScroll);
            mobileSliderTrack.addEventListener('scroll', pauseAutoScroll, { passive: true });

            requestAnimationFrame(autoScroll);
        }

        if (filterGrid) {
            let filterHtml = '<div class="category-tabs-wrapper">';
            filterHtml += `<div class="category-tab-item active" data-filter="all">All Products</div>`;
            categories.forEach(cat => {
                filterHtml += `<div class="category-tab-item" data-filter="${cat.slug}">${cat.name}</div>`;
            });
            filterHtml += '</div>';

            filterGrid.innerHTML = filterHtml;
        }

        // 2. RENDER PRODUCTS GRID CARDS (SI-TECH Catalog Design)
        function renderGrid(filterSlug = 'all', searchQuery = '') {
            if (!gridContainer) return;

            let gridHtml = '';
            
            // Synonyms & key terms expansion map
            let expandedQuery = searchQuery.toLowerCase().trim()
                .replace(/\bkhoya\b/g, 'khawa mawa')
                .replace(/\bmawa\b/g, 'khawa khoya')
                .replace(/\btofu\b/g, 'paneer soya')
                .replace(/\bscale\b/g, 'weighing scale')
                .replace(/\bbmc\b/g, 'bulk milk cooler')
                .replace(/\bpasteuriser\b/g, 'pasteurizer');

            const tokens = expandedQuery.split(/\s+/).filter(t => t.length > 0);

            // Filter products by category AND search query
            const filteredProducts = products.filter(prod => {
                const matchesCategory = filterSlug === 'all' || prod.categorySlug === filterSlug;
                if (!matchesCategory) return false;

                if (tokens.length === 0) return true;

                const textToSearch = `${prod.name} ${prod.categoryName || ''} ${prod.desc || ''} ${prod.link || ''}`.toLowerCase();
                return tokens.every(token => textToSearch.includes(token));
            });

            // Update active header title and visible product count
            if (activeCategoryTitle) {
                const currentCat = categories.find(c => c.slug === filterSlug);
                activeCategoryTitle.textContent = filterSlug === 'all' ? 'All Products' : (currentCat ? currentCat.name : filterSlug);
            }
            if (visibleProductCount) {
                visibleProductCount.textContent = filteredProducts.length;
            }

            if (filteredProducts.length === 0) {
                gridHtml = `
                    <div class="col-12 text-center py-5">
                        <i class="fas fa-search-minus mb-3" style="font-size: 3rem; color: #cbd5e1;"></i>
                        <h3 style="color: #5a6e7c;">No machines found matching your search.</h3>
                    </div>`;
                gridContainer.innerHTML = gridHtml;
                return;
            }

            filteredProducts.forEach((prod, index) => {
                // Check if the product has sub-products (for Milk Processing Plant)
                const hasSubs = prod.subProducts && prod.subProducts.length > 0;
                let subHtml = '';
                let expandBtnHtml = '';

                if (hasSubs) {
                    const collapseId = `expand-${index}-${prod.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
                    expandBtnHtml = `
                        <button class="product-expand-btn mt-2 mb-2 btn btn-outline-secondary btn-sm rounded-pill" data-target="${collapseId}">
                            Includes 2 Components <i class="fas fa-chevron-down ms-1"></i>
                        </button>
                    `;
                    subHtml = `
                        <div class="product-sub-list d-none mb-3 p-3 bg-light rounded-3 border" id="${collapseId}">
                            ${prod.subProducts.map(sub => `
                                <div class="product-sub-item mb-2 pb-2 border-bottom">
                                    <strong style="color: #1e40af;">${sub.name}</strong>
                                    <p class="m-0 text-muted small">${sub.desc}</p>
                                </div>
                            `).join('')}
                        </div>
                    `;
                }

                const isFullCover = ['newplant1.png', 'newplant2.png', 'newpaneeer1.png'].some(name => prod.image.toLowerCase().endsWith(name));
                const imgPadding = isFullCover ? 'p-0' : 'p-2.5';
                const imgFitStyle = isFullCover ? 'object-fit: cover; width: 100%; height: 100%; max-height: 240px;' : 'object-fit: contain; width: 100%; height: 100%; max-height: 215px;';

                gridHtml += `
                    <div class="col grid-item-animate">
                        <div class="si-product-card h-100 bg-white rounded-4 overflow-hidden border shadow-sm transition-all position-relative d-flex flex-column">
                            <span class="si-card-badge position-absolute top-0 start-0 m-3 px-3 py-1 bg-white rounded-pill shadow-sm border" style="z-index: 2; font-size: 0.76rem; color: #0d3b66; font-weight: 700;">
                                ${prod.categoryName}
                            </span>
                            <a href="${prod.link}" class="si-card-img-wrapper d-flex align-items-center justify-content-center overflow-hidden position-relative w-100 text-decoration-none ${imgPadding}" style="height: 240px; background: #f8fafc; cursor: pointer;">
                                <img src="${prod.image}" alt="${prod.name}" class="img-fluid" style="${imgFitStyle} display: block; margin: auto; transition: transform 0.35s ease;" onerror="this.onerror=null; this.src='assets/images.png/Newplant1.png';">
                            </a>
                            <div class="si-card-body p-3.5 p-md-4 d-flex flex-column flex-grow-1 justify-content-between">
                                <h3 class="si-card-title fw-bold text-navy mb-3" style="font-size: 1.12rem; color: #0d3b66; line-height: 1.35; min-height: 2.8rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                                    <a href="${prod.link}" class="text-decoration-none" style="color: #0d3b66;">${prod.name}</a>
                                </h3>
                                <div class="mt-auto d-flex align-items-center justify-content-between">
                                    <a href="${prod.link}" class="btn btn-primary rounded-pill px-4 py-2 fw-bold text-white btn-sm shadow-sm" style="background: linear-gradient(135deg, #1e40af, #2563eb); border: none; font-size: 0.85rem;">
                                        View Details <i class="fas fa-arrow-right ms-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>`;
            });

            gridContainer.innerHTML = gridHtml;
        }

        // 3. ATTACH FILTER CLICK LISTENERS (Sidebar + Tabs + Mobile Marquee)
        document.addEventListener('click', function(e) {
            const sidebarItem = e.target.closest('.sidebar-category-item');
            const tabItem = e.target.closest('.category-tab-item');
            const marqueePill = e.target.closest('.mobile-marquee-pill');
            const targetItem = sidebarItem || tabItem || marqueePill;

            if (targetItem) {
                // Accordion logic for sidebar
                if (sidebarItem) {
                    const wrapper = sidebarItem.closest('.sidebar-category-wrapper');
                    if (wrapper) {
                        const subMenu = wrapper.querySelector('.sidebar-subproducts');
                        const icon = wrapper.querySelector('.accordion-icon');
                        if (subMenu) {
                            const isExpanded = subMenu.style.display === 'block';
                            
                            // Close all submenus
                            document.querySelectorAll('.sidebar-subproducts').forEach(sm => sm.style.display = 'none');
                            document.querySelectorAll('.accordion-icon').forEach(i => i.style.transform = 'rotate(0deg)');
                            
                            if (!isExpanded) {
                                subMenu.style.display = 'block';
                                if (icon) icon.style.transform = 'rotate(180deg)';
                            }
                        }
                    }
                }

                const filterSlug = targetItem.getAttribute('data-filter');

                // Update active state in mobile marquee pills
                document.querySelectorAll('.mobile-marquee-pill').forEach(pill => {
                    const isActive = pill.getAttribute('data-filter') === filterSlug;
                    pill.classList.toggle('active', isActive);
                });

                // Update active state in sidebar
                document.querySelectorAll('.sidebar-category-item').forEach(item => {
                    const isActive = item.getAttribute('data-filter') === filterSlug;
                    item.classList.toggle('active', isActive);
                    const badge = item.querySelector('.badge');
                    if (badge) {
                        if (isActive) {
                            badge.className = 'badge rounded-pill bg-white text-navy shadow-sm px-2 py-1';
                        } else {
                            badge.className = 'badge rounded-pill bg-light-soft text-muted border px-2 py-1';
                        }
                    }
                });

                // Update active state in tabs
                document.querySelectorAll('.category-tab-item').forEach(tab => {
                    tab.classList.toggle('active', tab.getAttribute('data-filter') === filterSlug);
                });

                const searchInput = document.getElementById('productSearchInput');
                const searchQuery = searchInput ? searchInput.value : '';
                renderGrid(filterSlug, searchQuery);

                // Auto collapse mobile sidebar after selection on small screens
                const mobileSidebar = document.getElementById('mobileCategorySidebar');
                if (mobileSidebar && window.innerWidth < 768 && mobileSidebar.classList.contains('show')) {
                    if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
                        const bsCollapse = bootstrap.Collapse.getInstance(mobileSidebar) || new bootstrap.Collapse(mobileSidebar);
                        bsCollapse.hide();
                    }
                }

                // Scroll slightly up to show the products
                const gridSection = document.getElementById('productsGrid');
                if (gridSection) {
                    const offset = 120; // Offset for sticky headers
                    const topPos = gridSection.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({
                        top: topPos,
                        behavior: 'smooth'
                    });
                }
            }
        });

        // 3B. ATTACH SEARCH INPUT LISTENERS
        const searchInput = document.getElementById('productSearchInput');
        const clearBtn = document.getElementById('clearSearch');

        if (searchInput) {
            const handleSearch = function() {
                const query = searchInput.value;
                if (clearBtn) clearBtn.style.display = query.trim().length > 0 ? 'block' : 'none';

                const activeSidebar = document.querySelector('.sidebar-category-item.active');
                const activeTab = document.querySelector('.category-tab-item.active');
                const activeEl = activeSidebar || activeTab;
                const filterSlug = activeEl ? activeEl.getAttribute('data-filter') : 'all';
                renderGrid(filterSlug, query);
            };

            searchInput.addEventListener('input', handleSearch);

            if (clearBtn) {
                clearBtn.addEventListener('click', function() {
                    searchInput.value = '';
                    handleSearch();
                });
            }
        }

        // 4. ATTACH ACCORDION/EXPANDABLE CLICK DELEGATION
        if (gridContainer) {
            gridContainer.addEventListener('click', function(e) {
                const expandBtn = e.target.closest('.product-expand-btn');
                if (expandBtn) {
                    e.preventDefault();
                    const targetId = expandBtn.getAttribute('data-target');
                    const targetEl = document.getElementById(targetId);
                    if (targetEl) {
                        const isHidden = targetEl.classList.contains('d-none');
                        if (isHidden) {
                            targetEl.classList.remove('d-none');
                            expandBtn.innerHTML = `Hide Components <i class="fas fa-chevron-up ms-1"></i>`;
                        } else {
                            targetEl.classList.add('d-none');
                            expandBtn.innerHTML = `Includes 2 Components <i class="fas fa-chevron-down ms-1"></i>`;
                        }
                    }
                }
            });
        }

        // 5. INITIAL RENDER
        renderGrid('all');

        // 6. HANDLE BACK TO TOP BUTTON
        if (backToTopBtn) {
            window.addEventListener('scroll', () => {
                backToTopBtn.classList.toggle('show', window.scrollY > 300);
            });
            backToTopBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // 7. HANDLE URL FILTER PARAMETERS (e.g. products.html?filter=dairy-plant)
        const urlParams = new URLSearchParams(window.location.search);
        const filterParam = urlParams.get('filter');
        if (filterParam) {
            const targetBtn = document.querySelector(`.sidebar-category-item[data-filter="${filterParam}"]`) || 
                              document.querySelector(`.mobile-marquee-pill[data-filter="${filterParam}"]`);
            if (targetBtn) {
                targetBtn.click();
            }
        }

        // 8. AOS INIT (if AOS is active on page)
        if (typeof AOS !== 'undefined') {
            AOS.init({ duration: 600, once: true, offset: 100 });
        }

        console.log('Industrial products grid loaded successfully');
    });
})();
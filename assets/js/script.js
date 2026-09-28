/**
 * script.js - Complete JavaScript for Alfa Tech India
 * Includes: Component Loader, Back to Top, Navigation, Animations, Counters, Product Slider, etc.
 * FIXED: Mobile Hamburger Menu (Three Lines) Working Properly
 */

// Global product data for all pages
const categoriesWithProducts = [
    {
        id: 1,
        name: 'Milking Machines',
        products: [
            { name: 'Double Bucket Milking Machine without Engine', price: '₹ 69,000', image: 'assets/images.png/doublebucket1.png', link: 'product-double-bucket.html' },
            { name: 'Alfa Tech India Single Bucket Fixed machine', price: '₹ 35,000', image: 'assets/images.png/photo19.png', link: 'product-single-bucket.html' },
            { name: 'Portable Single Bucket Milking Machine', price: 'Inquiry', image: 'assets/images.png/Portable Single Bucket Milking Machine.jpeg', link: 'product-portable-single-bucket.html' },
            { name: 'Alfa Tech India Double Bucket Milking Machine with Engine', price: '₹ 69,000', image: 'assets/images.png/photo18.png', link: 'product-double-bucket-engine.html' },
            { name: 'Alfa Tech Trolly Milking Machine', price: '₹ 33,000', image: 'assets/images.png/photo20.png', link: 'product-trolly-milking.html' },
            { name: 'Milking Machine Four Bucket', price: 'Inquiry', image: 'assets/images.png/four2.png', link: 'product-four-bucket.html' },
            { name: 'Transparent Milking Machine Claw (350cc)', price: '₹ 1,800', image: 'assets/images.png/photo0011.png', link: 'product-milking-claw.html' },
            { name: 'Pneumatic Milking Pulsator (60/40 Ratio)', price: '₹ 2,500', image: 'assets/images.png/photo0022.png', link: 'product-milking-pulsator.html' },
            { name: 'Milking Machine Parts', price: '₹ 1,200', image: 'assets/images.png/machinepart2.png', link: 'product-milking-parts.html' }
        ]
    },
    {
        id: 2,
        name: 'Automatic Milk Unit',
        products: [
            { name: 'Essae Milk Analyzer (MA-825)', price: 'Inquiry', image: 'assets/images.png/Essae-milk-analyzer.png', link: 'product-milk-analyser.html' },
            { name: 'Electronic Weighing Scale (300 Litre)', price: 'Inquiry', image: 'assets/images.png/Electronic weighing scale 300lit.png', link: 'product-weighing-digital.html' },
            { name: 'Ultrasonic Milk Vibrator', price: 'Inquiry', image: 'assets/images.png/Ultrasonic milk Vibrator.png', link: 'product-ultrasonic-analyzer.html' },
            { name: 'Data Processing Unit (for Milk Collection)', price: 'Inquiry', image: 'assets/images.png/Data processing unit.png', link: 'product-amc-system.html' }
        ]
    },
    {
        id: 3,
        name: 'Cream Separators',
        products: [
            { name: '1000LIT Online Cream Separator', price: 'Inquiry', image: 'assets/images.png/Online-Cream-Separator-1000LPH.png', link: 'product-cream-separator.html' },
            { name: 'Cream Separator Online (Model AEO-1)', price: 'Inquiry', image: 'assets/images.png/Online-Milk-Separator-SS.png', link: 'product-cream-separator-standard.html' },
            { name: 'Cream separator 300 lph', price: 'Inquiry', image: 'assets/images.png/NewCream1.png', link: 'product-cream.html' },
            { name: 'Cream separator 75 lph', price: 'Inquiry', image: 'assets/images.png/Newcrem3.png', link: 'product-alfa-cream.html' }
        ]
    },
    {
        id: 4,
        name: 'Khoya / Mawa Machines',
        products: [
            { name: 'Alfa Digital Weighing Khawa Machine', price: '₹ 1,25,000', image: 'assets/images.png/khawa3.png', link: 'product-khoya-machine.html' },
            { name: 'Khowa Or Ghee Making Machine', price: '₹ 64,000', image: 'assets/images.png/photo12.png', link: 'product-khowa-machine.html' },
            { name: 'Fully Automatic Ghee Making Plant (500 LPD)', price: 'Inquiry', image: 'assets/images.png/Ghee-Plant-Layout-500LPD.png', link: 'product-ghee-plant.html' },
            { name: 'Alfa Tech Mawa Making Machine', price: '₹ 65,000', image: 'assets/images.png/mawa1.png', link: 'product-mawa-machine.html' },
            { name: 'Alfa Tech India Portable Packing Machine', price: 'Inquiry', image: 'assets/images.png/khoya4.png', link: 'product-portable-packing.html' },
            { name: 'Multipurpose Khowa Machine', price: 'Inquiry', image: 'assets/images.png/new7.png', link: 'product-multipurpose-khowa.html' },
            { name: 'Induction Khawa Machine', price: 'Inquiry', image: 'assets/images.png/new2.png', link: 'product-induction-khowa.html' },
            { name: 'Diesel Khawa Machine', price: 'Inquiry', image: 'assets/images.png/Disel khawa machine1.png', link: 'product-diesel-khoya.html' },
            { name: 'Gear Box Tilting Khawa Machine', price: 'Inquiry', image: 'assets/images.png/Gear box tilting model.png', link: 'product-gearbox-khoya.html' }
        ]
    },
    {
        id: 5,
        name: 'Paneer Press',
        products: [
            { name: 'Four Head Pneumatic Paneer Press', price: 'Inquiry', image: 'assets/images.png/FOUR HRAD PNEUMATIC PANEER CUTTER.png', link: 'product-four-head-pneumatic-paneer-press.html' },
            { name: 'Paneer Making Machine', price: '₹ 4,50,000', image: 'assets/images.png/paneer2.png', link: 'product-paneer-machine.html' },
            { name: 'Manual Paneer Cutter', price: '₹ 35,000', image: 'assets/images.png/cutter2.png', link: 'product-paneer-wire-cutter.html' },
            { name: 'Alfa Tech India Manual Paneer cutter', price: '₹ 20,000', image: 'assets/images.png/cutter5.png', link: 'product-manual-cutter.html' },
            { name: 'Alfa Tech India Paneer Press', price: '₹ 14,000', image: 'assets/images.png/press1.png', link: 'product-paneer-press.html' },
            { name: 'Pneumatic Paneer Press', price: 'Inquiry', image: 'assets/images.png/paneerpres.png', link: 'product-pneumatic-press.html' }
        ]
    },
    {
        id: 12,
        name: 'Cup Filling Machine',
        products: [
            { name: 'Manual Cup Sealer Machine', price: 'Inquiry', image: 'assets/images.png/Manual-Cup-Sealer.png', link: 'product-manual-cup-sealer.html' },
            { name: 'Cup Filling & Sealing Machine', price: 'Inquiry', image: 'assets/images.png/cup.png', link: 'product-cup-filling.html' },
            { name: 'Rotary Cup Sealing Machine', price: 'Inquiry', image: 'assets/images.png/new6.png', link: 'product-rotary-cup-sealing.html' }
        ]
    },
    {
        id: 33,
        name: 'Milk Cans',
        products: [
            { name: 'Stainless Steel Milk Can', price: '₹ 4,500', image: 'assets/images.png/Stainless-steel-304-20-ltr-40-ltr.jpeg', link: 'product-milk-can-ss.html' },
            { name: 'Aluminium Milk Can (20L / 40L)', price: '₹ 3,900', image: 'assets/images.png/Aluminium-Can-20-ltr-40-ltr.png', link: 'product-milk-can-al.html' }
        ]
    },
    {
        id: 16,
        name: 'Milk Boiler',
        products: [
            { name: 'SS Milk Boiler (Capacity: 100Lit)', price: 'Inquiry', image: 'assets/images.png/photo.png', link: 'product-boiler-electric.html' }
        ]
    },
    {
        id: 9,
        name: 'Sealing Machine',
        products: [
            { name: 'Manual Sealing Machine', price: 'Inquiry', image: 'assets/images.png/sealing.png', link: 'product-sealing-manual.html' },
            { name: 'Automatic Sealing Machine', price: 'Inquiry', image: 'assets/images.png/sealingcup.png', link: 'product-sealing-auto.html' }
        ]
    },
    {
        id: 11,
        name: 'Pouch Packing Machine',
        products: [
            { name: 'Automatic Pouch Packing Machine', price: 'Inquiry', image: 'assets/punch.png', link: 'product-pouch-auto.html' },
            { name: 'Semi-Automatic Pouch Packing Machine', price: 'Inquiry', image: 'assets/images.png/vaccum2.png', link: 'product-pouch-semi.html' }
        ]
    },
    {
        id: 6,
        name: 'Bulk Milk Coolers',
        products: [
            { name: 'Alfa Tech Bulk Milk Cooler', price: '₹ 2,50,000', image: 'assets/images.png/Bulk-milk-0coolers1.png', link: 'product-bulk-cooler.html' }
        ]
    },
    {
        id: 10,
        name: 'Electronic Weighing Scales',
        products: [
            { name: 'Digital Weighing Scale', price: 'Inquiry', image: 'assets/electronic.png', link: 'product-weighing-digital.html' }
        ]
    },
    {
        id: 13,
        name: 'Milking Parlour',
        products: [
            { name: 'Complete Milking Parlour Setup', price: 'Inquiry', image: 'assets/images.png/milkpoluar.png', link: 'product-milking-parlour.html' }
        ]
    },
    {
        id: 15,
        name: 'Soya Milk Making Machine',
        products: [
            { name: 'Soya Milk Production Line', price: 'Inquiry', image: 'assets/images.png/photo11.png', link: 'product-soya-milk.html' }
        ]
    },
    {
        id: 17,
        name: 'Sweet Making Machine',
        products: [
            { name: 'Automatic Sweet Making Machine', price: 'Inquiry', image: 'assets/images.png/khawa3.png', link: 'product-sweet-auto.html' }
        ]
    },
    {
        id: 18,
            name: 'Liquid Filling Machine',
        products: [
            { name: 'Automatic Liquid Filling Machine', price: 'Inquiry', image: 'assets/images.png/photo34.png', link: 'product-liquid-auto.html' }
        ]
    },
    {
        id: 19,
        name: 'Pneumatic Paneer Cutter',
        products: [
            { name: 'Pneumatic Operated Paneer Cutter', price: 'Inquiry', image: 'assets/images.png/cutter2.png', link: 'product-pneumatic-cutter.html' }
        ]
    },
    {
        id: 21,
        name: 'CIP System',
        products: [
            { name: 'Clean In Place System', price: 'Inquiry', image: 'assets/images.png/cip.png', link: 'product-cip-system.html' }
        ]
    },
    {
        id: 23,
        name: 'Storage Tank',
        products: [
            { name: 'SS Storage Tank', price: 'Inquiry', image: 'assets/images.png/coolere1.png', link: 'product-tank-ss.html' }
        ]
    },
    {
        id: 25,
        name: 'Milk Pump',
        products: [
            { name: 'Centrifugal Milk Pump', price: 'Inquiry', image: 'assets/images.png/milkpump.png', link: 'product-pump-centrifugal.html' }
        ]
    },
    {
        id: 26,
        name: 'Paneer Chilling System',
        products: [
            { name: 'Paneer Quick Chilling System', price: 'Inquiry', image: 'assets/images.png/chilling.png', link: 'product-chilling.html' }
        ]
    },
    {
        id: 27,
        name: 'Pneumatic Paneer Press',
        products: [
            { name: 'Pneumatic Paneer Press', price: 'Inquiry', image: 'assets/images.png/new5.png', link: 'product-Pneumatic-Paneer-Press.html' }
        ]
    },
    {
        id: 28,
        name: 'New Items',
        products: [
            { name: 'Latest Dairy Equipment', price: 'Inquiry', image: 'assets/images.png/new.png', link: 'product-new-machine.html' }
        ]
    },
    {
        id: 29,
        name: 'Multiy purposes Khwa machine',
        products: [
            { name: 'Multiy purposes Khwa machine', price: 'Inquiry', image: 'assets/images.png/new7.png', link: 'product-multipurpose-khowa.html' }
        ]
    },
    {
        id: 30,
        name: 'Ice Cream Equipment',
        products: [
            { name: 'Ice Cream Aging Freezer', price: 'Inquiry', image: 'assets/images.png/new8.png', link: 'product-ice-cream-frizzer.html' }
        ]
    },
    {
        id: 31,
        name: 'Australia Site Plant',
        products: [
            { name: 'Plant Machine Orgnization', price: 'Inquiry', image: 'assets/images.png/Newplant.png', link: 'product-plant.html' }
        ]
    },
    {
        id: 32,
        name: 'Steam Boiler',
        products: [
            { name: 'Fully Automatic Ghee Making Plant (500 LPD)', price: 'Inquiry', image: 'assets/images.png/Ghee-Plant-Layout-500LPD.png', link: 'product-ghee-plant.html' }
        ]
    },
    {
        id: 34,
        name: 'Cheese Making Equipment',
        products: [
            { name: 'Cheese Production Line', price: 'Inquiry', image: 'assets/images.png/Cheese-Production-Line.png', link: 'product-cheese-production.html' },
            { name: 'Cheese Vat Tank', price: 'Inquiry', image: 'assets/images.png/Cheese-Vat-Tank.png', link: 'product-cheese-vat.html' }
        ]
    },
    {
        id: 35,
        name: 'Shrikhand & Chakka Making Machine',
        products: [
            { name: 'Shrikhand Blender', price: 'Inquiry', image: 'assets/images.png/Shrikhand-Blender.png', link: 'product-shrikhand-blender.html' },
            { name: 'Chakka Shredding Machine', price: 'Inquiry', image: 'assets/images.png/Chakka-Shredding-Machine.png', link: 'product-chakka-shredder.html' }
        ]
    },
    {
        id: 36,
        name: 'Curd Incubation & Processing',
        products: [
            { name: 'Curd Incubation Chamber (WI-1200)', price: 'Inquiry', image: 'assets/images.png/Curd-Incubation-Chamber.png', link: 'product-curd-incubation.html' }
        ]
    }
];

const SHARED_HEADER_HTML = `
<div class="top-header-section">
    <div class="container">
        <div class="header-container">
            <div class="logo-area">
                <img src="assets/images.png/watemark orginal alfa logo.png" alt="Alfa Tech India" class="logo-img" onerror="this.src='https://placehold.co/400x400/0a66c2/white?text=ALFA'">
                <div class="brand-text">
                    <h1>ALFA TECH INDIA</h1>
                    <p>No 1 Manufacturer In Milking Machine And Dairy Product Equipments</p>
                </div>
            </div>
            <div class="hamburger-menu">
                <i class="fas fa-bars"></i>
            </div>
            <div class="navbar-menu">
                <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About us</a></li>
                    <li class="dropdown">
                        <a href="products.html">Our Products</a><span class="dropdown-toggle-icon"><i class="fas fa-chevron-down"></i></span>
                        <div class="dropdown-content">
                            <div class="dropdown-row">
                                <div class="dropdown-col">
                                    <h4><a href="product-double-bucket.html" style="color: inherit; text-decoration: none;">Milking Machines</a></h4>
                                    <ul>
                                        <li><a href="product-double-bucket.html?product=double-bucket">Double Bucket Milking Machine without Engine</a></li>
                                        <li><a href="product-double-bucket.html?product=single-bucket">Alfa Tech India Single Bucket Fixed machine</a></li>
                                        <li><a href="product-double-bucket.html?product=double-bucket-engine">Milking Machine Double Bucket</a></li>
                                        <li><a href="product-double-bucket.html?product=alfa-double-bucket">Alfa Tech India Double Bucket Milking Machine</a></li>
                                        <li><a href="product-double-bucket.html?product=trolly-milking">Alfa Tech Trolly Milking Machine</a></li>
                                        <li><a href="product-double-bucket.html?product=four-bucket">Milking Machine Four Bucket</a></li>
                                        <li><a href="product-double-bucket.html?product=milking-parts">Milking Machine Parts</a></li>
                                    </ul>
                                    <div class="more-link"><a href="product-double-bucket.html">+ More</a></div>

                                    <h4 class="mt-15">Milk Analysers</h4>
                                    <ul>
                                        <li><a href="product-milk-analyser.html">Milk Analyzers</a></li>
                                        <li><a href="product-ss-analyzer.html">Stainless Steel Body Milk Analyzer</a></li>
                                        <li><a href="product-ultrasonic-analyzer.html">Ultrasonic Milk Vibrator</a></li>
                                    </ul>
                                    <div class="more-link"><a href="products.html#analyser">+ More</a></div>
                                </div>

                                <div class="dropdown-col">
                                    <h4>Cream Separators</h4>
                                    <ul>
                                        <li><a href="product-cream-separator.html">Alfa Tech India Cream Separator 500LPH</a></li>
                                        <li><a href="product-cream-separator-standard.html">Cream Separator</a></li>
                                        <li><a href="product-whey-separator.html">Whey Cream Separator</a></li>
                                        <li><a href="product-alfa-cream.html">Alfa Tech India Cream Separator</a></li>
                                    </ul>
                                    <div class="more-link"><a href="products.html#separator">+ More</a></div>

                                    <h4 class="mt-15">Khoya / Mawa Machines</h4>
                                    <ul>
                                        <li><a href="product-khoya-machine.html">Alfa Digital Weighing Khawa Machine</a></li>
                                        <li><a href="product-khowa-machine.html">Khowa Or Ghee Making Machine</a></li>
                                        <li><a href="product-ghee-plant.html">Fully Automatic Ghee Making Plant</a></li>
                                        <li><a href="product-portable-packing.html">Alfa Tech India Portable Packing Machine</a></li>
                                    </ul>
                                    <div class="more-link"><a href="products.html#khoya">+ More</a></div>
                                </div>

                                <div class="dropdown-col">
                                    <h4>Paneer Press</h4>
                                    <ul>
                                        <li><a href="product-four-head-pneumatic-paneer-press.html">Four Head Pneumatic Paneer Press</a></li>
                                        <li><a href="product-paneer-machine.html">Paneer Making Machine</a></li>
                                        <li><a href="product-paneer-wire-cutter.html">Alfa Paneer Wire Cutter</a></li>
                                        <li><a href="product-manual-cutter.html">Alfa Tech India Manual Paneer cutter machine</a></li>
                                        <li><a href="product-paneer-press.html">Alfa Tech India Paneer Press</a></li>
                                    </ul>
                                    <div class="more-link"><a href="products.html#paneer">+ More</a></div>

                                    <h4 class="mt-15">Bulk Milk Coolers</h4>
                                    <ul>
                                        <li><a href="product-bulk-cooler.html">Bulk Milk Cooler</a></li>
                                        <li><a href="product-ss-model.html">Milking Machine SS model</a></li>
                                        <li><a href="product-aluminium-cans.html">Aluminium Milk Cans</a></li>
                                        <li><a href="product-milk-cans.html">Milk Cans</a></li>
                                        <li><a href="product-dairy-mini-plant.html">Dairy Mini Plant</a></li>
                                    </ul>
                                    <div class="more-link"><a href="products.html#cooler">+ More</a></div>
                                </div>

                                <div class="dropdown-col">
                                    <h4>Vacuum Packaging Machine</h4>
                                    <ul>
                                        <li><a href="product-pneumatic-press.html">Pneumatic Paneer Press</a></li>
                                        <li><a href="product-tabletop-vacuum.html">Alfa Tech India Table Top Vacuum Packaging Machine</a></li>
                                        <li><a href="product-double-chamber.html">Double Chamber Vacuum Packaging Machine</a></li>
                                        <li><a href="product-alfa-vacuum.html">Alfa Tech Vacuum Packaging Machine</a></li>
                                    </ul>
                                    <div class="more-link"><a href="products.html#vacuum">+ More</a></div>
                                    <div class="view-all-categories" style="margin-top: 20px; text-align: center; border-top: 1px solid #e0e0e0; padding-top: 12px;">
                                        <a href="all.html" style="color: #0a66c2; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                                            View All Categories <i class="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a href="videos.html">Videos</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>`;

const SHARED_FOOTER_HTML = `
<footer class="main-footer">
    <div class="container">
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="footer-logo">
                    <img src="assets/images.png/logo.png" alt="Alfa Tech India" style="width: 50px; height: 50px; object-fit: contain; border-radius: 10px;">
                    <h3>ALFA TECH INDIA</h3>
                </div>
                <p class="footer-desc">Manufacturer of milking machines and complete dairy equipment with 30+ years of expertise.</p>
                <div class="social-links">
                    <a href="https://www.facebook.com/profile.php?id=100009574982786" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/alfatechindia/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/user/Alfatechindia" target="_blank" rel="noopener" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            <div class="col-md-2 col-6 mb-4">
                <h5>Quick Links</h5>
                <ul class="footer-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="products.html">Our Products</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="videos.html">Videos</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>
            <div class="col-md-3 col-6 mb-4">
                <h5>Products</h5>
                <ul class="footer-links">
                    <li><a href="product-double-bucket.html">Milking Machines</a></li>
                    <li><a href="product-milk-analyser.html">Milk Analysers</a></li>
                    <li><a href="product-cream-separator.html">Cream Separators</a></li>
                    <li><a href="product-milk-can-ss.html">SS Milk Cans</a></li>
                    <li><a href="product-milk-can-al.html">Aluminium Milk Cans</a></li>
                    <li><a href="product-paneer-machine.html">Paneer Press</a></li>
                    <li><a href="product-bulk-cooler.html">Bulk Milk Coolers</a></li>
                </ul>
            </div>
            <div class="col-md-3 mb-4">
                <h5>Contact Info</h5>
                <ul class="footer-contact">
                    <li><i class="fas fa-building"></i> <span><strong>Regd. Office:</strong> 401, 1717 Zenith Complex, Opp. Krushi Bhavan, Shivaji Nagar, Pune.</span></li>
                    <li><i class="fas fa-wrench"></i> <span><strong>Service Center:</strong> Malvankar Industrial Estate, Near RTO, Sangambridge, Pune.</span></li>
                    <li><i class="fas fa-phone"></i> <span>9822020999 / 020-25530399 / 020-66010999 / 9850584191</span></li>
                    <li><i class="fas fa-envelope"></i> <span>sales@alfatechindia.com / customercare@alfatechindia.com</span></li>
                    <li><i class="fas fa-globe"></i> <span>alfatechindia.com</span></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Alfa Tech India. All Rights Reserved. No 1 Manufacturer In Milking Machine And Dairy Product Equipments. | Developed by <a href="https://mindaxisinnovation.com/" target="_blank" rel="noopener" style="color: #b0c4de; font-weight: bold; text-decoration: none; transition: 0.2s;"><b>MindAxis Innovation Pvt Ltd</b></a></p>
        </div>
    </div>
</footer>
<a href="tel:9822020999" class="floating-call" aria-label="Call Us"><i class="fas fa-phone-alt"></i></a>
<a href="https://wa.me/919822020999?text=Hello%2C%20I%20need%20expert%20advice%20for%20dairy%20equipment" class="floating-wa" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i></a>
<a href="#" id="backToTopBtn" class="back-top-btn"><i class="fas fa-arrow-up"></i></a>`;

function syncSharedLayout() {
    const header = document.querySelector('.top-header-section');
    if (header) {
        header.outerHTML = SHARED_HEADER_HTML;
    }

    document.querySelectorAll('.floating-wa, .floating-call, .back-top-btn').forEach(button => button.remove());
    const footer = document.querySelector('.main-footer');
    if (footer) {
        footer.outerHTML = SHARED_FOOTER_HTML;
    } else {
        document.body.insertAdjacentHTML('beforeend', SHARED_FOOTER_HTML);
    }
}

// Helper function to initialize dropdown menus
// This function now handles both desktop hover and mobile click behavior
function initializeDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a');
        const toggleIcon = dropdown.querySelector('.dropdown-toggle-icon');

        // Clear all previous listeners to prevent duplicates on re-initialization
        if (dropdown._desktopMouseEnterHandler) dropdown.removeEventListener('mouseenter', dropdown._desktopMouseEnterHandler);
        if (dropdown._desktopMouseLeaveHandler) dropdown.removeEventListener('mouseleave', dropdown._desktopMouseLeaveHandler);
        if (toggleIcon) toggleIcon.replaceWith(toggleIcon.cloneNode(true)); // Previous listeners clear

        const newToggleIcon = dropdown.querySelector('.dropdown-toggle-icon');

        if (window.innerWidth > 768) {
            // Desktop: Hover to open/close
            dropdown._desktopMouseEnterHandler = () => dropdown.classList.add('show');
            dropdown._desktopMouseLeaveHandler = () => dropdown.classList.remove('show');
            dropdown.addEventListener('mouseenter', dropdown._desktopMouseEnterHandler);
            dropdown.addEventListener('mouseleave', dropdown._desktopMouseLeaveHandler);
            dropdown.classList.remove('active'); // Ensure mobile active class is removed
        } else {
            // Mobile: Click on icon to toggle
            dropdown.classList.remove('show'); // Ensure desktop show class is removed
            if (newToggleIcon) {
                newToggleIcon.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation(); // Prevent event from bubbling up

                    // Close other open dropdowns
                    dropdowns.forEach(d => {
                        if (d !== dropdown && d.classList.contains('active')) {
                            d.classList.remove('active');
                        }
                    });
                    dropdown.classList.toggle('active');
                });
            }
        }
    });
}

// Function to set active navigation link based on current page
function setActiveNavLink() {
    const currentPageUrl = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links li a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPageUrl || 
            (currentPageUrl === 'index.html' && linkHref === '#')) {
            link.classList.add('active');
        }
    });
}

// ========== BACK TO TOP BUTTON ==========
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 400) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// ========== SCROLL REVEAL ==========
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.stat-card, .feature-card');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
    });
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealThreshold = 100;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealThreshold) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }
    setTimeout(checkReveal, 100);
    window.addEventListener('scroll', checkReveal);
}

// ========== STATS COUNTER ==========
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;
    
    function animateNumbers() {
        if (animated) return;
        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            const sectionTop = statsSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                animated = true;
                statNumbers.forEach(stat => {
                    const text = stat.innerText;
                    if (!isNaN(parseInt(text))) {
                        const targetNumber = parseInt(text);
                        let currentNumber = 0;
                        const increment = targetNumber / 50;
                        const timer = setInterval(() => {
                            currentNumber += increment;
                            if (currentNumber >= targetNumber) {
                                stat.innerText = targetNumber + '+';
                                clearInterval(timer);
                            } else {
                                stat.innerText = Math.floor(currentNumber) + '+';
                            }
                        }, 25);
                    }
                });
            }
        }
    }
    window.addEventListener('scroll', animateNumbers);
    setTimeout(animateNumbers, 500);
}

// ========== PRODUCT SLIDER FUNCTIONALITY ==========
function initProductSlider() {
    const sliderTrack = document.getElementById('sliderTrack');
    const prevArrow = document.getElementById('prevArrow');
    const nextArrow = document.getElementById('nextArrow');
    const dotsContainer = document.getElementById('sliderDots');
    
    if (!sliderTrack || !prevArrow || !nextArrow || !dotsContainer) return;
    
    let currentIndex = 0;
    let slidesPerView = getSlidesPerView();
    let totalSlides = document.querySelectorAll('.slider-card').length;
    let dots = [];

    function getSlidesPerView() {
        if (window.innerWidth < 576) return 1;
        if (window.innerWidth < 768) return 1;
        if (window.innerWidth < 992) return 2;
        if (window.innerWidth < 1200) return 3;
        return 4;
    }

    function updateSlider() {
        const cardWidth = document.querySelector('.slider-card')?.offsetWidth || 0;
        const gap = 24;
        const slideWidth = cardWidth + gap;
        const newPosition = -currentIndex * slideWidth;
        sliderTrack.style.transform = `translateX(${newPosition}px)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        
        prevArrow.style.display = currentIndex === 0 ? 'none' : 'flex';
        nextArrow.style.display = currentIndex >= totalSlides - slidesPerView ? 'none' : 'flex';
    }

    function createDots() {
        dotsContainer.innerHTML = '';
        dots = [];
        const totalDots = Math.ceil(totalSlides / slidesPerView);
        
        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === currentIndex) dot.classList.add('active');
            dot.addEventListener('click', () => {
                currentIndex = i;
                updateSlider();
            });
            dotsContainer.appendChild(dot);
            dots.push(dot);
        }
    }

    function nextSlide() {
        if (currentIndex < totalSlides - slidesPerView) {
            currentIndex++;
            updateSlider();
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    }

    nextArrow.addEventListener('click', nextSlide);
    prevArrow.addEventListener('click', prevSlide);

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const newSlidesPerView = getSlidesPerView();
            if (newSlidesPerView !== slidesPerView) {
                slidesPerView = newSlidesPerView;
                currentIndex = 0;
                createDots();
                updateSlider();
            } else {
                updateSlider();
            }
        }, 250);
    });

    setTimeout(() => {
        totalSlides = document.querySelectorAll('.slider-card').length;
        slidesPerView = getSlidesPerView();
        createDots();
        updateSlider();
    }, 100);
}

// ========== PRODUCT FILTER FUNCTIONALITY ==========
function initProductFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.slider-card');
    
    if (filterBtns.length === 0 || productCards.length === 0) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            productCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ========== PRODUCT OVERVIEW SECTION WITH HORIZONTAL MARQUEE TRACKS ==========
function initProductOverview() {
    const marqueeTrack = document.getElementById('productMarqueeTrack');
    const marqueeTrackReverse = document.getElementById('productMarqueeTrackReverse');
    if (!marqueeTrack && !marqueeTrackReverse) return;

    // Track 1 Products (Moving Right to Left)
    const productsTrack1 = [
        { title: 'Cheese Production Line', desc: 'Commercial cheese production solutions with curd cutter & stretcher.', image: 'assets/images.png/Cheese-Production-Line.png', link: 'product-cheese-production.html' },
        { title: 'Paneer Plant', desc: 'Commercial paneer making and pressing machines.', image: 'assets/images.png/paneer2.png', link: 'product-paneer-machine.html' },
        { title: 'Ghee Making Plant', desc: 'Turnkey ghee manufacturing plant with butter churner & kettle.', image: 'assets/images.png/Ghee-Plant-Layout-500LPD.png', link: 'product-ghee-plant.html' },
        { title: 'Curd Plant', desc: 'Complete setup for curd/yogurt processing & cooling.', image: 'assets/images.png/new2.png', link: 'product-curd-incubation.html' },
        { title: 'Khoya / Mawa Machines', desc: 'Automatic khoya making machines for consistent product quality.', image: 'assets/images.png/mawa1.png', link: 'product-khoya-machine.html' },
        { title: 'Pneumatic Paneer Press', desc: 'Single head SS 304 pneumatic press with 10 Kg mold capacity.', image: 'assets/images.png/paneerpres.png', link: 'product-pneumatic-press.html' },
        { title: 'Four Head Pneumatic Press', desc: 'Industrial 4-head pneumatic paneer press for high capacity.', image: 'assets/images.png/FOUR HRAD PNEUMATIC PANEER CUTTER.png', link: 'product-four-head-pneumatic-paneer-press.html' },
        { title: 'Australia Site Plant', desc: 'Turnkey industrial dairy processing setup commissioned globally.', image: 'assets/images.png/Newplant.png', link: 'product-plant.html' },
        { title: 'Bulk Milk Coolers', desc: 'Industrial grade coolers to maintain milk freshness.', image: 'assets/images.png/Bulk-milk-0coolers1.png', link: 'product-bulk-cooler.html' },
        { title: '1000 LPH Cream Separator', desc: 'Centrifugal online separators for optimal fat recovery.', image: 'assets/images.png/Online-Cream-Separator-1000LPH.png', link: 'product-cream-separator.html' },
        { title: 'Transparent Milking Machine Claw', desc: '350cc high capacity transparent acrylic milking claw with SS base plate & shut-off valve.', image: 'assets/images.png/photo0011.png', link: 'product-milking-claw.html' },
        { title: 'Milking Machines', desc: 'High-quality milking machines for efficient dairy farming.', image: 'assets/withoutengin.png', link: 'product-double-bucket.html' },
        { title: 'Solid Fuel Steam Boiler', desc: 'High efficiency wood and coal fired steam boiler.', image: 'assets/images.png/Gheeplant-2.png', link: 'product-steam-boiler-solid.html' }
    ];

    // Track 2 Products (Moving Left to Right - All Remaining Products)
    const productsTrack2 = [
        { title: 'Manual Paneer Press', desc: 'Mechanical screw press in heavy duty stainless steel.', image: 'assets/images.png/press1.png', link: 'product-paneer-press.html' },
        { title: 'Pneumatic Paneer Cutter', desc: 'Pneumatic slab & cube cutter with food-grade SS blades.', image: 'assets/images.png/cutter2.png', link: 'product-pneumatic-cutter.html' },
        { title: 'Whey Cream Separator', desc: '500 LPH SS 304 separator for continuous whey cream extraction.', image: 'assets/images.png/photo26.png', link: 'product-whey-separator.html' },
        { title: 'Milk Processing Plant', desc: 'Complete commercial milk processing plant with pasteurizer.', image: 'assets/images.png/Newplant1.png', link: 'product-milk-processing-plant.html' },
        { title: 'Continuous Band Sealer', desc: 'High-speed horizontal continuous sealing for pouch packaging.', image: 'assets/images.png/continuous-band-sealing-machine.png', link: 'sealing-machine.html' },
        { title: 'Cup Sealer Machine', desc: 'Hygienic sealing for curd, yogurt and lassi cups.', image: 'assets/images.png/new6.png', link: 'product-rotary-cup-sealing.html' },
        { title: 'Pneumatic Milking Pulsator', desc: 'Dry oil-free 60/40 ratio pneumatic pulsator with SS 304 cap.', image: 'assets/images.png/photo0022.png', link: 'product-milking-pulsator.html' },
        { title: 'Pouch Packing Machine', desc: 'Automatic solutions for volumetric filling and sealing in pouches.', image: 'assets/punch.png', link: 'product-pouch-auto.html' },
        { title: 'Tabletop Vacuum Packaging', desc: 'Single chamber tabletop vacuum machine for paneer & mawa.', image: 'assets/images.png/vaccum2.png', link: 'product-tabletop-vacuum.html' },
        { title: 'Double Chamber Vacuum Machine', desc: 'Heavy duty SS 304 dual chamber high-speed vacuum packaging.', image: 'assets/images.png/producat1.png', link: 'product-double-chamber.html' },
        { title: 'Multi-Parameter Milk Analyser', desc: 'Rapid analysis of FAT, SNF, protein, lactose & density.', image: 'assets/images.png/dyna-milk-analyzer.png', link: 'product-milk-analyser.html' },
        { title: 'AMCU Data Processing Unit', desc: 'Centralized milk collection center data unit with scale sync.', image: 'assets/images.png/Data processing unit.png', link: 'product-data-processing-unit.html' },
        { title: 'RMRD Weighing Scale Dock', desc: '500 LPH raw milk reception scale with 500L SS weigh bowl.', image: 'assets/images.png/photo22.png', link: 'product-weighing-digital.html' },
        { title: 'Electronic Platform Scale', desc: 'Precision digital platform scale for bulk milk measurement.', image: 'assets/electronic.png', link: 'product-platform-weighing-scale.html' },
        { title: 'Soya Milk Plant', desc: 'Complete extraction plant for soya milk & soya paneer.', image: 'assets/images.png/new10.png', link: 'product-soya-milk-plant.html' },
        { title: 'Portable Milking Machine', desc: 'Compact and mobile milking solution for small dairy farms.', image: 'assets/images.png/Portable Single Bucket Milking Machine.jpeg', link: 'product-portable-single-bucket.html' },
        { title: 'Shrikhand Blender', desc: 'Planetary Shrikhand blender with SS 304 food grade body.', image: 'assets/images.png/Shrikhand-Blender.png', link: 'product-shrikhand-blender.html' },
        { title: 'Curd Incubation Chamber', desc: 'Combo curd incubation chamber with heating and cooling.', image: 'assets/images.png/Curd-Incubation-Chamber.png', link: 'product-curd-incubation.html' },
        { title: 'Stainless Steel Cooling Tank', desc: 'Direct expansion DX milk cooling tank with laser evaporators.', image: 'assets/images.png/Stainless Steel Milk Cooling Tank.png', link: 'product-bulk-cooler.html' }
    ];

    const createCardHtml = (item) => `
        <div class="marquee-product-card">
            <div class="marquee-card-img-wrap">
                <img src="${item.image}" alt="${item.title}" onerror="this.src='https://placehold.co/400x400/353598/white?text=Product'">
            </div>
            <div class="marquee-card-content">
                <h4 class="marquee-card-title">${item.title}</h4>
                <div>
                    <a href="${item.link}" class="marquee-card-btn">Explore Details &rarr;</a>
                </div>
            </div>
        </div>
    `;

    if (marqueeTrack) {
        let html1 = '';
        productsTrack1.forEach(item => { html1 += createCardHtml(item); });
        productsTrack1.forEach(item => { html1 += createCardHtml(item); });
        marqueeTrack.innerHTML = html1;
    }

    if (marqueeTrackReverse) {
        let html2 = '';
        productsTrack2.forEach(item => { html2 += createCardHtml(item); });
        productsTrack2.forEach(item => { html2 += createCardHtml(item); });
        marqueeTrackReverse.innerHTML = html2;
    }
}

// ========== ADD ANIMATION KEYFRAMES ==========
function addAnimationStyles() {
    if (document.getElementById('animation-styles')) return;
    
    const styleSheet = document.createElement('style');
    styleSheet.id = 'animation-styles';
    styleSheet.textContent = `
        @keyframes imageFadeScale {
            from { opacity: 0; transform: scale(0.92); }
            to { opacity: 1; transform: scale(1); }
        }
        @keyframes titleSlideRight {
            from { opacity: 0; transform: translateX(25px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes descSlideRight {
            from { opacity: 0; transform: translateX(25px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes featureSlideRight {
            from { opacity: 0; transform: translateX(25px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        #mainProductImage, #productDetailTitle, #productDetailDesc, .product-card {
            transition: none;
        }
    `;
    document.head.appendChild(styleSheet);
}

// ========== AOS INITIALIZATION ==========
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }
}

// ========== MOBILE HAMBURGER MENU FUNCTIONALITY - FIXED WORKING ==========
function initMobileMenu() {
    // Find hamburger menu button - try multiple selectors
    let hamburger = document.querySelector('.hamburger-menu');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    // If hamburger doesn't exist, create it
    if (!hamburger) {
        const headerContainer = document.querySelector('.header-container');
        if (headerContainer) {
            hamburger = document.createElement('div');
            hamburger.className = 'hamburger-menu';
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            headerContainer.appendChild(hamburger);
        }
    }
    
    // If still no hamburger or no navbar menu, exit
    if (!hamburger || !navbarMenu) {
        console.warn('Mobile menu elements not found');
        return;
    }
    
    // Remove existing event listeners to prevent duplicates
    const newHamburger = hamburger.cloneNode(true);
    hamburger.parentNode.replaceChild(newHamburger, hamburger);
    hamburger = newHamburger;
    
    // Mobile menu toggle function
    function toggleMobileMenu(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        navbarMenu.classList.toggle('active');
        
        // Toggle body scroll when menu is open
        if (navbarMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            // Change icon to close
            const icon = hamburger.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        } else {
            document.body.style.overflow = '';
            // Change icon back to bars
            const icon = hamburger.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    }
    
    // Add click event to hamburger
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close menu when clicking on a nav link (for better UX)
    const navLinks = navbarMenu.querySelectorAll('.nav-links li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // FIX: If screen is mobile and this is a dropdown parent, don't close the side menu
            if (window.innerWidth <= 768 && link.parentElement.classList.contains('dropdown')) {
                return;
            }

            if (navbarMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navbarMenu.classList.contains('active') && 
            !navbarMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            toggleMobileMenu();
        }
    });
    
    // Close menu on window resize (if screen becomes larger than mobile)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navbarMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
        initializeDropdowns();
    });
}

// ========== THUMBNAIL CLICK - IMAGE CHANGE (Generic for product detail pages) ==========
function initializeThumbnailSwitcher() {
    const mainImage = document.getElementById('mainProductImage');
    const thumbnails = document.querySelectorAll('.thumbnail-img');
    
    if(mainImage && thumbnails.length > 0) {
        thumbnails.forEach(function(thumb) {
            // Remove existing listeners to prevent duplicates
            const newThumb = thumb.cloneNode(true);
            thumb.parentNode.replaceChild(newThumb, thumb);
            
            newThumb.addEventListener('click', function() {
                // Get the image URL from data-image attribute or src
                let newImageSrc = this.getAttribute('data-image');
                if(!newImageSrc) {
                    newImageSrc = this.getAttribute('src');
                }
                
                // Update main image
                if(newImageSrc) {
                    mainImage.setAttribute('src', newImageSrc);
                }
                
                // Remove active class from all thumbnails
                thumbnails.forEach(function(t) {
                    t.classList.remove('active');
                });
                
                // Add active class to clicked thumbnail
                this.classList.add('active');
            });
        });
    }
}



// ========== HERO SLIDESHOW WITH ARROWS & DOTS (SEAMLESS INFINITE LEFT LOOP) ==========
function initHeroSlideshow() {
    const track = document.getElementById('heroTrack');
    const originalSlides = Array.from(document.querySelectorAll('.hero-slide'));
    const dots = document.querySelectorAll('.hero-dot');
    const prevBtn = document.getElementById('heroPrevBtn');
    const nextBtn = document.getElementById('heroNextBtn');
    if (!originalSlides || originalSlides.length === 0 || !track) return;

    // Clone the first slide and append it to the end for a 100% seamless leftward loop
    const firstClone = originalSlides[0].cloneNode(true);
    firstClone.classList.add('clone-slide');
    track.appendChild(firstClone);

    const totalSlides = track.children.length; // 5 slides (4 original + 1 clone)
    const numOriginal = originalSlides.length;

    // Set width percentages dynamically for smooth animation
    track.style.width = `${totalSlides * 100}%`;
    Array.from(track.children).forEach(slide => {
        slide.style.flex = `0 0 ${100 / totalSlides}%`;
        slide.style.width = `${100 / totalSlides}%`;
    });

    let currentIndex = 0;
    let slideTimer = null;
    let isTransitioning = false;

    function updateDots(realIndex) {
        dots.forEach(function(dot, i) {
            if (i === realIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function goToIndex(index, animate = true) {
        currentIndex = index;
        const shiftPercent = currentIndex * (100 / totalSlides);

        if (!animate) {
            track.style.transition = 'none';
        } else {
            track.style.transition = 'transform 1.4s cubic-bezier(0.25, 1, 0.5, 1)';
        }

        track.style.transform = `translateX(-${shiftPercent}%)`;

        let realIndex = currentIndex % numOriginal;
        if (currentIndex === numOriginal) realIndex = 0;
        updateDots(realIndex);
    }

    function nextSlide() {
        if (isTransitioning) return;
        isTransitioning = true;
        goToIndex(currentIndex + 1, true);
    }

    function prevSlide() {
        if (isTransitioning) return;
        isTransitioning = true;
        if (currentIndex === 0) {
            goToIndex(numOriginal, false);
            track.offsetHeight; // Force reflow
            goToIndex(numOriginal - 1, true);
        } else {
            goToIndex(currentIndex - 1, true);
        }
    }

    track.addEventListener('transitionend', function() {
        isTransitioning = false;
        // When we land on the clone at the end, seamlessly snap back to slide 0
        if (currentIndex === numOriginal) {
            goToIndex(0, false);
        }
    });

    function startAutoSlide() {
        if (slideTimer) clearInterval(slideTimer);
        slideTimer = setInterval(nextSlide, 6500);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            prevSlide();
            startAutoSlide();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            nextSlide();
            startAutoSlide();
        });
    }

    dots.forEach(function(dot, idx) {
        dot.addEventListener('click', function() {
            if (isTransitioning) return;
            goToIndex(idx, true);
            startAutoSlide();
        });
    });

    startAutoSlide();
}

// ========== CLIENT MARQUEE ARROW CONTROLS ==========
function initClientMarqueeControls() {
    document.querySelectorAll('.client-marquee-wrapper').forEach(function(wrapper) {
        const container = wrapper.querySelector('.client-marquee-container');
        const prevBtn = wrapper.querySelector('.client-arrow-prev');
        const nextBtn = wrapper.querySelector('.client-arrow-next');
        if (!container) return;

        const scrollAmount = 300;

        if (prevBtn) {
            prevBtn.addEventListener('click', function(e) {
                e.preventDefault();
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', function(e) {
                e.preventDefault();
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
        }
    });
}

// ========== UNIVERSAL SLIDING CATEGORY SHOWCASE (For All Product Pages) ==========
function initUniversalCategorySlider() {
    // If slidingModelsSection already exists on page (e.g. product-double-bucket.html), skip
    if (document.getElementById('slidingModelsSection')) return;

    // Identify current file
    const currentPath = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    
    // Ignore non-product pages
    const nonProductPages = ['index.html', 'about.html', 'contact.html', 'videos.html', 'photos.html', 'products.html', 'all.html', 'enquiry.html', ''];
    if (nonProductPages.includes(currentPath) && !currentPath.startsWith('product-')) return;

    // Check if this is a product page
    const isProductPage = currentPath.startsWith('product-') || 
                          currentPath.includes('-machine') || 
                          document.querySelector('.product-detail-section, .product-info, .product-main-details, .product-details-container');
    if (!isProductPage) return;

    // Find matching category from categoriesWithProducts
    let matchedCategory = null;

    // A. Match by product link
    for (let i = 0; i < categoriesWithProducts.length; i++) {
        const cat = categoriesWithProducts[i];
        if (cat.products && cat.products.some(p => p.link && p.link.toLowerCase().includes(currentPath))) {
            matchedCategory = cat;
            break;
        }
    }

    // B. Match by page keywords if not found by exact link
    if (!matchedCategory) {
        const pageText = (document.title + ' ' + (document.querySelector('.breadcrumb-list, .simple-breadcrumb-list, .breadcrumb')?.innerText || '') + ' ' + (document.querySelector('h1')?.innerText || '')).toLowerCase();
        
        const keywordCategoryMap = [
            { keywords: ['milking', 'bucket', 'cluster', 'pulsator'], catId: 1 },
            { keywords: ['analys', 'tester', 'weighing scale', 'vibrator', 'amc', 'data processing'], catId: 2 },
            { keywords: ['separator', 'whey', 'cream'], catId: 3 },
            { keywords: ['khoya', 'khowa', 'mawa', 'sweet making', 'ghee making'], catId: 4 },
            { keywords: ['paneer', 'cutter', 'press'], catId: 5 },
            { keywords: ['cooler', 'chilling', 'tank', 'bmc'], catId: 6 },
            { keywords: ['can', 'aluminium can', 'ss can'], catId: 33 },
            { keywords: ['cheese'], catId: 34 },
            { keywords: ['shrikhand', 'chakka'], catId: 35 },
            { keywords: ['curd', 'dahi', 'incubation'], catId: 36 },
            { keywords: ['pouch', 'vacuum pack', 'packing'], catId: 11 },
            { keywords: ['cup', 'sealer', 'sealing'], catId: 12 },
            { keywords: ['soya', 'soy'], catId: 15 },
            { keywords: ['boiler', 'steam'], catId: 16 }
        ];

        for (const map of keywordCategoryMap) {
            if (map.keywords.some(k => pageText.includes(k))) {
                matchedCategory = categoriesWithProducts.find(c => c.id === map.catId);
                break;
            }
        }
    }

    // Fallback if still not found
    if (!matchedCategory) {
        matchedCategory = categoriesWithProducts[0];
    }

    // Gather products for slider
    let productsList = [...(matchedCategory.products || [])];

    // If category has fewer than 4 products, enrich with complementary equipment
    if (productsList.length < 4) {
        for (const siblingCat of categoriesWithProducts) {
            if (siblingCat.id !== matchedCategory.id && siblingCat.products) {
                for (const p of siblingCat.products) {
                    if (!productsList.some(existing => existing.link === p.link)) {
                        productsList.push(p);
                        if (productsList.length >= 6) break;
                    }
                }
            }
            if (productsList.length >= 6) break;
        }
    }

    // Short name formatter for the dark card bottom bar
    function getCardShortName(fullName) {
        if (!fullName) return 'Dairy Equipment';
        let clean = fullName
            .replace(/^(Alfa Tech India|Alfa Tech|Alfa)\s+/i, '')
            .replace(/\(.*?\)/g, '')
            .trim();
        if (clean.length > 24) {
            return clean.substring(0, 22) + '...';
        }
        return clean;
    }

    // Build the HTML
    const catDisplayName = matchedCategory.name.replace(/Machine|Machines/gi, '').trim();
    
    let cardsHtml = '';
    productsList.forEach(p => {
        const isCurrent = p.link && p.link.toLowerCase().includes(currentPath);
        const shortName = getCardShortName(p.name);

        cardsHtml += `
            <a href="${p.link}" class="model-slide-card ${isCurrent ? 'is-active' : ''}" title="${p.name}">
                ${isCurrent ? '<div class="model-active-tag">Viewing</div>' : ''}
                <div class="model-card-image-wrap">
                    <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null; this.src='assets/images.png/logo.png';">
                </div>
                <div class="model-card-footer">
                    <div class="model-footer-dark">
                        <span class="model-card-name" title="${p.name}">${shortName}</span>
                    </div>
                    <div class="model-footer-arrow-wrap">
                        <span class="model-footer-arrow">&rarr;</span>
                    </div>
                </div>
            </a>
        `;
    });

    const sectionEl = document.createElement('section');
    sectionEl.className = 'models-slider-section';
    sectionEl.id = 'slidingModelsSection';
    sectionEl.innerHTML = `
        <div class="container">
            <div class="slider-section-head">
                <div>
                    <span class="slider-section-tag">Category Showcase</span>
                    <h2 class="slider-section-title">All ${catDisplayName} &amp; Equipment</h2>
                    <p class="slider-section-sub">Click any model below to explore related products in this category</p>
                </div>
                <div class="slider-nav-arrows">
                    <button class="slider-nav-btn prev" id="sliderPrevBtn" aria-label="Previous Models" title="Slide Left">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="slider-nav-btn next" id="sliderNextBtn" aria-label="Next Models" title="Slide Right">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>

            <div class="slider-track-container" id="sliderTrackContainer">
                <div class="slider-track" id="relatedCategorySlider">
                    ${cardsHtml}
                </div>
            </div>
        </div>
    `;

    // Insert before the footer
    const footer = document.querySelector('.main-footer');
    if (footer) {
        footer.parentNode.insertBefore(sectionEl, footer);
    } else {
        document.body.appendChild(sectionEl);
    }

    // Attach Prev/Next Arrow Listeners & Drag Scroll
    const trackContainer = sectionEl.querySelector('#sliderTrackContainer');
    const prevBtn = sectionEl.querySelector('#sliderPrevBtn');
    const nextBtn = sectionEl.querySelector('#sliderNextBtn');

    if (trackContainer) {
        const scrollAmount = 330;
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                trackContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
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
}

// ========== INITIALIZE EVERYTHING ON PAGE LOAD ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('Alfa Tech India website loaded - Mobile menu fixed');

    syncSharedLayout();

    // Initialize all features
    initHeroSlideshow(); // Hero background slider with arrows & dots
    initBackToTop();
    initScrollReveal();
    initStatsCounter();
    initProductSlider();
    initProductFilters();
    initProductOverview();
    initAOS();
    addAnimationStyles();
    initMobileMenu();  // Mobile hamburger menu init - FIXED WORKING
    initializeThumbnailSwitcher(); // Generic thumbnail switcher for product detail pages
    initializeDropdowns(); // Desktop dropdowns
    setActiveNavLink(); // Set active nav link
    initClientMarqueeControls(); // Initialize client slider arrows
    initUniversalCategorySlider(); // Universal related category products slider for all product pages
    initMutedVideos(); // Force mute and 0 volume on all video elements
});

// ========== MUTE ALL VIDEOS FUNCTIONALITY ==========
function initMutedVideos() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.muted = true;
        video.volume = 0;
        video.setAttribute('muted', '');
        video.setAttribute('controlslist', 'novolume');
        video.addEventListener('play', () => {
            video.muted = true;
            video.volume = 0;
        });
        video.addEventListener('volumechange', () => {
            if (!video.muted || video.volume > 0) {
                video.muted = true;
                video.volume = 0;
            }
        });
    });
}

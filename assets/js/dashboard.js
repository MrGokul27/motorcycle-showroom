(function () {
  "use strict";

  const ROLE_DATA = {
    "Rider / Buyer": {
      roleKey: "Rider / Buyer",
      roleLabel: "Rider / Motorcycle Buyer",
      portalTitle:
        'Stackly <span class="text-main">Rider Paddock</span> Command',
      menuHeading: "Rider Garage & Paddock Menu",
      defaultUser: "Oliver Sterling",
      defaultEmail: "rider@stacklymotors.co.uk",
      sections: [
        {
          id: "overview",
          label: "Rider Paddock Overview",
          icon: "fa-solid fa-gauge-high",
          tag: "Live",
          kicker: "Fitzrovia Rider Telemetry Vault",
          title: "Personal Garage & Paddock Command",
          desc: "Monitor your active superbike allocations, review Dynojet 250i run sheets, and manage upcoming UK track days from your verified rider cockpit.",
          primaryBtn: "Book Paddock Slot",
          secondaryBtn: "Export Telemetry PDF",
          kpis: [
            {
              label: "Active Garage Fleet",
              value: "2 Superbikes",
              icon: "fa-solid fa-motorcycle",
              trend: "+1 Homologation",
              trendType: "up",
              foot: "Fitzrovia Registered",
            },
            {
              label: "Confirmed Track Days",
              value: "3 Circuits",
              icon: "fa-solid fa-flag-checkered",
              trend: "Silverstone Next",
              trendType: "hot",
              foot: "Pit Box #14 Reserved",
            },
            {
              label: "Active PCP Finance",
              value: "£389 / mo",
              icon: "fa-solid fa-sterling-sign",
              trend: "5.9% Fixed APR",
              trendType: "up",
              foot: "FCA-STK-90421",
            },
            {
              label: "Factory VIP Warranty",
              value: "24 Months",
              icon: "fa-solid fa-shield-halved",
              trend: "100% Covered",
              trendType: "up",
              foot: "EU & UK Roadside",
            },
          ],
          tableTitle: "My Registered Motorcycles & Showroom Allocations",
          tableHeaders: [
            "VIN / Reg Plate",
            "Motorcycle Model",
            "Engine & Output",
            "ECU Telemetry Map",
            "Next Service Due",
            "Status",
            "Action",
          ],
          tableRows: [
            [
              "LD74 STK • #V4R-882",
              "Stackly Panigale V4R Corsa",
              "998cc Desmo • 218.4 BHP",
              "Akrapovic Full Track v4.2",
              "3,850 Miles",
              { text: "Paddock Ready", type: "success" },
              "Telemetry Sheet",
            ],
            [
              "LD26 TPR • #RR-419",
              "Triumph Speed Triple 1200 RR",
              "1,160cc Triple • 177.5 BHP",
              "Fitzrovia Road/Sport v2.1",
              "5,200 Miles",
              { text: "In Rider Garage", type: "success" },
              "Service Log",
            ],
            [
              "ALLOC-2027-094",
              "BMW M 1000 RR Carbon Pack",
              "999cc ShiftCam • 212.0 BHP",
              "Factory M Race Calibration",
              "Pre-Delivery PDI",
              { text: "Build Slot Locked", type: "primary" },
              "Track Order",
            ],
            [
              "ALLOC-2027-118",
              "KTM 1390 Super Adventure R",
              "1,350cc LC8 • 173.0 BHP",
              "Rally Pro Off-Road Map",
              "Awaiting Crate",
              { text: "Deposit Paid", type: "warning" },
              "View Invoice",
            ],
          ],
          cards: [
            {
              img: "../assets/images/home/bike-1.webp",
              badge: "218.4 BHP Verified",
              tag: "Dynojet 250i Lab",
              title: "Panigale V4R Custom AFR Curve",
              text: "Latest dual-wideband lambda run completed at Fitzrovia Underground Lab with 13.1:1 optimal stoichiometric ratio.",
              specs: [
                ["Peak Wheel Power", "218.4 WHP @ 15,500 RPM"],
                ["Quickshifter Cut", "42 ms Seamless Shift"],
                ["Ohlins Smart EC", "Track Mode A1 Active"],
              ],
              progressLabel: "Engine Break-In Completion",
              progressVal: 94,
              btnText: "Download Dyno Graph",
            },
            {
              img: "../assets/images/home/event-1.webp",
              badge: "Silverstone GP",
              tag: "Circuit Hospitality",
              title: "Silverstone National Pit Box #14",
              text: "Includes dedicated tire warmer bay, Pirelli SC1 slick fitting service, and 3x 20-minute sighted sessions.",
              specs: [
                ["Noise Limit Check", "102 dB Static Passed"],
                ["Transponder ID", "TSL-UK-77410"],
                ["Instructor Slot", "Session 2 • 10:40 AM"],
              ],
              progressLabel: "Track Readiness Checklist",
              progressVal: 100,
              btnText: "View Pit Pass",
            },
            {
              img: "../assets/images/about/facility-lounge.webp",
              badge: "VIP Concierge",
              tag: "Fitzrovia Flagship",
              title: "Dedicated Rider Liaison Officer",
              text: "Direct priority line to Marcus Vance for enclosed bike transport, winter ceramic storage, and bespoke gear fitting.",
              specs: [
                ["Assigned Specialist", "Marcus Vance (Sr. Advisor)"],
                ["Showroom Bay", "245 Great Portland St"],
                ["Recovery Cover", "24/7 Enclosed Van"],
              ],
              progressLabel: "Annual Membership Tier",
              progressVal: 88,
              btnText: "Message Concierge",
            },
          ],
        },
        {
          id: "garage",
          label: "My Garage & Telemetry",
          icon: "fa-solid fa-motorcycle",
          tag: "2 Bikes",
          kicker: "Live ECU & Dyno Diagnostics",
          title: "My Garage & Dynojet 250i Telemetry",
          desc: "Inspect real-time IMU lean-angle logs, Brembo Stylema brake pressure traces, and custom fuel maps stored for your motorcycles.",
          primaryBtn: "Request ECU Reflash",
          secondaryBtn: "Upload Track Log",
          kpis: [
            {
              label: "Peak Dyno Output",
              value: "218.4 WHP",
              icon: "fa-solid fa-fire-flame-curved",
              trend: "+9.2 WHP Tuned",
              trendType: "hot",
              foot: "Dynojet 250i Cell",
            },
            {
              label: "Max Lean Angle Logged",
              value: "52.4° Left",
              icon: "fa-solid fa-compass-drafting",
              trend: "6-Axis IMU Verified",
              trendType: "up",
              foot: "Silverstone Stowe",
            },
            {
              label: "Pirelli Tire Life",
              value: "84% Optimal",
              icon: "fa-solid fa-circle-notch",
              trend: "Diablo Supercorsa V4",
              trendType: "up",
              foot: "Cold: 31 PSI / 26 PSI",
            },
            {
              label: "Battery & CTEK Health",
              value: "13.8V LiFePO4",
              icon: "fa-solid fa-car-battery",
              trend: "100% Charged",
              trendType: "up",
              foot: "Smart Tracker Active",
            },
          ],
          tableTitle: "Dynojet 250i ECU Mapping & Diagnostic History",
          tableHeaders: [
            "Run ID",
            "Test Date",
            "Motorcycle",
            "Exhaust / Intake Spec",
            "Air-Fuel Ratio",
            "Wheel Output",
            "Master Tech",
            "Action",
          ],
          tableRows: [
            [
              "DYNO-8841",
              "08 Nov 2026",
              "Panigale V4R Corsa",
              "Akrapovic Full Titanium + Sprint P08",
              "13.1 : 1 Optimal",
              "218.4 WHP / 114 Nm",
              "L. Rossi",
              "Download Map",
            ],
            [
              "DYNO-8612",
              "19 Sep 2026",
              "Speed Triple 1200 RR",
              "SC-Project CRT Carbon Slip-On",
              "13.2 : 1 Optimal",
              "177.5 WHP / 126 Nm",
              "D. Callahan",
              "Download Map",
            ],
            [
              "DYNO-8305",
              "04 Jul 2026",
              "Panigale V4R Corsa",
              "OEM Euro 5+ Baseline Run",
              "13.8 : 1 Lean",
              "209.2 WHP / 109 Nm",
              "L. Rossi",
              "Compare Runs",
            ],
            [
              "DYNO-7990",
              "12 May 2026",
              "Speed Triple 1200 RR",
              "600-Mile First Service Check",
              "13.4 : 1 Factory",
              "174.1 WHP / 123 Nm",
              "H. Patel",
              "View Certificate",
            ],
          ],
          cards: [
            {
              img: "../assets/images/home/bike-2.webp",
              badge: "IMU 6-Axis Active",
              tag: "Cornering ABS & DTC",
              title: "Brembo Stylema R Brake Telemetry",
              text: "Front master cylinder peak pressure recorded at 11.4 bar entering Vale chicane with zero lever fade.",
              specs: [
                ["Front Disc Temp", "285°C Optimal Carbon-Metallic"],
                ["Cornering ABS", "Level 1 (Front Only Track)"],
                ["Engine Brake Control", "EBC Evo Level 2"],
              ],
              progressLabel: "Front Pad Thickness Remaining",
              progressVal: 86,
              btnText: "Inspect Brake Log",
            },
            {
              img: "../assets/images/home/bike-3.webp",
              badge: "Ohlins Smart EC 2.0",
              tag: "Semi-Active Chassis",
              title: "Electronic Suspension Sag Profile",
              text: "Laser-calibrated static and rider sag configured for 82 kg full race leathers and helmet load.",
              specs: [
                ["Front NPX Fork Sag", "28 mm Rider Sag"],
                ["Rear TTX36 Shock", "26 mm • 95 N/mm Spring"],
                ["Steering Damper", "Event-Based Mode 3"],
              ],
              progressLabel: "Stroke Utilization Efficiency",
              progressVal: 91,
              btnText: "Adjust Setup Sheet",
            },
            {
              img: "../assets/images/about/facility-dyno.webp",
              badge: "Euro 5+ OBD-II",
              tag: "Fault Code Vault",
              title: "Zero Active ECU Fault Codes",
              text: "Complete CAN-bus interrogation across 14 control modules including BBS, ABS, DES, and TFT dash.",
              specs: [
                ["Last Full Scan", "08 Nov 2026 • 14:15 GMT"],
                ["Firmware Version", "STK-CORSA-2026.11"],
                ["Datatool S5 Stealth", "Armed • Geofence On"],
              ],
              progressLabel: "System Integrity Score",
              progressVal: 100,
              btnText: "Run Remote Ping",
            },
          ],
        },
        {
          id: "trackdays",
          label: "Test Rides & Track Days",
          icon: "fa-solid fa-flag-checkered",
          tag: "3 Booked",
          kicker: "UK Circuits & Showroom Fleet Demos",
          title: "Track Day Paddock & Test Ride Bookings",
          desc: "Manage your reserved Silverstone GP and Donington Park garage slots, trans-alpine tour entries, and private Fitzrovia test rides.",
          primaryBtn: "Book New Circuit Day",
          secondaryBtn: "Download ACU Waiver",
          kpis: [
            {
              label: "Silverstone GP National",
              value: "24 Nov 2026",
              icon: "fa-solid fa-trophy",
              trend: "Fast Group (Red)",
              trendType: "hot",
              foot: "Garage Bay #14",
            },
            {
              label: "Donington Park GP",
              value: "12 Dec 2026",
              icon: "fa-solid fa-stopwatch",
              trend: "Confirmed Entry",
              trendType: "up",
              foot: "98 dB Drive-By",
            },
            {
              label: "Showroom Demo Rides",
              value: "1 Scheduled",
              icon: "fa-solid fa-road",
              trend: "18 Nov • 11:00 AM",
              trendType: "up",
              foot: "Multistrada V4 RS",
            },
            {
              label: "Scottish NC500 Tour",
              value: "May 2027",
              icon: "fa-solid fa-mountain-sun",
              trend: "VIP Slot Reserved",
              trendType: "up",
              foot: "Support Van Included",
            },
          ],
          tableTitle: "Upcoming Track Days, Expeditions & Showroom Test Rides",
          tableHeaders: [
            "Booking Ref",
            "Event / Circuit",
            "Date & Time",
            "Assigned Motorcycle",
            "Group / Tier",
            "Scrutineering",
            "Action",
          ],
          tableRows: [
            [
              "TRK-SIL-409",
              "Silverstone GP Circuit Day",
              "24 Nov 2026 • 07:30",
              "Panigale V4R Corsa",
              "Advanced (Red Group)",
              { text: "Tech Passed", type: "success" },
              "Boarding Pass",
            ],
            [
              "DEMO-LDN-112",
              "Fitzrovia Private Demo Route",
              "18 Nov 2026 • 11:00",
              "Ducati Multistrada V4 RS",
              "1-on-1 Outrider",
              { text: "Licence Verified", type: "success" },
              "Route GPX",
            ],
            [
              "TRK-DON-518",
              "Donington Park Winter Apex",
              "12 Dec 2026 • 08:00",
              "Speed Triple 1200 RR",
              "Intermediate+ (Amber)",
              { text: "Noise Check Due", type: "warning" },
              "Manage Slot",
            ],
            [
              "EXP-SCT-207",
              "Highlands 500 Telemetry Tour",
              "14 May 2027 • 06:30",
              "KTM 1390 Super Adv R",
              "VIP All-Inclusive",
              { text: "Deposit Paid", type: "info" },
              "Itinerary PDF",
            ],
          ],
          cards: [
            {
              img: "../assets/images/home/event-2.webp",
              badge: "Pro Coaching",
              tag: "BSB Instructor",
              title: "1-on-1 On-Board Video & Data Analysis",
              text: "Pair with former British Superbike rider Christian Iddon for sector-by-sector braking and apex speed overlay.",
              specs: [
                ["Camera Rig", "4K 60fps Front & Rear Gyro"],
                ["AIM Solo 2 DL", "CAN-Bus Direct Hookup"],
                ["Session Debrief", "30 Min After Each Run"],
              ],
              progressLabel: "Personal Best Lap Target (1:58.4)",
              progressVal: 92,
              btnText: "Reserve Coach",
            },
            {
              img: "../assets/images/home/gear-helmet.webp",
              badge: "FIM Homologated",
              tag: "Race Gear Vault",
              title: "Dainese D-Air & AGV Pista GP RR Kit",
              text: "Your custom-measured kangaroo leather airbag suit is sanitized, charged, and staged in Fitzrovia Locker #09.",
              specs: [
                ["D-Air Airbag Charge", "100% Dual-Deployment Ready"],
                ["Visor Prep", "Dark Smoke + Tear-Offs Fitted"],
                ["Boot & Glove Spec", "Axial D1 Air + Full Metal 6"],
              ],
              progressLabel: "Gear Safety Inspection",
              progressVal: 100,
              btnText: "Request Kit Prep",
            },
            {
              img: "../assets/images/adventure/tour-scotland.webp",
              badge: "5-Day Expedition",
              tag: "Adventure Division",
              title: "Scottish Highlands NC500 Support Pack",
              text: "Heated grips, aluminium panniers, Garmin Zumo XT2 waypoints, and luxury Highland lodge accommodation confirmed.",
              specs: [
                ["Total Route Distance", "840 Miles • 5 Stages"],
                ["Chase Vehicle", "Sprinter Workshop + Spare Bike"],
                ["Tire Spec", "Pirelli Scorpion Rally STR"],
              ],
              progressLabel: "Expedition Pack Readiness",
              progressVal: 80,
              btnText: "View Waypoints",
            },
          ],
        },
        {
          id: "finance",
          label: "PCP Finance & Invoices",
          icon: "fa-solid fa-file-invoice-dollar",
          tag: "5.9% APR",
          kicker: "FCA Regulated Showroom Finance",
          title: "PCP Agreements, Invoices & Equity Vault",
          desc: "Review your personal contract purchase schedule, download VAT receipts, and calculate live part-exchange equity toward your next superbike.",
          primaryBtn: "Get Settlement Quote",
          secondaryBtn: "Download Tax Statement",
          kpis: [
            {
              label: "Monthly Instalment",
              value: "£389.00",
              icon: "fa-solid fa-calendar-check",
              trend: "Direct Debit Active",
              trendType: "up",
              foot: "Next: 01 Dec 2026",
            },
            {
              label: "Remaining Balance",
              value: "£14,250.00",
              icon: "fa-solid fa-scale-balanced",
              trend: "18 of 36 Months Paid",
              trendType: "up",
              foot: "GFV: £11,400",
            },
            {
              label: "Estimated Trade Equity",
              value: "+£4,650.00",
              icon: "fa-solid fa-chart-line",
              trend: "Above Settlement",
              trendType: "hot",
              foot: "CAP Black Book Live",
            },
            {
              label: "VIP APR Rate Tier",
              value: "5.9% APR",
              icon: "fa-solid fa-percent",
              trend: "Preferential Member",
              trendType: "up",
              foot: "Black Horse Moto",
            },
          ],
          tableTitle: "Showroom Finance Schedule & Official VAT Invoices",
          tableHeaders: [
            "Invoice / Ref #",
            "Date Issued",
            "Description",
            "Payment Method",
            "Net Amount",
            "VAT (20%)",
            "Status",
            "Action",
          ],
          tableRows: [
            [
              "INV-STK-2026-941",
              "01 Nov 2026",
              "PCP Monthly Instalment #18 (Panigale V4R)",
              "Barclays Direct Debit",
              "£324.17",
              "£64.83",
              { text: "Cleared", type: "success" },
              "Receipt PDF",
            ],
            [
              "INV-STK-2026-882",
              "18 Oct 2026",
              "Akrapovic Titanium Exhaust & Dyno Map",
              "Amex Platinum •4019",
              "£3,450.00",
              "£690.00",
              { text: "Paid in Full", type: "success" },
              "Receipt PDF",
            ],
            [
              "INV-STK-2026-815",
              "02 Oct 2026",
              "Silverstone GP VIP Pit Box Allocation",
              "Amex Platinum •4019",
              "£249.17",
              "£49.83",
              { text: "Paid in Full", type: "success" },
              "Receipt PDF",
            ],
            [
              "INV-STK-2026-790",
              "15 Sep 2026",
              "2027 BMW M 1000 RR Build Slot Deposit",
              "Faster Payments Escrow",
              "£2,083.33",
              "£416.67",
              { text: "Held in Escrow", type: "info" },
              "Escrow Cert",
            ],
          ],
          cards: [
            {
              img: "../assets/images/home/bike-4.webp",
              badge: "Instant Upgrade",
              tag: "Equity Rollover",
              title: "Upgrade to 2027 Panigale V4 S Carbon",
              text: "Roll your £4,650 positive trade-in equity directly into a 2027 model with zero additional cash deposit required.",
              specs: [
                ["Current Trade Value", "£28,900 Guaranteed"],
                ["Projected Monthly", "£395 / mo (36 Months)"],
                ["APR Lock Guarantee", "5.9% Valid for 30 Days"],
              ],
              progressLabel: "Contract Optimal Upgrade Window",
              progressVal: 85,
              btnText: "Generate PCP Quote",
            },
            {
              img: "../assets/images/about/facility-vault.webp",
              badge: "FCA Protected",
              tag: "Return-to-Invoice GAP",
              title: "Combined GAP & Track Day Cover",
              text: "Covers 100% of original showroom invoice price plus £2,500 helmet and leathers protection on UK circuits.",
              specs: [
                ["Policy Number", "GAP-LON-772190"],
                ["Indemnity Limit", "£45,000 Full Replacement"],
                ["Track Excess Waiver", "Included for ACU Days"],
              ],
              progressLabel: "Policy Term Remaining (18 Mo)",
              progressVal: 50,
              btnText: "Policy Document",
            },
            {
              img: "../assets/images/home/gear-jacket.webp",
              badge: "0% APR Gear",
              tag: "Accessory Finance",
              title: "Bespoke Apparel & Exhaust Line",
              text: "Spread OEM carbon bodywork, Ohlins upgrades, and Dainese custom race suits over 12 interest-free payments.",
              specs: [
                ["Available Credit Line", "£6,500 Pre-Approved"],
                ["Interest Rate", "0.0% APR for 12 Months"],
                ["Showroom Discount", "15% VIP Member Off RRP"],
              ],
              progressLabel: "Credit Facility Available",
              progressVal: 100,
              btnText: "Browse OEM Catalog",
            },
          ],
        },
        {
          id: "service",
          label: "Service & Maintenance Log",
          icon: "fa-solid fa-screwdriver-wrench",
          tag: "Stamped",
          kicker: "Digital Service Book & Workshop History",
          title: "Certified Workshop Service & Maintenance Ledger",
          desc: "Access your digital manufacturer service stamps, valve-clearance records, and book enclosed collection from your home or office.",
          primaryBtn: "Book Workshop Service",
          secondaryBtn: "Download Service Book",
          kpis: [
            {
              label: "Service Book Status",
              value: "100% Stamped",
              icon: "fa-solid fa-award",
              trend: "Full Main Dealer",
              trendType: "up",
              foot: "Digital Blockchain Verified",
            },
            {
              label: "Desmo Valve Check",
              value: "In 4,200 mi",
              icon: "fa-solid fa-gears",
              trend: "15,000 Mile Interval",
              trendType: "up",
              foot: "Zero Shims Needed Last",
            },
            {
              label: "Brake Fluid & Bleed",
              value: "Motul RBF 660",
              icon: "fa-solid fa-droplet",
              trend: "328°C Dry Boiling",
              trendType: "hot",
              foot: "Flushed 08 Nov 2026",
            },
            {
              label: "Ceramic Paint Shield",
              value: "Gtechniq 9H",
              icon: "fa-solid fa-wand-magic-sparkles",
              trend: "5-Year Guarantee",
              trendType: "up",
              foot: "Hydrophobic Active",
            },
          ],
          tableTitle: "Official Fitzrovia Workshop Service & Inspection Ledger",
          tableHeaders: [
            "Job Card #",
            "Completion Date",
            "Motorcycle",
            "Odometer",
            "Service Package",
            "Master Technician",
            "Total Cost",
            "Action",
          ],
          tableRows: [
            [
              "JOB-FTZ-4109",
              "08 Nov 2026",
              "Panigale V4R Corsa",
              "4,150 mi",
              "Annual Factory Service + Motul 300V + Brake Flush",
              "Lorenzo Rossi",
              "£485.00",
              "Inspection Sheet",
            ],
            [
              "JOB-FTZ-3892",
              "19 Sep 2026",
              "Speed Triple 1200 RR",
              "2,800 mi",
              "Annual Service + Pirelli Supercorsa SP V4 Pair",
              "Declan Callahan",
              "£690.00",
              "Inspection Sheet",
            ],
            [
              "JOB-FTZ-3410",
              "14 May 2026",
              "Panigale V4R Corsa",
              "1,920 mi",
              "Pre-Track 42-Point Safety & Suspension Calibration",
              "Lorenzo Rossi",
              "£220.00",
              "Inspection Sheet",
            ],
            [
              "JOB-FTZ-2988",
              "10 Feb 2026",
              "Panigale V4R Corsa",
              "620 mi",
              "First 600-Mile Running-In Service & RPM Unlock",
              "Harpreet Patel",
              "£310.00",
              "Digital Stamp",
            ],
          ],
          cards: [
            {
              img: "../assets/images/about/team-1.webp",
              badge: "Master Certified",
              tag: "Lead Technician",
              title: "Lorenzo Rossi • Borgo Panigale Master",
              text: "14 years factory superbike experience.Personally oversees every Desmodromic valve check and dry-clutch assembly.",
              specs: [
                ["Accreditation", "Ducati & Ohlins Master Tech"],
                ["Workshop Ramp", "Bay #1 • Clean Room"],
                ["Video Health Check", "Sent via Encrypted Link"],
              ],
              progressLabel: "Customer Satisfaction Rating",
              progressVal: 100,
              btnText: "Watch Health Video",
            },
            {
              img: "../assets/images/home/gear-boots.webp",
              badge: "Winter Care",
              tag: "Detox & Storage",
              title: "ACF-50 Winter Protection & Valet",
              text: "Ultrasonic chain bath, ACF-50 atomized corrosion barrier, and heated subterranean storage bay option.",
              specs: [
                ["Treatment Duration", "Half-Day Studio Session"],
                ["Chain Lubrication", "Motul C5 Paste + Laser Align"],
                ["Courtesy Bike", "Scrambler Icon Provided"],
              ],
              progressLabel: "Winter Slot Availability",
              progressVal: 72,
              btnText: "Reserve Valet Slot",
            },
            {
              img: "../assets/images/home/tech-spotlight.webp",
              badge: "Door-to-Door",
              tag: "Enclosed Logistics",
              title: "London & Home Counties Collection",
              text: "Our air-ride Mercedes Sprinter collects your motorcycle in a wheel-chock cradle and returns it fully detailed.",
              specs: [
                ["Transit Insurance", "£100,000 Goods-in-Transit"],
                ["Collection Radius", "M25 & 60 Miles Free for VIP"],
                ["Real-Time GPS", "Live Van Tracking Link"],
              ],
              progressLabel: "Next Week Van Capacity",
              progressVal: 85,
              btnText: "Book Van Pickup",
            },
          ],
        },
      ],
    },

    "VIP Collector": {
      roleKey: "VIP Collector",
      roleLabel: "VIP Homologation Collector",
      portalTitle:
        'Stackly <span class="text-main">Collector Vault</span> Command',
      menuHeading: "Homologation & Vault Menu",
      defaultUser: "Lord Julian Vance",
      defaultEmail: "collector@stacklymotors.co.uk",
      sections: [
        {
          id: "overview",
          label: "Homologation Vault Overview",
          icon: "fa-solid fa-crown",
          tag: "Tier 1",
          kicker: "Fitzrovia Subterranean Collector Vault",
          title: "Homologation Portfolio & Climate Vault Command",
          desc: "Oversee your numbered factory superbikes, monitor 24/7 subterranean humidity/temperature telemetry, and lock in 2027 limited-series build quotas.",
          primaryBtn: "Schedule Private Viewing",
          secondaryBtn: "Download Valuation Dossier",
          kpis: [
            {
              label: "Vault Portfolio Value",
              value: "£284,500",
              icon: "fa-solid fa-gem",
              trend: "+14.8% YoY Appreciation",
              trendType: "up",
              foot: "Lloyd's Agreed Value",
            },
            {
              label: "Numbered Machines Held",
              value: "4 Collector Bikes",
              icon: "fa-solid fa-warehouse",
              trend: "100% Matching #",
              trendType: "hot",
              foot: "Bays V-04 to V-07",
            },
            {
              label: "2027 Factory Quotas",
              value: "2 Priority Slots",
              icon: "fa-solid fa-key",
              trend: "Founder Priority",
              trendType: "up",
              foot: "Bespoke Livery Unlocked",
            },
            {
              label: "Vault Climate Telemetry",
              value: "18.5°C / 45% RH",
              icon: "fa-solid fa-temperature-half",
              trend: "Zero Variance",
              trendType: "up",
              foot: "HEPA Positive Pressure",
            },
          ],
          tableTitle: "Subterranean Climate Vault Holdings & Provenance Ledger",
          tableHeaders: [
            "Vault Bay",
            "Numbered Edition",
            "Model & Specification",
            "Mileage",
            "Climate / CTEK Status",
            "Agreed Valuation",
            "Action",
          ],
          tableRows: [
            [
              "BAY V-04",
              "#008 / 250 Worldwide",
              "Stackly V4 Superleggera Carbon",
              "14 Delivery Mi",
              { text: "18.5°C • LiFePO4 100%", type: "success" },
              "£98,000",
              "Provenance File",
            ],
            [
              "BAY V-05",
              "#019 / 100 Worldwide",
              "MV Agusta F4 Claudio Final Edition",
              "0 Crate Mi",
              { text: "Nitrogen Sealed Pod", type: "success" },
              "£74,500",
              "Provenance File",
            ],
            [
              "BAY V-06",
              "#042 / 300 Worldwide",
              "BMW M 1000 RR 50 Years M Anniversary",
              "112 Track Mi",
              { text: "18.5°C • Tender Active", type: "success" },
              "£42,000",
              "Provenance File",
            ],
            [
              "BAY V-07",
              "#003 / 050 UK Spec",
              "Bimota KB4 RC Tamburini Tribute",
              "48 Dry Mi",
              { text: "18.5°C • Ready to Ride", type: "primary" },
              "£70,000",
              "Request Prep",
            ],
          ],
          cards: [
            {
              img: "../assets/images/home/bike-4.webp",
              badge: "Edition #008/250",
              tag: "Carbon Monocoque",
              title: "V4 Superleggera Biplane Wing Spec",
              text: "Full structural carbon-fiber frame, swingarm, and BST wheels. Accompanied by signed factory build book and titanium plaque.",
              specs: [
                ["Dry Weight", "152.2 kg (Race Kit Fitted)"],
                ["Power-to-Weight", "1.54 HP / kg Record"],
                ["Certificate Status", "Blockchain & Factory Sealed"],
              ],
              progressLabel: "5-Year Appreciation Trajectory",
              progressVal: 96,
              btnText: "Inspect Telemetry",
            },
            {
              img: "../assets/images/about/facility-vault.webp",
              badge: "Biometric Vault",
              tag: "Subterranean W1W",
              title: "24/7 Live Bay Camera & Sensor Feed",
              text: "Your four private glass-enclosed bays feature continuous CTEK lithium conditioning and monthly dry-sump oil circulation.",
              specs: [
                ["Security Clearance", "Iris + RFID Key Fob #VIP-04"],
                ["Fire Suppression", "Inergen Clean-Agent Gas"],
                ["Last Curator Check", "Today • 08:00 GMT"],
              ],
              progressLabel: "Environmental Stability Index",
              progressVal: 100,
              btnText: "Open Vault Feed",
            },
            {
              img: "../assets/images/events/featured-event.webp",
              badge: "Goodwood FoS",
              tag: "Collector Invitation",
              title: "Goodwood Hillclimb Paddock Showcase",
              text: "Invitation to display your #008 Superleggera in the Michelin Supercar Paddock with VIP Drivers Club hospitality.",
              specs: [
                ["Event Dates", "09–12 July 2027"],
                ["Enclosed Transport", "Complimentary Return"],
                ["Hospitality Passes", "2x Kennels & Drivers Club"],
              ],
              progressLabel: "Entry Confirmation Status",
              progressVal: 90,
              btnText: "Confirm Entry",
            },
          ],
        },
        {
          id: "allocations",
          label: "Numbered Build Allocations",
          icon: "fa-solid fa-medal",
          tag: "2 Quotas",
          kicker: "Factory Custom Works & Bespoke Quotas",
          title: "2027 Numbered Build Quotas & Factory Handovers",
          desc: "Track your bespoke factory build slots from engine assembly and carbon autoclave curing to air-freight arrival in London.",
          primaryBtn: "Configure Custom Livery",
          secondaryBtn: "View Escrow Agreement",
          kpis: [
            {
              label: "Active Build Quotas",
              value: "2 Reserved",
              icon: "fa-solid fa-certificate",
              trend: "Chassis #012 Requested",
              trendType: "hot",
              foot: "2027 Model Year",
            },
            {
              label: "Escrow Deposits Held",
              value: "£25,000.00",
              icon: "fa-solid fa-vault",
              trend: " Coutts Client Escrow",
              trendType: "up",
              foot: "100% Ring-Fenced",
            },
            {
              label: "Factory VIP Visit",
              value: "14 Jan 2027",
              icon: "fa-solid fa-plane-departure",
              trend: "Bologna Private Jet",
              trendType: "up",
              foot: "Design Studio Sign-Off",
            },
            {
              label: "Next Delivery ETA",
              value: "18 Mar 2027",
              icon: "fa-solid fa-truck-fast",
              trend: "Air Freight Crate",
              trendType: "up",
              foot: "Heathrow VIP Cargo",
            },
          ],
          tableTitle: "Factory Production Milestones & Bespoke Build Tracker",
          tableHeaders: [
            "Allocation ID",
            "Model & Edition",
            "Requested Number",
            "Current Build Stage",
            "Paint / Carbon Spec",
            "Estimated Arrival",
            "Action",
          ],
          tableRows: [
            [
              "QUOTA-27-01",
              "Stackly Desmosedici GP26 Replica",
              "#012 / 099",
              "Carbon Frame Autoclave Curing",
              "Exposed Matte Twill + Gold Leaf",
              "18 Mar 2027",
              "Build Photos",
            ],
            [
              "QUOTA-27-02",
              "Aston Martin x Brough Superior AMB 002",
              "#005 / 088",
              "CNC Billet Chassis Machining",
              "Verdant Jade & Titanium",
              "22 Jun 2027",
              "Spec Sheet",
            ],
            [
              "QUOTA-26-19",
              "Triumph Rocket 3 Evel Knievel #001",
              "#001 / 250 UK",
              "PDI Completed in Fitzrovia",
              "Hand-Painted Chrome & Stars",
              "Ready Now",
              "Book Handover",
            ],
            [
              "QUOTA-27-09",
              "MV Agusta Superveloce 1000 Serie Oro",
              "#027 / 300",
              "Priority Waitlist #1 (Confirmed)",
              "AGO Red & Silver Carbon",
              "Sep 2027",
              "Lock Deposit",
            ],
          ],
          cards: [
            {
              img: "../assets/images/home/bike-5.webp",
              badge: "Bespoke Atelier",
              tag: "One-Off Paintwork",
              title: "Centro Stile Custom Livery Session",
              text: "Work directly with senior factory designers to match your motorcycle paintwork to your supercar collection.",
              specs: [
                ["Paint Sample Plates", "3 Aluminum Speedforms Ready"],
                ["Seat Upholstery", "Poltrona Frau Perforated Hide"],
                ["Triple Clamp Engraving", "Laser-Etched Collector Name"],
              ],
              progressLabel: "Specification Lock-In Progress",
              progressVal: 82,
              btnText: "Approve Speedform",
            },
            {
              img: "../assets/images/home/bike-6.webp",
              badge: "Crate Unboxing",
              tag: "White-Glove Reveal",
              title: "Private After-Hours Unboxing Ceremony",
              text: "Have your factory wooden crate opened in our champagne lounge with professional photography and time-lapse video.",
              specs: [
                ["Original Factory Crate", "Retained & Plaqued in Vault"],
                ["Master Tech Present", "Lorenzo Rossi Personal Brief"],
                ["Media Package", "Hardbound Leather Build Book"],
              ],
              progressLabel: "Handover Suite Preparation",
              progressVal: 95,
              btnText: "Reserve Evening",
            },
            {
              img: "../assets/images/about/award-1.webp",
              badge: "Matching Numbers",
              tag: "Collector Registry",
              title: "Matching Edition Number Reservation",
              text: "Your collector profile holds first refusal on edition #008 and #012 across all future Stackly franchise releases.",
              specs: [
                ["Registered Numbers", "#008, #012, #019"],
                ["Franchise Priority", "Tier-1 Founder Syndicate"],
                ["Resale Right of First", "Protected Provenance Chain"],
              ],
              progressLabel: "Registry Priority Standing",
              progressVal: 100,
              btnText: "Manage Registry",
            },
          ],
        },
        {
          id: "storage",
          label: "Climate Storage & Provenance",
          icon: "fa-solid fa-temperature-arrow-down",
          tag: "Optimal",
          kicker: "Museum-Grade Preservation Telemetry",
          title: "Subterranean Climate Pod & Provenance Telemetry",
          desc: "Real-time environmental monitoring, ethanol-free fuel stabilization logs, and concours detailing records for your stored collection.",
          primaryBtn: "Request Exercise Cycle",
          secondaryBtn: "Download Climate Log",
          kpis: [
            {
              label: "Vault Temperature",
              value: "18.5°C ±0.2°",
              icon: "fa-solid fa-thermometer",
              trend: "Museum Spec",
              trendType: "up",
              foot: "24/7 Dual Chiller",
            },
            {
              label: "Relative Humidity",
              value: "45.0% RH",
              icon: "fa-solid fa-droplet-slash",
              trend: "Zero Corrosion Risk",
              trendType: "up",
              foot: "Desiccant Dehumidifier",
            },
            {
              label: "Fuel System State",
              value: "Aspen 4 Alkylate",
              icon: "fa-solid fa-gas-pump",
              trend: "0% Ethanol Storage",
              trendType: "up",
              foot: "5-Year Stable",
            },
            {
              label: "Tire Flat-Spot Cradles",
              value: "4 / 4 Elevated",
              icon: "fa-solid fa-up-down",
              trend: "Bursig Paddock Stands",
              trendType: "up",
              foot: "Suspension Unloaded",
            },
          ],
          tableTitle: "Monthly Preservation & Mechanical Exercise Log",
          tableHeaders: [
            "Bay #",
            "Motorcycle",
            "Battery Voltage",
            "Fuel System",
            "Thermal Warm-Up Cycle",
            "PPF / Ceramic Grade",
            "Action",
          ],
          tableRows: [
            [
              "BAY V-04",
              "V4 Superleggera #008",
              "13.6V Li-Ion Optimal",
              "Aspen 4 Stabilized",
              "Completed 05 Nov (85°C Oil)",
              { text: "XPEL Ultimate Plus", type: "success" },
              "View Telemetry",
            ],
            [
              "BAY V-05",
              "MV Agusta F4 Claudio #019",
              "Disconnected (Dry)",
              "Factory Dry Tank",
              "Zero-Mile Preservation",
              { text: "Museum Capsule", type: "info" },
              "View Telemetry",
            ],
            [
              "BAY V-06",
              "BMW M 1000 RR #042",
              "13.5V CTEK Pro",
              "Aspen 4 Stabilized",
              "Completed 05 Nov (88°C Oil)",
              { text: "Gtechniq Crystal 9H", type: "success" },
              "View Telemetry",
            ],
            [
              "BAY V-07",
              "Bimota KB4 RC #003",
              "13.6V CTEK Pro",
              "VP Racing Storage",
              "Completed 05 Nov (84°C Oil)",
              { text: "Full Body PPF", type: "success" },
              "View Telemetry",
            ],
          ],
          cards: [
            {
              img: "../assets/images/about/facility-dyno.webp",
              badge: "Dry-Sump Care",
              tag: "Mechanical Preservation",
              title: "Monthly Roller Thermal Exercise",
              text: "Every 30 days, active collection bikes are brought to operating temperature on our low-load dyno to lubricate seals.",
              specs: [
                ["Oil Temp Target", "85°C Full Moisture Boil-Off"],
                ["Gearbox Cycling", "1st–6th Low-Load Actuation"],
                ["Seal Conditioning", "Ohlins Fork Stanchion Wipe"],
              ],
              progressLabel: "November Cycle Completion",
              progressVal: 100,
              btnText: "Download Video",
            },
            {
              img: "../assets/images/about/heritage-main.webp",
              badge: "Concours Grade",
              tag: "Paint & Carbon Studio",
              title: "Self-Healing XPEL Stealth & Gloss PPF",
              text: "Computer-cut paint protection film applied to every carbon winglet, tank panel, and magnesium lower fairing.",
              specs: [
                ["Film Thickness", "8.5 Mil Optical Clear TPU"],
                ["Gloss Meter Reading", "98.4 GU Mirror Finish"],
                ["Warranty Cert", "10-Year Non-Yellowing"],
              ],
              progressLabel: "Surface Protection Rating",
              progressVal: 100,
              btnText: "View Paint Report",
            },
            {
              img: "../assets/images/about/award-2.webp",
              badge: "Lloyd's Syndicate",
              tag: "Agreed-Value Cover",
              title: "Fine Art & Collector Motorcycle Policy",
              text: "Underwritten at Lloyd's of London with zero depreciation, automatic 15% market-appreciation buffer, and worldwide transit.",
              specs: [
                ["Total Insured Value", "£284,500 Agreed Sum"],
                ["Vault Storage Rate", "0.35% Preferential Tariff"],
                ["Road & Parade Use", "Up to 1,000 Miles / Year"],
              ],
              progressLabel: "Annual Valuation Audit",
              progressVal: 95,
              btnText: "Certificate PDF",
            },
          ],
        },
        {
          id: "acquisitions",
          label: "Private Auction & Acquisition",
          icon: "fa-solid fa-gavel",
          tag: "3 Off-Market",
          kicker: "Confidential Collector Trading Desk",
          title: "Off-Market Homologation Sourcing & Sealed Bids",
          desc: "Access private treaty superbikes, ex-MotoGP/WSBK factory works chassis, and confidential collector-to-collector acquisitions.",
          primaryBtn: "Submit Sealed Bid",
          secondaryBtn: "Request Sourcing Brief",
          kpis: [
            {
              label: "Off-Market Vault Lots",
              value: "6 Private Bikes",
              icon: "fa-solid fa-lock",
              trend: "NDA Verified Access",
              trendType: "hot",
              foot: "Fitzrovia Private Room",
            },
            {
              label: "Your Active Sealed Bids",
              value: "2 Submitted",
              icon: "fa-solid fa-file-signature",
              trend: "£92,000 Highest Bid",
              trendType: "up",
              foot: "Closes in 4 Days",
            },
            {
              label: "Provenance Verification",
              value: "100% Factory",
              icon: "fa-solid fa-magnifying-glass-chart",
              trend: "Borgo & Hinckley Cert",
              trendType: "up",
              foot: "Metallurgical X-Ray",
            },
            {
              label: "Buyer Buyers-Premium",
              value: "2.5% VIP Cap",
              icon: "fa-solid fa-handshake",
              trend: "vs 15% Public Auction",
              trendType: "up",
              foot: "Direct Escrow Settlement",
            },
          ],
          tableTitle:
            "Confidential Off-Market Collector Offerings (NDA Protected)",
          tableHeaders: [
            "Lot Code",
            "Year & Machine",
            "Provenance / Edition",
            "Odometer",
            "Guide Valuation",
            "Your Bid Status",
            "Action",
          ],
          tableRows: [
            [
              "LOT-PVT-01",
              "2008 Ducati Desmosedici RR",
              "#0412/1500 • Team Sticker Kit • 1 Owner",
              "210 Miles",
              "£68,000 – £74,000",
              { text: "Bid £71,500 Leading", type: "success" },
              "Increase Bid",
            ],
            [
              "LOT-PVT-02",
              "2015 Honda RC213V-S (Sports Kit)",
              "Full 215 BHP Titanium Race Kit Fitted",
              "85 Miles",
              "£155,000 – £170,000",
              { text: "Under Inspection", type: "info" },
              "Dossier PDF",
            ],
            [
              "LOT-PVT-03",
              "2022 Aprilia RSV4 XTrenta",
              "#009/100 • Trenta Factory Track Spec",
              "0 Crate Mi",
              "£54,000 – £58,000",
              { text: "Bid £55,000 Pending", type: "warning" },
              "View Offer",
            ],
            [
              "LOT-PVT-04",
              "1994 Ducati 916 Senna I",
              "#088/300 • Varese Castiglioni Cert",
              "1,420 Miles",
              "£42,000 – £46,000",
              { text: "Available Now", type: "primary" },
              "Reserve Viewing",
            ],
          ],
          cards: [
            {
              img: "../assets/images/home/hero-slide-1.webp",
              badge: "Ex-Works WSBK",
              tag: "Factory Race Department",
              title: "2024 Aruba.it WSBK F24 Test Mule",
              text: "Authentic World Superbike Championship factory chassis with Magneti Marelli MLE electronics and Ohlins RSP40.",
              specs: [
                ["Corse Certificate", "Signed by Gigi Dall'Igna"],
                ["Engine Life Remaining", "1,200 Track km Post-Rebuild"],
                ["Spares Package", "3 Sets Marchesini Forged Mg"],
              ],
              progressLabel: "Provenance Audit Completion",
              progressVal: 100,
              btnText: "Request NDA Pack",
            },
            {
              img: "../assets/images/about/award-3.webp",
              badge: "NOVA & UK Reg",
              tag: "Global Import Desk",
              title: "Swiss & Japanese Collection Importation",
              text: "Turnkey air-freight, HMRC NOVA customs clearance, and UK historic/daylight MOT registration handled in-house.",
              specs: [
                ["Customs Bond", "HMRC Authorized Carnet"],
                ["Air Cargo Partner", "Lufthansa Cargo Charter"],
                ["Delivery Turnaround", "7–10 Days Door-to-Vault"],
              ],
              progressLabel: "Import Compliance Clearance",
              progressVal: 94,
              btnText: "Calculate Duty",
            },
            {
              img: "../assets/images/about/facility-lounge.webp",
              badge: "Private Suite",
              tag: "Champagne Viewing",
              title: "Book the Subterranean Viewing Turntable",
              text: "Inspect any off-market lot on our illuminated 360-degree turntable with our Master Technician and paint depth gauge.",
              specs: [
                ["Suite Privacy", "NDA Closed-Door Session"],
                ["Diagnostic Access", "Full Borescope & Compression"],
                ["Hospitality", "Dom Pérignon & Espresso Bar"],
              ],
              progressLabel: "Private Suite Availability",
              progressVal: 88,
              btnText: "Book Turntable",
            },
          ],
        },
        {
          id: "concierge",
          label: "VIP Hospitality & Concierge",
          icon: "fa-solid fa-champagne-glasses",
          tag: "VIP Pass",
          kicker: "Invitation-Only Paddock & Aviation Concierge",
          title: "Collector Hospitality, Heli-Transfers & Factory Tours",
          desc: "Coordinate helicopter transfers to Silverstone and Isle of Man TT, private circuit buyouts, and midnight showroom openings.",
          primaryBtn: "RSVP VIP Calendar",
          secondaryBtn: "Contact Chief Butler",
          kpis: [
            {
              label: "Silverstone MotoGP Box",
              value: "2 VIP Passes",
              icon: "fa-solid fa-ticket",
              trend: "Ducati Lenovo Suite",
              trendType: "hot",
              foot: "Grid Walk Included",
            },
            {
              label: "Isle of Man TT Charter",
              value: "04 Jun 2027",
              icon: "fa-solid fa-helicopter",
              trend: "Battersea Heliport",
              trendType: "up",
              foot: "Creg-ny-Baa VIP Suite",
            },
            {
              label: "Private Track Buyout",
              value: "Portimão Algarve",
              icon: "fa-solid fa-sun",
              trend: "3-Day Winter Sun",
              trendType: "up",
              foot: "Bikes Shipped Ahead",
            },
            {
              label: "Midnight Showroom Key",
              value: "24/7 Active",
              icon: "fa-solid fa-key",
              trend: "After-Hours Access",
              trendType: "up",
              foot: "Sommelier On Call",
            },
          ],
          tableTitle: "Invitation-Only VIP Collector Hospitality Calendar",
          tableHeaders: [
            "Event Code",
            "Exclusive Experience",
            "Venue / Location",
            "Date",
            "Hospitality Tier",
            "Allocation",
            "Action",
          ],
          tableRows: [
            [
              "VIP-ALG-01",
              "Portimão Private Winter Superbike Test",
              "Autódromo do Algarve, Portugal",
              "19–21 Feb 2027",
              "Full Pit Box + 5-Star Resort",
              { text: "2 Riders Confirmed", type: "success" },
              "Flight Manifesto",
            ],
            [
              "VIP-IOM-04",
              "Isle of Man Senior TT Helicopter Day",
              "Battersea -> Douglas Helipad",
              "04 Jun 2027",
              "Mercury Club + Pit Lane",
              { text: "Seats Reserved", type: "success" },
              "Heli Boarding",
            ],
            [
              "VIP-GWD-07",
              "Goodwood Festival of Speed Drivers Club",
              "Goodwood Estate, West Sussex",
              "10 Jul 2027",
              "Drivers Club + Hillclimb Run",
              { text: "Vehicle Entered", type: "primary" },
              "Paddock Pass",
            ],
            [
              "VIP-BGP-11",
              "Borgo Panigale & Mugello Factory Experience",
              "Bologna & Scarperia, Italy",
              "18 Sep 2027",
              "CEO Dinner + MotoGP Box",
              { text: "Invitation Open", type: "warning" },
              "Confirm RSVP",
            ],
          ],
          cards: [
            {
              img: "../assets/images/events/event-card-1.webp",
              badge: "Portimão Charter",
              tag: "European Track Logistics",
              title: "Turnkey Algarve Winter Track Package",
              text: "We transport your superbike to Portugal in our race truck, set up your pit garage with tire warmers, and meet you at Faro.",
              specs: [
                ["Track Time", "Open Pit Lane (Max 25 Riders)"],
                ["Tyre Allocation", "4 Sets Pirelli Slicks Included"],
                ["Hotel Partner", "Bela Vista Hotel & Spa 5*"],
              ],
              progressLabel: "Race Truck Crate Loading",
              progressVal: 90,
              btnText: "View Bike Prep",
            },
            {
              img: "../assets/images/events/speaker-1.webp",
              badge: "Factory Legends",
              tag: "Private Dinners",
              title: "Fitzrovia Collector Black-Tie Dinner",
              text: "Intimate 16-seat dining among the homologation vault motorcycles with guest speaker Carl Fogarty MBE.",
              specs: [
                ["Date & Time", "28 Nov 2026 • 19:30 GMT"],
                ["Culinary Partner", "3-Michelin-Star Chef Tasting"],
                ["Charity Auction", "Signed 916 World Title Tank"],
              ],
              progressLabel: "Table Seating Confirmed",
              progressVal: 100,
              btnText: "View Menu & Wine",
            },
            {
              img: "../assets/images/home/hero-slide-2.webp",
              badge: "24/7 Chauffeur",
              tag: "Mayfair & Fitzrovia",
              title: "Range Rover SV & Heliport Transfers",
              text: "Complimentary chauffeur collection from any Central London postcode or Farnborough private jet terminal.",
              specs: [
                ["Fleet Vehicle", "Range Rover SV Autobiography"],
                ["Notice Required", "60 Minutes On-Demand"],
                ["Direct Concierge", "+44 20 7946 0991"],
              ],
              progressLabel: "Chauffeur Dispatch Readiness",
              progressVal: 100,
              btnText: "Request Car Now",
            },
          ],
        },
      ],
    },

    "Showroom Consultant": {
      roleKey: "Showroom Consultant",
      roleLabel: "Showroom Sales Consultant",
      portalTitle: 'Stackly <span class="text-main">Sales Floor</span> Command',
      menuHeading: "Showroom Sales & CRM Menu",
      defaultUser: "Marcus Vance",
      defaultEmail: "consultant@stacklymotors.co.uk",
      sections: [
        {
          id: "overview",
          label: "Sales Floor Command",
          icon: "fa-solid fa-chart-line",
          tag: "£412k MTD",
          kicker: "Fitzrovia Showroom Commercial Desk",
          title: "Daily Sales Floor, Appointments & Handover Command",
          desc: "Track monthly superbike deliveries, manage high-intent VIP showroom appointments, and monitor live PCP finance conversions.",
          primaryBtn: "Create Client Quote",
          secondaryBtn: "Export Daily Sales Log",
          kpis: [
            {
              label: "Monthly Showroom Revenue",
              value: "£412,800",
              icon: "fa-solid fa-sterling-sign",
              trend: "114% of Monthly Target",
              trendType: "up",
              foot: "18 Units Delivered",
            },
            {
              label: "Today's Appointments",
              value: "7 VIP Viewings",
              icon: "fa-solid fa-calendar-day",
              trend: "2 Handovers Ready",
              trendType: "hot",
              foot: "Lounge Suite Booked",
            },
            {
              label: "Active High-Intent Leads",
              value: "27 Prospects",
              icon: "fa-solid fa-user-tie",
              trend: "+6 Since Yesterday",
              trendType: "up",
              foot: "Avg Response: 8 mins",
            },
            {
              label: "PCP Finance Penetration",
              value: "74.2% Rate",
              icon: "fa-solid fa-chart-pie",
              trend: "£14,620 Commission",
              trendType: "up",
              foot: "Black Horse Tier 1",
            },
          ],
          tableTitle:
            "Today's Fitzrovia Showroom Appointments & Vehicle Handovers",
          tableHeaders: [
            "Time Slot",
            "Client Name",
            "Motorcycle of Interest",
            "Appointment Type",
            "Finance / Payment",
            "Deposit Status",
            "Action",
          ],
          tableRows: [
            [
              "10:00 AM",
              "Alexander Wright",
              "2026 Panigale V4 S Carbon",
              "New Handover (Bay #1)",
              "Black Horse PCP Approved",
              { text: "£5,000 Cleared", type: "success" },
              "Handover Pack",
            ],
            [
              "11:30 AM",
              "Charlotte Kensington",
              "Triumph Speed Triple 1200 RR",
              "Private Viewing + Demo",
              "Cash / Part-Ex S1000RR",
              { text: "Licence Verified", type: "success" },
              "Open Appraisal",
            ],
            [
              "02:00 PM",
              "Sebastian Moore",
              "BMW M 1000 XR Competition",
              "Bespoke Spec & Quote",
              "Santander PCP Proposal",
              { text: "£1,000 Hold", type: "primary" },
              "Launch Config",
            ],
            [
              "04:15 PM",
              "Dr. Vikram Singh",
              "Stackly V4R Homologation",
              "Collector Vault Tour",
              "Private Bank Wire",
              { text: "NDA Signed", type: "info" },
              "Prepare Vault",
            ],
          ],
          cards: [
            {
              img: "../assets/images/home/about-showroom.webp",
              badge: "Bay #1 & #2",
              tag: "Handover Lounge",
              title: "2 Unveiling Silk Covers Prepared",
              text: "Alexander Wright's V4 S and Ethan Cole's Multistrada V4 RS are detailed, fueled with Aspen 4, and plated in the reveal bay.",
              specs: [
                ["DVLA AFRL Tax", "Registered & Taxed 12 Mo"],
                ["Gift Pack Staged", "Carbon Key Box + Champagne"],
                ["PDI Sign-Off", "Master Tech Verified 08:30"],
              ],
              progressLabel: "Today's Handover Readiness",
              progressVal: 100,
              btnText: "Print Handover Sheet",
            },
            {
              img: "../assets/images/home/bike-1.webp",
              badge: "Hot Stock Alert",
              tag: "High-Margin Unit",
              title: "2026 Streetfighter V4 SP2 (#114)",
              text: "Just released from PDI onto the main window podium. 3 active client enquiries logged in CRM over the past 24 hours.",
              specs: [
                ["Retail Price", "£31,495 OTR"],
                ["Dry Clutch & BST", "Carbon Wheels Standard"],
                ["Floor Age", "2 Days on Podium"],
              ],
              progressLabel: "Enquiry Heat Index",
              progressVal: 94,
              btnText: "Assign to Client",
            },
            {
              img: "../assets/images/about/team-2.webp",
              badge: "Top Consultant",
              tag: "Q4 Leaderboard",
              title: "Commission & OEM Bonus Tracker",
              text: "You have unlocked the Q4 Superbike Accelerator tier (+2.5% retroactive bonus on all Akrapovic & Apparel upsells).",
              specs: [
                ["Units Sold Q4", "18 / 15 Target Achieved"],
                ["Accessory Attach Rate", "£2,480 Avg per Bike"],
                ["CSI Review Score", "4.98 / 5.00 Verified"],
              ],
              progressLabel: "Quarterly President's Club Goal",
              progressVal: 92,
              btnText: "View Commission Slip",
            },
          ],
        },
        {
          id: "leads",
          label: "Client Enquiries & CRM",
          icon: "fa-solid fa-users-viewfinder",
          tag: "9 Unread",
          kicker: "Showroom Lead Pipeline & Prospect CRM",
          title: "High-Intent Rider Enquiries & Follow-Up Pipeline",
          desc: "Convert web configurator submissions, part-exchange valuation requests, and VIP allocation leads into confirmed showroom orders.",
          primaryBtn: "Log New Walk-In",
          secondaryBtn: "Send WhatsApp Video",
          kpis: [
            {
              label: "New Web Enquiries",
              value: "9 Unread",
              icon: "fa-solid fa-envelope-open-text",
              trend: "SLA: Under 15 Mins",
              trendType: "hot",
              foot: "4 Configurator Builds",
            },
            {
              label: "Part-Ex Appraisals",
              value: "6 Pending",
              icon: "fa-solid fa-rotate",
              trend: "£88k Trade Volume",
              trendType: "up",
              foot: "CAP Live Linked",
            },
            {
              label: "Demo-to-Sale Ratio",
              value: "68.4% Close",
              icon: "fa-solid fa-bullseye",
              trend: "+11% vs Last Month",
              trendType: "up",
              foot: "Industry Benchmark: 35%",
            },
            {
              label: "Pipeline Deal Value",
              value: "£645,000",
              icon: "fa-solid fa-sack-dollar",
              trend: "27 Active Quotes",
              trendType: "up",
              foot: "Weighted Forecast",
            },
          ],
          tableTitle: "Active Rider Lead Pipeline & CRM Deal Stages",
          tableHeaders: [
            "Lead ID",
            "Prospect Name",
            "Contact Email",
            "Target Motorcycle",
            "Part-Exchange",
            "Deal Value",
            "Stage",
            "Action",
          ],
          tableRows: [
            [
              "CRM-9081",
              "Harrison Forde",
              "h.forde@mayfaircap.co.uk",
              "Stackly Panigale V4R Corsa",
              "2023 Aprilla RSV4 Factory",
              "£38,995",
              {
                text: "Deposit Requested",
                type: "hot" in {} ? "primary" : "primary",
              },
              "Send Pay Link",
            ],
            [
              "CRM-9078",
              "Eleanor Vance",
              "eleanor@vancearchitects.uk",
              "Triumph Thruxton Final Ed.",
              "None (Straight Purchase)",
              "£16,495",
              { text: "Quote Sent", type: "success" },
              "Follow Up",
            ],
            [
              "CRM-9074",
              "Liam O'Connor",
              "liam.oc@surreyracing.com",
              "BMW M 1000 RR Carbon",
              "2022 Yamaha R1M",
              "£34,200",
              { text: "Part-Ex Valuation", type: "warning" },
              "Approve Trade",
            ],
            [
              "CRM-9069",
              "Sophia Chen",
              "s.chen@canarywharf.io",
              "Ducati DesertX Rally",
              "2021 Triumph Tiger 900",
              "£19,850",
              { text: "Test Ride Booked", type: "info" },
              "View Profile",
            ],
          ],
          cards: [
            {
              img: "../assets/images/home/bike-2.webp",
              badge: "Walkaround Video",
              tag: "Personalised CitNOW",
              title: "4K Showroom Video Presentation",
              text: "Record a bespoke 2-minute walkaround and exhaust cold-start video for remote UK buyers with instant deposit checkout.",
              specs: [
                ["Videos Sent This Week", "14 Personalised Clips"],
                ["Watch Completion Rate", "91% Client Engagement"],
                ["Instant Deposit Link", "Stripe & Apple Pay Active"],
              ],
              progressLabel: "Video Conversion Performance",
              progressVal: 89,
              btnText: "Launch Video Tool",
            },
            {
              img: "../assets/images/adventure/adv-bike-1.webp",
              badge: "Corporate Fleet",
              tag: "B2B Expedition Account",
              title: "Alpine Tour Operator 6-Bike Order",
              text: "Negotiating fleet supply of 6x Multistrada V4 Rally units with full aluminium luggage and 24-month buyback guarantee.",
              specs: [
                ["Total Contract Value", "£148,500 Fleet Invoice"],
                ["Delivery Window", "February 2027 Batch"],
                ["Fleet Discount Tier", "8.5% Approved by Director"],
              ],
              progressLabel: "Contract Sign-Off Stage",
              progressVal: 80,
              btnText: "Open Fleet Deal",
            },
            {
              img: "../assets/images/home/cat-supersport.webp",
              badge: "Part-Ex Desk",
              tag: "Instant HPI & Valuation",
              title: "CAP Black Book & HPI Clear Check",
              text: "Run instant VIN history, finance settlement lookup, and service verification on incoming rider trade-ins.",
              specs: [
                ["HPI Check Credits", "Unlimited Dealer Account"],
                ["Underwriter Network", "12 Specialist Trade Buyers"],
                ["Avg Turnaround", "4 Minutes to Guaranteed Bid"],
              ],
              progressLabel: "Valuation Accuracy Score",
              progressVal: 96,
              btnText: "Run HPI Lookup",
            },
          ],
        },
        {
          id: "inventory",
          label: "Showroom Floor Inventory",
          icon: "fa-solid fa-boxes-stacked",
          tag: "42 Units",
          kicker: "Live Fitzrovia Floor & Vault Stock",
          title: "Showroom Floor Stock, VIN Allocations & Incoming Crates",
          desc: "Check real-time availability across Ground Floor Supersport, Basement Adventure Fleet, and incoming factory shipments.",
          primaryBtn: "Reserve VIN for Client",
          secondaryBtn: "Print Window Spec Sheet",
          kpis: [
            {
              label: "Total Physical Stock",
              value: "42 Motorcycles",
              icon: "fa-solid fa-warehouse",
              trend: "£1.18M Retail Value",
              trendType: "up",
              foot: "Fitzrovia W1W",
            },
            {
              label: "PDI Ready to Ride",
              value: "19 Units",
              icon: "fa-solid fa-bolt",
              trend: "Same-Day Handover",
              trendType: "hot",
              foot: "Tax & Plate Ready",
            },
            {
              label: "Reserved with Deposit",
              value: "14 Units",
              icon: "fa-solid fa-lock",
              trend: "Awaiting Collection",
              trendType: "up",
              foot: "Avg 5 Days to Collect",
            },
            {
              label: "Incoming Factory Crates",
              value: "9 In Transit",
              icon: "fa-solid fa-ship",
              trend: "ETA 4–7 Days",
              trendType: "up",
              foot: "3 Pre-Sold",
            },
          ],
          tableTitle: "Live Showroom Stock & VIN Allocation Register",
          tableHeaders: [
            "Stock #",
            "Model & Specification",
            "VIN Suffix",
            "Colourway",
            "OTR Price",
            "Showroom Zone",
            "Status",
            "Action",
          ],
          tableRows: [
            [
              "STK-26-101",
              "Stackly Panigale V4R Corsa",
              "...884920",
              "Factory Red / Exposed Carbon",
              "£38,995",
              "Main Window Podium",
              { text: "In Stock (PDI Done)", type: "success" },
              "Place Hold",
            ],
            [
              "STK-26-104",
              "BMW M 1000 RR Competition",
              "...331094",
              "Blackstorm Metallic / M",
              "£34,650",
              "Ground Floor Zone A",
              { text: "In Stock (PDI Done)", type: "success" },
              "Place Hold",
            ],
            [
              "STK-26-109",
              "Ducati Streetfighter V4 SP2",
              "...772118",
              "Winter Test Matte Carbon",
              "£31,495",
              "Ground Floor Zone A",
              { text: "Reserved (Wright)", type: "warning" },
              "View Order",
            ],
            [
              "STK-26-115",
              "KTM 1390 Super Adventure R",
              "...550912",
              "Factory Rally Orange/White",
              "£21,299",
              "Adventure Lower Deck",
              { text: "In Stock (PDI Done)", type: "success" },
              "Place Hold",
            ],
          ],
          cards: [
            {
              img: "../assets/images/home/bike-1.webp",
              badge: "Podium #1",
              tag: "Flagship Display",
              title: "Panigale V4R Corsa • £38,995 OTR",
              text: "Fitted with £4,800 worth of Ducati by Rizoma billet accessories and dry clutch open carbon cover.",
              specs: [
                ["Gross Dealer Margin", "£4,120 Inc. Accessories"],
                ["Stock Days on Floor", "6 Days"],
                ["Finance Example", "£429 / mo @ 5.9% APR"],
              ],
              progressLabel: "Showroom Display Spec Score",
              progressVal: 100,
              btnText: "Generate Quote",
            },
            {
              img: "../assets/images/adventure/adv-bike-2.webp",
              badge: "Adventure Deck",
              tag: "Expedition Ready",
              title: "Multistrada V4 Rally Radar • £26,895",
              text: "30-litre brushed aluminium tank, adaptive cruise radar, and spoked tubeless wheels ready for trans-continental touring.",
              specs: [
                ["Accessory Pack", "Enduro & Touring Pack Fitted"],
                ["Stock Days on Floor", "11 Days"],
                ["Demo Equivalent", "Available Outside Now"],
              ],
              progressLabel: "Touring Season Demand",
              progressVal: 87,
              btnText: "Generate Quote",
            },
            {
              img: "../assets/images/home/bike-4.webp",
              badge: "Used Approved",
              tag: "68-Point Certified",
              title: "2025 Aprilia RSV4 Factory 1100 • £19,495",
              text: "1,150 miles, one Fitzrovia collector owner, SC-Project exhaust, and 24-month Stackly Approved Warranty.",
              specs: [
                ["Preparation Cost", "£640 (New Supercorsa V4s)"],
                ["Retail Margin", "£2,350 Clear"],
                ["HPI & Provenance", "100% Clean • 2 Keys"],
              ],
              progressLabel: "Approved Used Readiness",
              progressVal: 100,
              btnText: "Generate Quote",
            },
          ],
        },
        {
          id: "financedesk",
          label: "PCP & HP Finance Desk",
          icon: "fa-solid fa-calculator",
          tag: "14 Approved",
          kicker: "FCA Automotive Finance Underwriting",
          title: "Client PCP & HP Finance Proposals & Underwriting",
          desc: "Submit instant credit proposals to Black Horse and Santander, structure balloon GFV payments, and generate FCA consumer duty disclosures.",
          primaryBtn: "New Finance Proposal",
          secondaryBtn: "FCA Disclosure Pack",
          kpis: [
            {
              label: "Approved Proposals",
              value: "14 This Month",
              icon: "fa-solid fa-file-circle-check",
              trend: "93% Acceptance Rate",
              trendType: "up",
              foot: "Prime Tier Riders",
            },
            {
              label: "Total Financed Volume",
              value: "£318,400",
              icon: "fa-solid fa-vault",
              trend: "+19% vs Oct",
              trendType: "up",
              foot: "Avg Advance: £22,740",
            },
            {
              label: "Headline VIP Rate",
              value: "5.9% APR",
              icon: "fa-solid fa-percent",
              trend: "Subsidised Campaign",
              trendType: "hot",
              foot: "24 & 36 Month PCP",
            },
            {
              label: "Pending e-Signatures",
              value: "3 Agreements",
              icon: "fa-solid fa-pen-nib",
              trend: "DocuSign Sent",
              trendType: "warn",
              foot: "Ready for Payout",
            },
          ],
          tableTitle: "Live Client Finance Proposals & Lender Decisions",
          tableHeaders: [
            "Proposal #",
            "Applicant Name",
            "Motorcycle",
            "Deposit / Trade",
            "Term & Type",
            "Monthly £",
            "Lender Status",
            "Action",
          ],
          tableRows: [
            [
              "FIN-8821",
              "Alexander Wright",
              "Panigale V4 S Carbon",
              "£6,500 Deposit",
              "36m PCP • 5.9%",
              "£368.40",
              { text: "Payout Complete", type: "success" },
              "Download Docs",
            ],
            [
              "FIN-8819",
              "Sebastian Moore",
              "BMW M 1000 XR Comp",
              "£4,200 Part-Ex",
              "36m PCP • 5.9%",
              "£312.15",
              { text: "Approved (e-Sign)", type: "primary" },
              "Resend Link",
            ],
            [
              "FIN-8814",
              "Marcus Aurelius",
              "Speed Triple 1200 RR",
              "£3,000 Deposit",
              "48m HP • 6.4%",
              "£349.80",
              { text: "Approved", type: "success" },
              "Print Schedule",
            ],
            [
              "FIN-8809",
              "Toby Wilkinson",
              "KTM 1390 Super Adv R",
              "£2,500 Deposit",
              "36m PCP • 5.9%",
              "£244.50",
              { text: "Proof of ID Due", type: "warning" },
              "Upload ID",
            ],
          ],
          cards: [
            {
              img: "../assets/images/about/award-1.webp",
              badge: "Black Horse Moto",
              tag: "Primary Lender Partner",
              title: "Instant API Credit Decisioning",
              text: "Direct integration with Lloyds Black Horse returns automated underwriting approvals in under 45 seconds for prime riders.",
              specs: [
                ["Max Advance Limit", "£75,000 Without Referral"],
                ["GFV Residual Boost", "+4% on Homologation Models"],
                ["e-Sign Payout Speed", "Same-Day BACS Transfer"],
              ],
              progressLabel: "Lender SLA Approval Speed",
              progressVal: 97,
              btnText: "Launch Portal",
            },
            {
              img: "../assets/images/about/award-2.webp",
              badge: "Santander Moto",
              tag: "0% Campaign Partner",
              title: "0% APR 24-Month Adventure Campaign",
              text: "Manufacturer-backed 0% APR Hire Purchase available on remaining 2026 Adventure touring inventory with 30% deposit.",
              specs: [
                ["Eligible Models", "Multistrada & Tiger 1200"],
                ["Minimum Deposit", "30% Cash or Part-Exchange"],
                ["Campaign Expiry", "31 December 2026"],
              ],
              progressLabel: "Subsidised Allocation Remaining",
              progressVal: 65,
              btnText: "Quote 0% Deal",
            },
            {
              img: "../assets/images/about/facility-lounge.webp",
              badge: "FCA Compliant",
              tag: "Consumer Duty",
              title: "Automated IPID & Suitability Audit",
              text: "Every finance quote automatically logs affordability checks and Insurance Product Information Documents.",
              specs: [
                ["FCA Firm Ref", "FRN-794102 Stackly Ltd"],
                ["Audit Compliance", "100% Zero Breaches"],
                ["GAP Attach Rate", "62% Protected Riders"],
              ],
              progressLabel: "Compliance Audit Score",
              progressVal: 100,
              btnText: "Audit Checklist",
            },
          ],
        },
        {
          id: "demos",
          label: "Test Ride Fleet & Demos",
          icon: "fa-solid fa-helmet-safety",
          tag: "8 Demos",
          kicker: "Fitzrovia Demonstrator Fleet Dispatch",
          title: "Showroom Demonstrator Fleet & DVLA Licence Verification",
          desc: "Manage the 8-bike Fitzrovia demo fleet, verify DVLA Category A check codes, and track GPS live location of bikes out on road tests.",
          primaryBtn: "Book Out Demo Bike",
          secondaryBtn: "DVLA Licence Check",
          kpis: [
            {
              label: "Active Demo Fleet",
              value: "8 Motorcycles",
              icon: "fa-solid fa-motorcycle",
              trend: "All Euro 5+ 2026",
              trendType: "up",
              foot: "Comprehensive Fleet Cover",
            },
            {
              label: "Currently Out on Road",
              value: "3 Bikes Live",
              icon: "fa-solid fa-location-crosshairs",
              trend: "GPS Telemetry Active",
              trendType: "hot",
              foot: "Regent's Park / A40 Route",
            },
            {
              label: "Rides Completed Week",
              value: "22 Sessions",
              icon: "fa-solid fa-route",
              trend: "15 Converted to Quote",
              trendType: "up",
              foot: "Zero Incidents",
            },
            {
              label: "Fleet Mileage Cap",
              value: "840 mi Avg",
              icon: "fa-solid fa-gauge",
              trend: "Retire at 1,500 mi",
              trendType: "up",
              foot: "Ex-Demo Sale Pipeline",
            },
          ],
          tableTitle: "Today's Demonstrator Fleet Dispatch & Return Log",
          tableHeaders: [
            "Demo Reg",
            "Motorcycle Model",
            "Rider Name",
            "DVLA Check Code",
            "Departure",
            "Return ETA",
            "Fleet Status",
            "Action",
          ],
          tableRows: [
            [
              "LD26 STK",
              "Ducati Panigale V4 S",
              "Callum Fraser",
              "Verified (0 Points • Cat A)",
              "13:30 GMT",
              "14:45 GMT",
              { text: "Out on Test Ride", type: "primary" },
              "Live GPS Map",
            ],
            [
              "LD26 ADV",
              "Ducati Multistrada V4 RS",
              "Oliver Sterling",
              "Verified (0 Points • Cat A)",
              "15:00 GMT",
              "16:15 GMT",
              { text: "Staged at Kerb", type: "info" },
              "Print Waiver",
            ],
            [
              "LD26 TRM",
              "Triumph Speed Triple 1200 RR",
              "Charlotte Kensington",
              "Verified (3 Points • Cat A)",
              "11:30 GMT",
              "12:45 GMT",
              { text: "Returned & Checked", type: "success" },
              "Debrief Quote",
            ],
            [
              "LD26 BMW",
              "BMW M 1000 R Competition",
              "Available in Bay",
              "Ready for Walk-In",
              "—",
              "—",
              { text: "Fueled & Ready", type: "success" },
              "Assign Rider",
            ],
          ],
          cards: [
            {
              img: "../assets/images/home/bike-3.webp",
              badge: "GPS Geofenced",
              tag: "Live Fleet Tracking",
              title: "Datatool Fleet Telemetry & Speed Alerts",
              text: "Real-time location, lean angle, and battery status for all 8 demonstrator motorcycles across Greater London.",
              specs: [
                ["Curated Test Route", "38-Mile Chilterns Loop GPX"],
                ["Outrider Escort", "Available on Superbike Demos"],
                ["Insurance Excess", "£1,000 Pre-Auth Waiver Option"],
              ],
              progressLabel: "Fleet Availability Today",
              progressVal: 75,
              btnText: "Open Fleet Map",
            },
            {
              img: "../assets/images/home/gear-gloves.webp",
              badge: "Loan Rider Kit",
              tag: "Showroom Helmet & Comms",
              title: "Shoei Neotec 3 & Sena Mesh Comms",
              text: "Sanitized loan helmets fitted with Sena 50S Mesh intercoms so sales outriders can coach clients during test rides.",
              specs: [
                ["Helmet Sizes Ready", "XS, S, M, L, XL, XXL"],
                ["Intercom Pairing", "Channel 1 Showroom Mesh"],
                ["Weather Gear", "Gore-Tex Over-Jackets Ready"],
              ],
              progressLabel: "Sanitization & Charge Status",
              progressVal: 100,
              btnText: "Reserve Loan Kit",
            },
            {
              img: "../assets/images/home/bike-6.webp",
              badge: "Ex-Demo Release",
              tag: "Stock Rotation",
              title: "2 Ex-Demo Bikes Approaching 1,400 Mi",
              text: "LD26 BMW (M 1000 R) and LD26 KTM (1390 Adv) are scheduled to move to Approved Used podium next Friday.",
              specs: [
                ["Pre-Registered Saving", "£2,800 Off List OTR"],
                ["First Service", "Completed by Master Tech"],
                ["Waiting List Buyers", "4 Clients Registered"],
              ],
              progressLabel: "Mileage Rotation Threshold",
              progressVal: 93,
              btnText: "Notify Waitlist",
            },
          ],
        },
      ],
    },
  };

  window.STACKLY_DASHBOARD_ROLES = ROLE_DATA;
})();
(function () {
  "use strict";

  const ROLE_DATA = window.STACKLY_DASHBOARD_ROLES || {};

  ROLE_DATA["Dyno & Service Technician"] = {
    roleKey: "Dyno & Service Technician",
    roleLabel: "Dynojet & Master Technician",
    portalTitle:
      'Stackly <span class="text-main">Dyno &amp; Workshop</span> Command',
    menuHeading: "Dyno Lab & Master Tech Menu",
    defaultUser: "Lorenzo Rossi",
    defaultEmail: "technician@stacklymotors.co.uk",
    sections: [
      {
        id: "overview",
        label: "Dyno Lab & Workshop Bay",
        icon: "fa-solid fa-screwdriver-wrench",
        tag: "6/6 Ramps",
        kicker: "Fitzrovia Subterranean Workshop & Dyno Cell",
        title: "Master Workshop Ramps & Dynojet 250i Command",
        desc: "Manage all 6 hydraulic superbike ramps, monitor Dynojet 250i load-cell runs, and sign off factory Desmodromic & ShiftCam service jobs.",
        primaryBtn: "Start Dyno Run Log",
        secondaryBtn: "Print Ramp Schedule",
        kpis: [
          {
            label: "Active Workshop Ramps",
            value: "6 / 6 Active",
            icon: "fa-solid fa-wrench",
            trend: "100% Bay Utilization",
            trendType: "hot",
            foot: "2 Desmo Services",
          },
          {
            label: "Dynojet 250i Sessions",
            value: "8 Runs Today",
            icon: "fa-solid fa-gauge-high",
            trend: "Max 221.6 WHP Logged",
            trendType: "up",
            foot: "Cell Temp: 21.4°C",
          },
          {
            label: "Pending PDI Sign-Offs",
            value: "4 New Bikes",
            icon: "fa-solid fa-clipboard-check",
            trend: "2 Handovers @ 2PM",
            trendType: "warn",
            foot: "68-Point Protocol",
          },
          {
            label: "Dual-Wideband AFR",
            value: "13.1 : 1 Avg",
            icon: "fa-solid fa-wave-square",
            trend: "Bosch LSU 4.9 Calibrated",
            trendType: "up",
            foot: "Zero Knock Events",
          },
        ],
        tableTitle: "Live Fitzrovia Workshop Ramp Assignment & Job Queue",
        tableHeaders: [
          "Ramp Bay",
          "Job Card #",
          "Motorcycle & Reg",
          "Service / Dyno Package",
          "Assigned Tech",
          "Stage",
          "Target Out",
          "Action",
        ],
        tableRows: [
          [
            "DYNO CELL 1",
            "JOB-4120",
            "Panigale V4R (LD74 STK)",
            "Akrapovic Titanium Map + Custom Gear AFR",
            "Lorenzo Rossi",
            { text: "On Roller (Run 4)", type: "primary" },
            "15:30 GMT",
            "Live Telemetry",
          ],
          [
            "RAMP BAY #1",
            "JOB-4118",
            "Streetfighter V4 SP2 (New)",
            "68-Point PDI + STM Dry Clutch Inspection",
            "Declan Callahan",
            { text: "Road Test Ready", type: "success" },
            "14:00 GMT",
            "Sign Off PDI",
          ],
          [
            "RAMP BAY #2",
            "JOB-4115",
            "BMW M 1000 RR (LD25 MRO)",
            "Ohlins FGRT Fork Rebuild + Brembo GP4-RX",
            "Harpreet Patel",
            { text: "Vacuum Bleed", type: "info" },
            "16:45 GMT",
            "Job Sheet",
          ],
          [
            "RAMP BAY #3",
            "JOB-4112",
            "Multistrada V4 Rally (LD24 DUC)",
            "15,000-Mile Valve Check & Radar Calibration",
            "Lorenzo Rossi",
            { text: "Awaiting Shims", type: "warning" },
            "Tomorrow 10:00",
            "Order Parts",
          ],
        ],
        cards: [
          {
            img: "../assets/images/about/facility-dyno.webp",
            badge: "Dynojet 250i",
            tag: "Eddy-Current Load Cell",
            title: "Soundproof Dyno Cell Environmental HUD",
            text: "Twin 180 mph ram-air blowers synchronized to rear roller speed with automatic SAE J1349 atmospheric correction.",
            specs: [
              ["Barometric Pressure", "1014.2 hPa • 38% Humidity"],
              ["Correction Factor", "SAE 1.01 (DIN 1.02)"],
              ["Extraction Flow", "14,000 CFM Twin Vortex"],
            ],
            progressLabel: "Load Cell Brake Thermal Headroom",
            progressVal: 94,
            btnText: "Calibrate Zero",
          },
          {
            img: "../assets/images/about/team-1.webp",
            badge: "Stahlwille Digital",
            tag: "Precision Torque Audit",
            title: "Electronic Torque Wrench Telemetry",
            text: "Every critical titanium axle nut, caliper bolt, and cylinder head fastener is logged automatically to the bike's VIN.",
            specs: [
              ["Rear Single-Sided Nut", "230 Nm Molykote Greased"],
              ["Brembo Caliper Bolts", "45 Nm Titanium Spec"],
              ["Annual ISO Calibration", "Valid until Oct 2027"],
            ],
            progressLabel: "Digital Torque Log Compliance",
            progressVal: 100,
            btnText: "View Torque Spec",
          },
          {
            img: "../assets/images/home/tech-spotlight.webp",
            badge: "Factory Bulletins",
            tag: "OEM Technical Campaigns",
            title: "2 Active Manufacturer Software Updates",
            text: "Apply Ducati DDS 3.0 quickshifter strategy update v26.4 and BMW ISTA shift-assistant adaptation reset on incoming bikes.",
            specs: [
              ["DDS 3.0 Diagnostic", "v2026.11 Online Connected"],
              ["BMW ISTA / NEXT", "Fibre Optic Head #02"],
              ["Triumph Diagnostic", "TDP v2026.09 Verified"],
            ],
            progressLabel: "Campaign Completion Rate",
            progressVal: 91,
            btnText: "Open Bulletins",
          },
        ],
      },
      {
        id: "ecumapping",
        label: "ECU Mapping & Telemetry",
        icon: "fa-solid fa-microchip",
        tag: "142 Maps",
        kicker: "Custom Fuel, Ignition & Torque Tables",
        title: "Dynojet 250i Custom ECU Mapping & CAN-Bus Telemetry",
        desc: "Flash bespoke gear-by-gear fuel and ignition tables, calibrate DQS strain-gauge quickshifter cut times, and eliminate Euro 5+ throttle snatch.",
        primaryBtn: "Flash Custom Map",
        secondaryBtn: "Export .DJM Graph",
        kpis: [
          {
            label: "Maps Flashed MTD",
            value: "142 Calibrations",
            icon: "fa-solid fa-bolt-lightning",
            trend: "+18% vs Oct",
            trendType: "up",
            foot: "Woolich & UpMap Pro",
          },
          {
            label: "Peak Dyno Record",
            value: "221.6 WHP",
            icon: "fa-solid fa-fire",
            trend: "V4R @ 16,100 RPM",
            trendType: "hot",
            foot: "VP MGP Fuel Spec",
          },
          {
            label: "Quickshifter Cut",
            value: "42 ms Tuned",
            icon: "fa-solid fa-stopwatch-20",
            trend: "Seamless Full-Throttle",
            trendType: "up",
            foot: "Strain Gauge Zeroed",
          },
          {
            label: "Throttle-by-Wire",
            value: "1:1 Direct Map",
            icon: "fa-solid fa-sliders",
            trend: "Zero Decel Restriction",
            trendType: "up",
            foot: "Cylinder Individual",
          },
        ],
        tableTitle: "Master ECU Calibration Library & Dyno Run Registry",
        tableHeaders: [
          "Map ID",
          "Motorcycle Model",
          "Exhaust & Air Filter",
          "Stock WHP",
          "Tuned WHP",
          "Peak Torque",
          "Target AFR",
          "Action",
        ],
        tableRows: [
          [
            "MAP-V4R-AKRA",
            "Ducati Panigale V4R (998cc)",
            "Akrapovic Full Ti Underseat + Sprint P08F1",
            "207.8 WHP",
            "221.6 WHP",
            "115.4 Nm",
            "13.0 : 1",
            "Load File",
          ],
          [
            "MAP-M1R-full",
            "BMW M 1000 RR (2026)",
            "Akrapovic Evolution Line + M Intake",
            "196.4 WHP",
            "209.8 WHP",
            "116.0 Nm",
            "13.1 : 1",
            "Load File",
          ],
          [
            "MAP-STR-1200",
            "Triumph Speed Triple 1200 RR",
            "SC-Project CR-T Titanium + Servo Eliminator",
            "168.2 WHP",
            "178.9 WHP",
            "127.2 Nm",
            "13.2 : 1",
            "Load File",
          ],
          [
            "MAP-KTM-1390",
            "KTM 1390 Super Duke R Evo",
            "Austin Racing GP1R + Rottweiler Airbox",
            "176.5 WHP",
            "188.4 WHP",
            "146.8 Nm",
            "13.1 : 1",
            "Load File",
          ],
        ],
        cards: [
          {
            img: "../assets/images/home/bike-1.webp",
            badge: "4-Cylinder Individual",
            tag: "Manifold Sampled",
            title: "Per-Cylinder Exhaust Header Balancing",
            text: "Weld-in bungs on all 4 titanium primary headers allow individual cylinder fuel trimming for silky partial-throttle transition.",
            specs: [
              ["Front Bank (Cyl 1 & 2)", "13.1:1 @ 100% TPS"],
              ["Rear Bank (Cyl 3 & 4)", "12.8:1 Thermal Cooling Trim"],
              ["Idle CO Stability", "±0.05% Ultra Smooth"],
            ],
            progressLabel: "Cylinder Parity Balance",
            progressVal: 99,
            btnText: "View Trim Table",
          },
          {
            img: "../assets/images/home/bike-2.webp",
            badge: "2D / AIM Data",
            tag: "Circuit Data Overlay",
            title: "CAN-Bus Datalogger Channel Config",
            text: "Configure 64 channels @ 200Hz including front/rear wheel slip percentage, fork potentiometer velocity, and yaw rate.",
            specs: [
              ["GPS Lap Beacon", "25Hz Glonass + Galileo"],
              ["Brake Pressure Sens", "0–25 Bar Front & Rear"],
              ["Lambda Logging", "Dual Wideband CAN Stream"],
            ],
            progressLabel: "Telemetry Channel Bandwidth",
            progressVal: 92,
            btnText: "Download Config",
          },
          {
            img: "../assets/images/home/bike-5.webp",
            badge: "Track Only",
            tag: "Pit Lane Limiter & Launch",
            title: "DPL Launch Control & Pit Limiter Calibration",
            text: "Custom clutch-release torque ramp for 0–100 km/h in 2.5 seconds and programmable 60 km/h pit lane speed limiter.",
            specs: [
              ["Launch RPM Target", "10,500 RPM Anti-Wheelie"],
              ["Pit Lane Speed", "60.0 km/h GPS Verified"],
              ["Engine Brake Map", "Gear-Dependent 1–3"],
            ],
            progressLabel: "Launch Consistency Rating",
            progressVal: 96,
            btnText: "Flash Strategy",
          },
        ],
      },
      {
        id: "suspension",
        label: "Suspension & Chassis Setup",
        icon: "fa-solid fa-compass-drafting",
        tag: "Ohlins Pro",
        kicker: "Ohlins Service Center & Laser Chassis Alignment",
        title: "Bespoke Rider Sag, Valve Shimming & Geometry Lab",
        desc: "Laser-align swingarm pivot and ride height, vacuum-bleed Ohlins TTX GP shocks, and corner-weight superbikes for road or circuit.",
        primaryBtn: "New Rider Setup Sheet",
        secondaryBtn: "Vacuum Bleed Log",
        kpis: [
          {
            label: "Ohlins Setups MTD",
            value: "19 Bikes",
            icon: "fa-solid fa-up-down-left-right",
            trend: "100% Laser Aligned",
            trendType: "up",
            foot: "Road & Track Profiles",
          },
          {
            label: "Vacuum Shock Bleed",
            value: "0.02 mbar",
            icon: "fa-solid fa-wind",
            trend: "Zero Cavitation",
            trendType: "hot",
            foot: "Andreani SP4 Pump",
          },
          {
            label: "Corner Weight Split",
            value: "50.2% / 49.8%",
            icon: "fa-solid fa-scale-unbalanced",
            trend: "With 80kg Rider Load",
            trendType: "up",
            foot: "Intercomp RFX Scales",
          },
          {
            label: "BST Carbon Wheel Runout",
            value: "< 0.08 mm",
            icon: "fa-solid fa-circle-dot",
            trend: "Ceramic Bearings",
            trendType: "up",
            foot: "Dynamic Balanced",
          },
        ],
        tableTitle: "Bespoke Rider Suspension & Chassis Geometry Register",
        tableHeaders: [
          "Setup ID",
          "Motorcycle",
          "Rider Weight",
          "Front Fork Spec",
          "Rear Shock Spec",
          "Swingarm / Rake",
          "Application",
          "Action",
        ],
        tableRows: [
          [
            "SUS-904",
            "Panigale V4R Corsa",
            "82 kg (With Kit)",
            "NPX 25/30 • 10.5 N/mm • 28mm Sag",
            "TTX36 • 95 N/mm • 26mm Sag",
            "-4mm Pivot • 24.5°",
            { text: "Silverstone GP", type: "primary" },
            "Setup Sheet",
          ],
          [
            "SUS-901",
            "BMW M 1000 RR",
            "90 kg (With Kit)",
            "FGRT 219 • 11.0 N/mm • 30mm Sag",
            "TTX GP • 105 N/mm • 27mm Sag",
            "Std Pivot • 23.6°",
            { text: "Fast Road / Track", type: "success" },
            "Setup Sheet",
          ],
          [
            "SUS-897",
            "KTM 1390 Super Adv R",
            "95 kg + Luggage",
            "WP Xplor Pro 7548 • 6.8 N/mm",
            "WP Apex Pro 8750 • PDS",
            "220mm Travel",
            { text: "Trans-Alpine Rally", type: "info" },
            "Setup Sheet",
          ],
          [
            "SUS-892",
            "Speed Triple 1200 RR",
            "76 kg (With Kit)",
            "Ohlins Smart EC 2.0 • 9.5 N/mm",
            "TTX36 EC • 90 N/mm • 28mm Sag",
            "Std Geometry",
            { text: "B-Road Comfort+", type: "success" },
            "Setup Sheet",
          ],
        ],
        cards: [
          {
            img: "../assets/images/home/bike-3.webp",
            badge: "Andreani Vacuum",
            tag: "Ohlins Clean Room",
            title: "TTX36 & FGRT 200 Cartridge Revalving",
            text: "Dust-free nitrogen charging station and Roehrig shock dyno to match compression/rebound damping curves within 1%.",
            specs: [
              ["Shock Fluid", "Ohlins #01309-01 Ultra Low Friction"],
              ["Nitrogen Bladder", "12.0 Bar High-Purity N2"],
              ["SKF Low-Friction", "Green Twin-Lip Seals"],
            ],
            progressLabel: "Damping Hysteresis Purity",
            progressVal: 99,
            btnText: "View Shock Graph",
          },
          {
            img: "../assets/images/home/bike-4.webp",
            badge: "Laser Geometry",
            tag: "Mega-Max Chassis Jig",
            title: "Frame, Offset & Chain Line Laser Verification",
            text: "Measure headstock rake, trail, wheelbase, and rear wheel coaxial alignment to 0.1mm precision.",
            specs: [
              ["Wheel Alignment", "0.0 mm Offset Error"],
              ["Chain Slack Spec", "37 mm Laser Sighted"],
              ["Triple Clamp Offset", "28 mm CNC Billet"],
            ],
            progressLabel: "Chassis Symmetry Index",
            progressVal: 100,
            btnText: "Print Cert",
          },
          {
            img: "../assets/images/home/gear-boots.webp",
            badge: "Ergonomics Fit",
            tag: "Rearsets & Clip-Ons",
            title: "Rizoma Billet Rearset & Lever Customization",
            text: "Tailor peg height, GP reverse-shift linkage angle, and Brembo RCS Corsa Corta bite point to the rider's ergonomics.",
            specs: [
              ["Shift Pattern", "GP 1-Up / 5-Down Ready"],
              ["Brake Bite Mode", "Race 'R' Immediate Response"],
              ["Bar Angle", "8.5° Open Wrist Relief"],
            ],
            progressLabel: "Ergonomic Fit Completion",
            progressVal: 95,
            btnText: "Save Ergo Profile",
          },
        ],
      },
      {
        id: "pdi",
        label: "Pre-Delivery Inspection (PDI)",
        icon: "fa-solid fa-clipboard-check",
        tag: "4 Crates",
        kicker: "Factory Crate Unboxing & 68-Point PDI",
        title: "New Motorcycle Uncrating & 68-Point Pre-Delivery Protocol",
        desc: "Initialize factory ECUs out of transport sleep mode, fit carbon aero winglets, activate Datatool S5 trackers, and complete shakedown runs.",
        primaryBtn: "Sign Off PDI Certificate",
        secondaryBtn: "Scan Crate Barcode",
        kpis: [
          {
            label: "Crates Unboxed Today",
            value: "3 Factory Bikes",
            icon: "fa-solid fa-box-open",
            trend: "Zero Transit Damage",
            trendType: "up",
            foot: "Bologna & Munich Air",
          },
          {
            label: "68-Point PDI Completed",
            value: "4 Signed Off",
            icon: "fa-solid fa-list-check",
            trend: "100% First-Time Pass",
            trendType: "up",
            foot: "Moved to Showroom",
          },
          {
            label: "Trackers Activated",
            value: "5 Datatool S5",
            icon: "fa-solid fa-satellite",
            trend: "Thatcham Cat S5",
            trendType: "hot",
            foot: "2x ADR Fobs Paired",
          },
          {
            label: "Battery Conditioning",
            value: "100% LiFePO4",
            icon: "fa-solid fa-battery-full",
            trend: "Cell Balance Checked",
            trendType: "up",
            foot: "CTEK Pro25S",
          },
        ],
        tableTitle: "Factory Crate Arrivals & 68-Point PDI Sign-Off Queue",
        tableHeaders: [
          "Crate ID",
          "Model & Edition",
          "Full VIN",
          "ECU Transport Unlock",
          "S5 Tracker",
          "Shakedown Test",
          "Status",
          "Action",
        ],
        tableRows: [
          [
            "CRT-ITA-901",
            "Ducati Panigale V4 S (2026)",
            "ZDM14BPW8RB019482",
            "DDS 3.0 Unlocked",
            "Armed & Tested",
            "8.2 Mi Passed",
            { text: "Ready for Handover", type: "success" },
            "Issue Cert",
          ],
          [
            "CRT-GER-442",
            "BMW M 1000 XR Comp",
            "WB10E5109R6H88210",
            "ISTA Unlocked",
            "Armed & Tested",
            "7.5 Mi Passed",
            { text: "In Valet Bay", type: "success" },
            "Issue Cert",
          ],
          [
            "CRT-UK-318",
            "Triumph Rocket 3 Storm GT",
            "SMTY12049RTA99104",
            "TDP Unlocked",
            "Installation In Prog",
            "Pending Test",
            { text: "On Ramp #4", type: "warning" },
            "Checklist",
          ],
          [
            "CRT-AUT-705",
            "KTM 1390 Super Duke R Evo",
            "VBKVR9408RM771239",
            "XC2 Unlocked",
            "Armed & Tested",
            "9.0 Mi Passed",
            { text: "Podium Display", type: "info" },
            "Issue Cert",
          ],
        ],
        cards: [
          {
            img: "../assets/images/home/hero-slide-3.webp",
            badge: "68-Point Standard",
            tag: "Zero-Defect Protocol",
            title: "Digital PDI Tablet & Photo Documentation",
            text: "Every new motorcycle receives high-resolution macro photos of paintwork, fluid levels, and torque paint marks prior to handover.",
            specs: [
              ["Fluid Spec Check", "Coolant -35°C / Motul Dot 4"],
              ["Tyre Pressure Set", "33.0 PSI Front / 36.0 PSI Rear"],
              ["Accessory Fitment", "Evotech Radiator Guards Fitted"],
            ],
            progressLabel: "Quality Assurance Score",
            progressVal: 100,
            btnText: "Open PDI Form",
          },
          {
            img: "../assets/images/about/facility-vault.webp",
            badge: "Thatcham Cat S5",
            tag: "Insurance Security",
            title: "Datatool Stealth S5 & Scorpion ADR Setup",
            text: "Concealed loom integration with zero splice damage, automatic driver recognition tag pairing, and 24/7 control room test.",
            specs: [
              ["GSM / GPS Signal", "-62 dBm High Sensitivity"],
              ["Backup Battery", "Internal 14-Day Reserve"],
              ["Certificate Issued", "Instant PDF to Underwriter"],
            ],
            progressLabel: "Tracker Signal Verification",
            progressVal: 100,
            btnText: "Test Control Room",
          },
          {
            img: "../assets/images/home/gear-helmet.webp",
            badge: "Break-In Map",
            tag: "First 600 Miles",
            title: "Soft-Rev Limiter & Running-In Calibration",
            text: "Configure progressive shift-light warnings on the TFT display for the initial 1,000 km bedding-in period.",
            specs: [
              ["0–1,000 km RPM Cap", "7,500 RPM Amber Flash"],
              ["First Service Reminder", "Auto-Pop @ 600 Miles"],
              ["Break-In Oil", "Mineral / Semi-Synth Factory"],
            ],
            progressLabel: "ECU Customer Profile Setup",
            progressVal: 100,
            btnText: "Configure TFT",
          },
        ],
      },
      {
        id: "parts",
        label: "OEM Parts & Special Tooling",
        icon: "fa-solid fa-boxes-packing",
        tag: "1,420 SKUs",
        kicker: "Workshop Parts Vault & Racing Consumables",
        title: "OEM Parts Inventory, Pirelli Slicks & Titanium Fasteners",
        desc: "Requisition genuine Ducati, BMW M, Triumph, and KTM components, manage Motul 300V bulk telemetry, and track express factory air orders.",
        primaryBtn: "Requisition Job Parts",
        secondaryBtn: "Order Factory Express",
        kpis: [
          {
            label: "OEM SKUs in Vault",
            value: "1,420 Parts",
            icon: "fa-solid fa-cogs",
            trend: "98.4% First-Pick Rate",
            trendType: "up",
            foot: "Basement Parts Cage",
          },
          {
            label: "Pirelli Track & Road Tyres",
            value: "44 In Racks",
            icon: "fa-solid fa-circle-notch",
            trend: "SC1 / SC2 / SP V4",
            trendType: "hot",
            foot: "Heated Tyre Room",
          },
          {
            label: "Motul 300V 15W50 Reserve",
            value: "380 Litres",
            icon: "fa-solid fa-oil-can",
            trend: "Ester Core Factory",
            trendType: "up",
            foot: "Digital Metered Pumps",
          },
          {
            label: "Express Air Orders",
            value: "6 In Transit",
            icon: "fa-solid fa-plane",
            trend: "24hr Bologna DHL",
            trendType: "up",
            foot: "Arriving 09:00 Tomorrow",
          },
        ],
        tableTitle:
          "Live Workshop Parts Requisition & High-Performance Stock Ledger",
        tableHeaders: [
          "Part SKU",
          "Component Description",
          "Compatibility",
          "Vault Bin",
          "Stock Qty",
          "Unit Trade £",
          "Status",
          "Action",
        ],
        tableRows: [
          [
            "DUC-96482011A",
            "Akrapovic Full Titanium Racing Exhaust System",
            "Panigale V4 / V4S / V4R",
            "CAGE-A01",
            "3 Kits",
            "£4,850.00",
            { text: "In Stock", type: "success" },
            "Allocate to Job",
          ],
          [
            "BRM-107A48659",
            "Brembo Z04 Racing Sintered Front Pad Set",
            "Stylema / GP4-RX Calipers",
            "BIN-B14",
            "18 Sets",
            "£215.00",
            { text: "In Stock", type: "success" },
            "Allocate to Job",
          ],
          [
            "PIR-4120900",
            "Pirelli Diablo Supercorsa V4 SP (200/60 ZR17)",
            "Supersport Rear 17-Inch",
            "RACK-T02",
            "14 Tyres",
            "£248.00",
            { text: "In Stock", type: "success" },
            "Allocate to Job",
          ],
          [
            "STM-FDba-S040",
            "STM Evoluzione Dry Clutch Conversion Kit",
            "Ducati V4 Engine Family",
            "CAGE-A04",
            "1 Kit",
            "£2,190.00",
            { text: "Low Stock (1)", type: "warning" },
            "Reorder Now",
          ],
        ],
        cards: [
          {
            img: "../assets/images/home/gear-gloves.webp",
            badge: "Grade 5 Ti-6Al-4V",
            tag: "Pro-Bolt & CNC Racing",
            title: "Aircraft Titanium Fastener & Shim Assortment",
            text: "Full metric aerospace titanium bolt drawers and 1.80mm–3.45mm Desmodromic opener/closer valve shim cabinets.",
            specs: [
              ["Desmo Shim Increments", "0.025 mm Precision Ground"],
              ["Titanium Tensile", "1,050 MPa Rolled Thread"],
              ["Safety Lockwire", "0.8 mm Stainless Aircraft"],
            ],
            progressLabel: "Consumable Bin Stock Level",
            progressVal: 96,
            btnText: "Audit Shim Kit",
          },
          {
            img: "../assets/images/adventure/outfit-luggage.webp",
            badge: "Expedition Kit",
            tag: "Adventure Rigging",
            title: "Touratech, Akrapovic & Garmin Zumo XT2 Stock",
            text: "Complete inventory of anodized aluminum expedition panniers, crash bars, and auxiliary LED fog lights ready for installation.",
            specs: [
              ["Aluminium Pannier Sets", "8 Full 3-Box Kits"],
              ["Garmin Zumo XT2", "12 Units with CAN Mounts"],
              ["Heated Grip Modules", "OEM Plug-and-Play Ready"],
            ],
            progressLabel: "Adventure Accessory Stock",
            progressVal: 88,
            btnText: "Pick Kit",
          },
          {
            img: "../assets/images/about/award-3.webp",
            badge: "Corghi Artiglio",
            tag: "Touchless Tyre Bay",
            title: "Touchless Carbon-Wheel Tyre Mounting",
            text: "Dedicated leverless tyre machine with nylon-protected jaws specifically calibrated for BST and Marchesini carbon-fiber rims.",
            specs: [
              ["Rim Protection", "100% Zero-Contact Head"],
              ["Haweka Pro Balance", "1g Laser Weight Placement"],
              ["Nitrogen Inflation", "99.5% Dry Nitrogen Fill"],
            ],
            progressLabel: "Calibration & Certification",
            progressVal: 100,
            btnText: "Book Tyre Bay",
          },
        ],
      },
    ],
  };

  ROLE_DATA["Showroom Administrator"] = {
    roleKey: "Showroom Administrator",
    roleLabel: "Showroom Administrator",
    portalTitle:
      'Stackly <span class="text-main">Executive Admin</span> Command',
    menuHeading: "Executive & Operations Menu",
    defaultUser: "Victoria Sterling",
    defaultEmail: "admin@stacklymotors.co.uk",
    sections: [
      {
        id: "overview",
        label: "Executive Showroom Command",
        icon: "fa-solid fa-building-shield",
        tag: "£1.84M Q4",
        kicker: "Fitzrovia Flagship Executive Boardroom",
        title: "Showroom P&L, Franchise Quotas & Multi-Division Overview",
        desc: "Full administrative command over Fitzrovia Showroom turnover, subterranean vault holdings, staff RBAC permissions, and FCA compliance.",
        primaryBtn: "Generate Board Report",
        secondaryBtn: "Export P&L Ledger",
        kpis: [
          {
            label: "Quarterly Turnover",
            value: "£1,842,500",
            icon: "fa-solid fa-chart-column",
            trend: "+22.4% YoY Growth",
            trendType: "up",
            foot: "Gross Margin: 18.6%",
          },
          {
            label: "Registered Portal Members",
            value: "4,892 Riders",
            icon: "fa-solid fa-users",
            trend: "+148 This Month",
            trendType: "up",
            foot: "312 VIP Collectors",
          },
          {
            label: "Total Insured Assets",
            value: "£3,250,000",
            icon: "fa-solid fa-vault",
            trend: "Showroom + Vault",
            trendType: "hot",
            foot: "Lloyd's Policy Active",
          },
          {
            label: "FCA & HMRC Compliance",
            value: "100% Grade A",
            icon: "fa-solid fa-scale-balanced",
            trend: "Zero Audit Flags",
            trendType: "up",
            foot: "Q4 Filing Complete",
          },
        ],
        tableTitle:
          "Fitzrovia Departmental Financial & Operational Performance",
        tableHeaders: [
          "Division / Department",
          "Monthly Target",
          "Actual MTD",
          "Gross Margin",
          "Headcount",
          "KPI Rating",
          "Action",
        ],
        tableRows: [
          [
            "New Superbike & Homologation Sales",
            "£280,000",
            "£314,500",
            "14.2% (£44.6k)",
            "6 Consultants",
            { text: "112% Exceeded", type: "success" },
            "Division P&L",
          ],
          [
            "Approved Used & Collector Brokerage",
            "£110,000",
            "£128,300",
            "17.8% (£22.8k)",
            "4 Specialists",
            { text: "116% Exceeded", type: "success" },
            "Division P&L",
          ],
          [
            "Dynojet 250i Lab & Master Workshop",
            "£45,000",
            "£51,200",
            "64.5% (£33.0k)",
            "8 Technicians",
            { text: "113% Exceeded", type: "success" },
            "Workshop Audit",
          ],
          [
            "Subterranean Climate Vault & Events",
            "£25,000",
            "£29,800",
            "72.0% (£21.4k)",
            "5 Concierge",
            { text: "119% Exceeded", type: "primary" },
            "Vault Ledger",
          ],
        ],
        cards: [
          {
            img: "../assets/images/home/about-showroom.webp",
            badge: "Flagship W1W",
            tag: "Showroom Operations",
            title: "245 Great Portland Street Facility Telemetry",
            text: "All 3 showroom floors, subterranean collector vault, and Dynojet acoustic cell operating at 100% environmental efficiency.",
            specs: [
              ["Daily Footfall & VIPs", "42 Qualified Visitors Avg"],
              ["Energy & HVAC Load", "18.5°C Vault / 21°C Floor"],
              ["Premises Security", "Chubb Grade-4 Redcare Active"],
            ],
            progressLabel: "Annual Revenue Plan Completion",
            progressVal: 94,
            btnText: "Facility Report",
          },
          {
            img: "../assets/images/about/award-1.webp",
            badge: "OEM Franchises",
            tag: "Manufacturer Bonus",
            title: "2026 UK Dealer of the Year Standing",
            text: "Ranked #1 in Greater London for Customer Satisfaction Index (99.2%) and homologation allocation velocity.",
            specs: [
              ["OEM Volume Bonus", "£68,000 Accrued Q4"],
              ["Mystery Shopper Score", "98 / 100 Verified"],
              ["2027 Quota Uplift", "+25% Homologation Units"],
            ],
            progressLabel: "Manufacturer KPI Bonus Unlock",
            progressVal: 98,
            btnText: "View OEM Scorecard",
          },
          {
            img: "../assets/images/about/facility-vault.webp",
            badge: "Escrow & Treasury",
            tag: "Coutts Commercial",
            title: "Client Deposit Escrow & Floorplan Liquidity",
            text: "Real-time reconciliation of client build deposits, Black Horse finance payouts, and stocking loan utilization.",
            specs: [
              ["Client Escrow Balance", "£194,500 Ring-Fenced"],
              ["Floorplan Facility Used", "41% of £2.5M Credit Line"],
              ["VAT Quarter Reserve", "Fully Funded in Treasury"],
            ],
            progressLabel: "Liquidity & Cashflow Health",
            progressVal: 100,
            btnText: "Treasury Statement",
          },
        ],
      },
      {
        id: "fleet",
        label: "Fleet & Franchise Inventory",
        icon: "fa-solid fa-motorcycle",
        tag: "86 Total",
        kicker: "Master Multi-Brand Vehicle Control",
        title: "Master Showroom, Collector Vault & Demo Fleet Register",
        desc: "Oversee capital allocation across all 86 motorcycles in stock, approve trade-in underwriting, and release factory crate letters of credit.",
        primaryBtn: "Approve Stock Purchase",
        secondaryBtn: "Run Stock Aging Audit",
        kpis: [
          {
            label: "Total Motorcycles Held",
            value: "86 Units",
            icon: "fa-solid fa-layer-group",
            trend: "£2.48M Cost Value",
            trendType: "up",
            foot: "42 Floor • 28 Vault • 16 Demo/Crate",
          },
          {
            label: "Average Stock Turn",
            value: "21.4 Days",
            icon: "fa-solid fa-rotate",
            trend: "9 Days Faster vs UK Avg",
            trendType: "hot",
            foot: "High Velocity",
          },
          {
            label: "Over-60-Day Stock",
            value: "2 Units Only",
            icon: "fa-solid fa-clock",
            trend: "97.7% Fresh Stock",
            trendType: "up",
            foot: "Auto-Repricing Active",
          },
          {
            label: "2027 Pre-Sold Orders",
            value: "31 Deposits",
            icon: "fa-solid fa-file-contract",
            trend: "£1.12M Forward Book",
            trendType: "up",
            foot: "Q1 Delivery Pipeline",
          },
        ],
        tableTitle: "Master Franchise Inventory & Capital Allocation Breakdown",
        tableHeaders: [
          "Inventory Category",
          "Showroom Units",
          "Vault / Crate",
          "Total Capital £",
          "Projected Retail £",
          "Avg Turn Days",
          "Status",
          "Action",
        ],
        tableRows: [
          [
            "Supersport & Homologation Division",
            "18 Units",
            "12 Units",
            "£845,000",
            "£982,000",
            "17 Days",
            { text: "High Demand", type: "success" },
            "Manage Stock",
          ],
          [
            "Adventure & Trans-Continental Fleet",
            "12 Units",
            "6 Units",
            "£312,000",
            "£364,500",
            "22 Days",
            { text: "Optimal Turn", type: "success" },
            "Manage Stock",
          ],
          [
            "Hyper-Naked & Modern Classic",
            "12 Units",
            "4 Units",
            "£248,000",
            "£289,000",
            "24 Days",
            { text: "Optimal Turn", type: "info" },
            "Manage Stock",
          ],
          [
            "Collector Brokerage & Consignment",
            "4 Units",
            "14 Units",
            "£0 (Consigned)",
            "£1,140,000 (8% Fee)",
            "29 Days",
            { text: "Zero Cap Risk", type: "primary" },
            "Consignments",
          ],
        ],
        cards: [
          {
            img: "../assets/images/home/bike-1.webp",
            badge: "Import Letters",
            tag: "Bologna & Munich",
            title: "Approve 12 Incoming December Factory Crates",
            text: "Release commercial invoice settlement for 6x 2027 Panigale V4 S and 6x BMW M 1000 RR Competition units.",
            specs: [
              ["Invoice Total", "£294,000 Ex-Works"],
              ["Pre-Sold Ratio", "9 of 12 Already Deposited"],
              ["Freight Forwarder", "DHL Global Motorsport"],
            ],
            progressLabel: "Customs & NOVA Pre-Clearance",
            progressVal: 92,
            btnText: "Authorize Wire",
          },
          {
            img: "../assets/images/adventure/adv-overview.webp",
            badge: "Trade Underwriting",
            tag: "Part-Exchange Book",
            title: "4 High-Value Trade-Ins Awaiting Director Sign-Off",
            text: "Review trade-in bids above £20,000 submitted by the sales floor before locking guaranteed part-exchange figures.",
            specs: [
              ["2024 RSV4 Factory", "Bid £16,800 -> Retail £19,495"],
              ["2023 S 1000 RR M-Pack", "Bid £15,900 -> Retail £18,495"],
              ["Projected Recon Cost", "£420 Avg Workshop Prep"],
            ],
            progressLabel: "Trade Margin Protection",
            progressVal: 95,
            btnText: "Approve Bids",
          },
          {
            img: "../assets/images/home/bike-6.webp",
            badge: "Fleet Insurance",
            tag: "Road & Static Cover",
            title: "Motor Trade Combined Policy Schedule",
            text: "All 86 VINs automatically synced nightly to the Motor Insurance Database (MID) and trade plate register.",
            specs: [
              ["MID Sync Status", "Synced Today 06:00 GMT"],
              ["Trade Plates Held", "4 Active DVLA Plates"],
              ["Demo Rider Excess", "£1,000 Standard Cover"],
            ],
            progressLabel: "MID Database Accuracy",
            progressVal: 100,
            btnText: "Download MID Log",
          },
        ],
      },
      {
        id: "staff",
        label: "Staff & Role Permissions",
        icon: "fa-solid fa-user-gear",
        tag: "28 Staff",
        kicker: "Human Resources & Role-Based Access Control (RBAC)",
        title: "Showroom Staff Directory, Shifts & Portal Role Matrix",
        desc: "Manage all 28 Fitzrovia personnel, assign role-based portal permissions, and authorize monthly sales & technician commission runs.",
        primaryBtn: "Provision Staff Account",
        secondaryBtn: "Approve Payroll Run",
        kpis: [
          {
            label: "Total Active Personnel",
            value: "28 Staff",
            icon: "fa-solid fa-id-card-clip",
            trend: "100% DBS & FCA Vetted",
            trendType: "up",
            foot: "Fitzrovia Flagship",
          },
          {
            label: "Active Portal Sessions",
            value: "14 Online",
            icon: "fa-solid fa-signal",
            trend: "2FA Hardware Keys",
            trendType: "hot",
            foot: "Zero Unauthorised",
          },
          {
            label: "Factory Certifications",
            value: "100% Current",
            icon: "fa-solid fa-graduation-cap",
            trend: "8 Master Techs",
            trendType: "up",
            foot: "Borgo & Munich Trained",
          },
          {
            label: "Monthly Commission Pool",
            value: "£34,850",
            icon: "fa-solid fa-money-check-dollar",
            trend: "Ready for BACS",
            trendType: "up",
            foot: "Pay Date: 28 Nov",
          },
        ],
        tableTitle: "Fitzrovia Leadership, Sales & Technical Staff Directory",
        tableHeaders: [
          "Staff ID",
          "Full Name",
          "Portal Role",
          "Department",
          "Clearance Level",
          "Shift Status",
          "Action",
        ],
        tableRows: [
          [
            "STF-001",
            "Victoria Sterling",
            "Showroom Administrator",
            "Executive Management",
            "Level 5 (Full Root & Vault)",
            { text: "On Duty (Boardroom)", type: "success" },
            "Edit Access",
          ],
          [
            "STF-004",
            "Marcus Vance",
            "Showroom Consultant",
            "Supersport & VIP Sales",
            "Level 3 (CRM, Stock & FCA)",
            { text: "On Duty (Showroom)", type: "success" },
            "Edit Access",
          ],
          [
            "STF-009",
            "Lorenzo Rossi",
            "Dyno & Service Technician",
            "Dynojet Lab & Workshop",
            "Level 3 (ECU, Dyno & PDI)",
            { text: "On Duty (Dyno Cell)", type: "primary" },
            "Edit Access",
          ],
          [
            "STF-012",
            "Declan Callahan",
            "Dyno & Service Technician",
            "Chassis & Ohlins Studio",
            "Level 3 (Workshop & Parts)",
            { text: "On Duty (Ramp #1)", type: "success" },
            "Edit Access",
          ],
        ],
        cards: [
          {
            img: "../assets/images/about/team-1.webp",
            badge: "RBAC Matrix",
            tag: "5 Portal Roles",
            title: "Role-Based Sidebar & Data Segregation",
            text: "Strict role isolation ensures Riders, VIP Collectors, Sales Consultants, Technicians, and Admins see only authorized modules.",
            specs: [
              ["Customer Roles", "Rider / Buyer & VIP Collector"],
              ["Internal Staff Roles", "Consultant, Technician, Admin"],
              ["Session Encryption", "TLS 1.3 + Hardware Token"],
            ],
            progressLabel: "Permission Policy Compliance",
            progressVal: 100,
            btnText: "Configure RBAC",
          },
          {
            img: "../assets/images/about/team-3.webp",
            badge: "Academy Training",
            tag: "OEM Accreditation",
            title: "2027 Euro 5+ Hybrid & Radar Tech Course",
            text: "3 technicians enrolled in the December Bologna factory course covering front/rear radar calibration and lithium battery safety.",
            specs: [
              ["Training Dates", "07–11 December 2026"],
              ["High-Voltage Cert", "IMI Level 4 Accredited"],
              ["Grant Funding", "100% OEM Sponsored"],
            ],
            progressLabel: "Annual Training Hours Logged",
            progressVal: 91,
            btnText: "View Certificates",
          },
          {
            img: "../assets/images/about/team-4.webp",
            badge: "BACS Payroll",
            tag: "Incentives & Bonuses",
            title: "November Sales & Workshop Bonus Sign-Off",
            text: "Approve variable commission payouts for 18 delivered motorcycles and 245 billable master workshop hours.",
            specs: [
              ["Sales Commission", "£24,200 (6 Consultants)"],
              ["Tech Efficiency Bonus", "£10,650 (8 Technicians)"],
              ["HMRC RTI Submission", "Prepared by Finance"],
            ],
            progressLabel: "Payroll Verification Status",
            progressVal: 100,
            btnText: "Authorize BACS",
          },
        ],
      },
      {
        id: "eventsops",
        label: "Events & Circuit Operations",
        icon: "fa-solid fa-flag-checkered",
        tag: "120 Riders",
        kicker: "UK Track Days, Launch Nights & Expeditions",
        title: "Circuit Hire, ACU Insurance & VIP Event Operations",
        desc: "Manage Silverstone GP circuit buyouts, Welsh & Scottish adventure rallies, and private Fitzrovia showroom unveiling galas.",
        primaryBtn: "Create Showroom Event",
        secondaryBtn: "Download ACU Insurance",
        kpis: [
          {
            label: "Silverstone GP Buyout",
            value: "120 / 120 Sold",
            icon: "fa-solid fa-trophy",
            trend: "£35,880 Ticket Rev",
            trendType: "hot",
            foot: "24 Nov 2026",
          },
          {
            label: "Showroom Launch Gala",
            value: "280 VIP RSVPs",
            icon: "fa-solid fa-champagne-glasses",
            trend: "04 Dec • 2027 Reveal",
            trendType: "up",
            foot: "Catering Confirmed",
          },
          {
            label: "Adventure Tours 2027",
            value: "45 Booked",
            icon: "fa-solid fa-mountain-sun",
            trend: "Wales, Lakes & NC500",
            trendType: "up",
            foot: "£112k Tour Revenue",
          },
          {
            label: "Event Marketing ROI",
            value: "34 Deliveries",
            icon: "fa-solid fa-bullseye",
            trend: "+215% Net Return",
            trendType: "up",
            foot: "Direct Event Attribution",
          },
        ],
        tableTitle:
          "Master Showroom Events, Track Days & Expedition Operations",
        tableHeaders: [
          "Event ID",
          "Event Title",
          "Venue / Route",
          "Date",
          "Booked / Cap",
          "Gross Revenue",
          "Risk & Medical",
          "Action",
        ],
        tableRows: [
          [
            "OPS-SIL-24",
            "Stackly Silverstone GP Track Day",
            "Silverstone Grand Prix Circuit",
            "24 Nov 2026",
            "120 / 120 Riders",
            "£35,880",
            { text: "ACU & Paramedics Signed", type: "success" },
            "Run Sheet",
          ],
          [
            "OPS-GAL-04",
            "2027 Homologation Midnight Unveil",
            "Fitzrovia Showroom Floor",
            "04 Dec 2026",
            "280 / 300 VIPs",
            "Sponsored OEM",
            { text: "Westminster Licence OK", type: "success" },
            "Guest List",
          ],
          [
            "OPS-DON-12",
            "Donington Park Winter Apex Session",
            "Donington Park National",
            "12 Dec 2026",
            "94 / 105 Riders",
            "£24,346",
            { text: "Marshals Confirmed", type: "primary" },
            "Run Sheet",
          ],
          [
            "OPS-WAL-18",
            "Welsh Black Mountain Telemetry Rally",
            "Brecon Beacons & Elan Valley",
            "18 Apr 2027",
            "28 / 30 Riders",
            "£41,860",
            { text: "Chase Vans Assigned", type: "info" },
            "Route Pack",
          ],
        ],
        cards: [
          {
            img: "../assets/images/events/featured-event.webp",
            badge: "£10M Indemnity",
            tag: "Circuit Compliance",
            title: "MSVR & ACU Track Day Public Liability",
            text: "Full circuit hire contract, 3 frontline trauma ambulances, 24 corner marshals, and Pirelli race tyre truck confirmed.",
            specs: [
              ["Noise Officer", "102 dB Static / 98 dB Drive-By"],
              ["Garage Allocation", "Pits 1 to 18 Exclusive"],
              ["Chief Instructor", "Christian Iddon + 6 Pros"],
            ],
            progressLabel: "Operational Readiness Checklist",
            progressVal: 100,
            btnText: "View Safety Plan",
          },
          {
            img: "../assets/images/events/gallery-1.webp",
            badge: "04 Dec Gala",
            tag: "Showroom Launch Night",
            title: "2027 Panigale & Speed Triple VIP Premiere",
            text: "Live DJ, Italian espresso & Franciacorta bar, and synchronized silk-drop reveal across 4 podiums at 20:00 GMT.",
            specs: [
              ["VIP Press & Collectors", "280 Confirmed Guests"],
              ["Security Team", "6 SIA Concierge Guards"],
              ["Live Stream", "YouTube 4K Broadcast Ready"],
            ],
            progressLabel: "Event Production Staging",
            progressVal: 92,
            btnText: "Manage RSVPs",
          },
          {
            img: "../assets/images/adventure/tour-wales.webp",
            badge: "Mobile Support",
            tag: "Expedition Logistics",
            title: "2x Mercedes Sprinter Workshop Chase Vans",
            text: "Equipped with satellite Starlink telemetry, spare wheels, diagnostic tablets, and 2 replacement adventure bikes.",
            specs: [
              ["Lead Ride Captain", "Ex-Dakar Navigator"],
              ["Hotel Partners", "5-Star Country Estates"],
              ["GPS SOS Trackers", "Garmin inReach on All Bikes"],
            ],
            progressLabel: "2027 Tour Logistics Prep",
            progressVal: 88,
            btnText: "Dispatch Manifest",
          },
        ],
      },
      {
        id: "security",
        label: "FCA Audit & System Security",
        icon: "fa-solid fa-shield-halved",
        tag: "256-Bit AES",
        kicker: "Cybersecurity, Vault Biometrics & FCA Governance",
        title: "Portal Authentication Logs, Vault CCTV & FCA Compliance",
        desc: "Inspect real-time login authentication events, subterranean vault biometric access logs, and Financial Conduct Authority audit trails.",
        primaryBtn: "Export Security Audit",
        secondaryBtn: "Rotate Vault Keys",
        kpis: [
          {
            label: "Vault Encryption",
            value: "AES-256-GCM",
            icon: "fa-solid fa-lock",
            trend: "Zero Intrusion Attempts",
            trendType: "up",
            foot: "ISO 27001 Certified",
          },
          {
            label: "Subterranean CCTV Grid",
            value: "32 4K Cameras",
            icon: "fa-solid fa-video",
            trend: "AI Motion Thermal",
            trendType: "hot",
            foot: "90-Day Cloud Archive",
          },
          {
            label: "FCA Consumer Duty",
            value: "100% Compliant",
            icon: "fa-solid fa-building-columns",
            trend: "Q4 Audit Signed",
            trendType: "up",
            foot: "FRN-794102",
          },
          {
            label: "Telemetry Server Uptime",
            value: "99.998%",
            icon: "fa-solid fa-server",
            trend: "London AWS Dual-AZ",
            trendType: "up",
            foot: "Backup @ 04:00 GMT",
          },
        ],
        tableTitle:
          "Live Portal Authentication & Subterranean Vault Access Log",
        tableHeaders: [
          "Audit ID",
          "Timestamp (GMT)",
          "User / Actor",
          "Role Designation",
          "Event / Access Point",
          "IP / Terminal",
          "Status",
          "Action",
        ],
        tableRows: [
          [
            "SEC-9942",
            "Today • Live Session",
            "Current Authenticated User",
            "Active Session Role",
            "Portal Login & Telemetry Handshake",
            "London UK • Encrypted",
            { text: "Verified Strong Pwd", type: "success" },
            "Inspect Token",
          ],
          [
            "SEC-9938",
            "Today • 09:14:22",
            "Lorenzo Rossi",
            "Dyno & Service Technician",
            "Dynojet 250i ECU Map Upload (#8841)",
            "Workshop Terminal #1",
            { text: "Signed & Logged", type: "success" },
            "View Hash",
          ],
          [
            "SEC-9931",
            "Today • 08:45:10",
            "Marcus Vance",
            "Showroom Consultant",
            "Black Horse FCA Proposal #FIN-8821",
            "Sales Desk #2",
            { text: "GDPR Consent OK", type: "success" },
            "Audit Trail",
          ],
          [
            "SEC-9920",
            "Today • 07:58:04",
            "Victoria Sterling",
            "Showroom Administrator",
            "Subterranean Vault Biometric Unlock",
            "Vault Airlock Door #1",
            { text: "Iris + Token Match", type: "primary" },
            "CCTV Clip",
          ],
        ],
        cards: [
          {
            img: "../assets/images/about/facility-vault.webp",
            badge: "Grade-4 Vault",
            tag: "Physical Security",
            title: "Subterranean Airlock & Seismic Sensors",
            text: "Dual-interlocking steel vault doors with biometric iris scanner, seismic vibration detectors, and police direct Redcare line.",
            specs: [
              ["Night Time Lockout", "22:00 – 07:00 Dual Key"],
              ["Power Redundancy", "72-Hour Diesel Generator"],
              ["Fire Suppression", "Zero-Residue Inergen Gas"],
            ],
            progressLabel: "Physical Perimeter Integrity",
            progressVal: 100,
            btnText: "Run Sensor Test",
          },
          {
            img: "../assets/images/about/award-2.webp",
            badge: "FCA FRN-794102",
            tag: "Regulatory Governance",
            title: "Automated FCA GABRIEL / RegData Reporting",
            text: "Quarterly credit broking returns, commission disclosure transparency, and vulnerable customer charter logs.",
            specs: [
              ["Next RegData Filing", "15 January 2027"],
              ["Complaints Logged", "0 Open / 0 Ombudsman"],
              ["ICO Data Protection", "ZB-449102-UK Registered"],
            ],
            progressLabel: "Regulatory Readiness Index",
            progressVal: 100,
            btnText: "Download Reg Pack",
          },
          {
            img: "../assets/images/home/tech-spotlight.webp",
            badge: "Zero-Trust Auth",
            tag: "Password Policy",
            title: "Strict 5-Rule Password & Session Enforcement",
            text: "All rider and staff accounts enforce minimum 8-character complex passwords with uppercase, lowercase, numeric, and symbol rules.",
            specs: [
              ["Weak Password Block", "100% Enforced at Login"],
              ["Session Persistence", "Trusted Device Token"],
              ["Penetration Test", "NCC Group Passed Nov 2026"],
            ],
            progressLabel: "Authentication Security Score",
            progressVal: 100,
            btnText: "Security Policy",
          },
        ],
      },
    ],
  };

  /* ==========================================================================
     DASHBOARD RENDERING & INTERACTION CONTROLLER
     ========================================================================== */
  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function deriveNameFromEmail(email, fallbackName) {
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return fallbackName || "Oliver Sterling";
    }
    const localPart = email.split("@")[0].replace(/[^a-zA-Z0-9._-]/g, "");
    if (!localPart) return fallbackName || "Oliver Sterling";
    const parts = localPart.split(/[._-]+/).filter(Boolean);
    if (!parts.length) return fallbackName || "Oliver Sterling";
    return parts
      .map(function (p) {
        return p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
      })
      .join(" ");
  }

  function getSessionLoginData() {
    const params = new URLSearchParams(window.location.search);

    let role = params.get("role") || "";
    let email = params.get("email") || "";
    let remember = params.get("remember") || "";
    let username = params.get("user") || "";
    let pwdLen = params.get("pwdlen") || "";
    let loginTime = "";

    try {
      if (!role) {
        role =
          sessionStorage.getItem("stacklyLoginRole") ||
          localStorage.getItem("stacklyLoginRole") ||
          sessionStorage.getItem("stacklyRegisteredRole") ||
          "";
      }
      if (!email) {
        email =
          sessionStorage.getItem("stacklyLoginEmail") ||
          localStorage.getItem("stacklyLoginEmail") ||
          sessionStorage.getItem("stacklyRegisteredEmail") ||
          "";
      }
      if (!remember) {
        remember =
          sessionStorage.getItem("stacklyLoginRemember") ||
          localStorage.getItem("stacklyLoginRemember") ||
          "true";
      }
      if (!username) {
        username =
          sessionStorage.getItem("stacklyLoginUsername") ||
          localStorage.getItem("stacklyLoginUsername") ||
          sessionStorage.getItem("stacklyRegisteredUsername") ||
          "";
      }
      if (!pwdLen) {
        pwdLen =
          sessionStorage.getItem("stacklyLoginPasswordLen") ||
          localStorage.getItem("stacklyLoginPasswordLen") ||
          "10";
      }
      loginTime =
        sessionStorage.getItem("stacklyLoginTime") ||
        localStorage.getItem("stacklyLoginTime") ||
        "";
    } catch (e) {
      // Ignore storage restrictions
    }

    // Normalize role to one of the 5 defined roles
    if (!ROLE_DATA[role]) {
      role = "Rider / Buyer";
    }

    const roleConfig = ROLE_DATA[role];
    const finalEmail = email.trim() || roleConfig.defaultEmail;
    const finalUser =
      username.trim() ||
      deriveNameFromEmail(finalEmail, roleConfig.defaultUser);
    const maskCount = Math.max(8, Math.min(16, parseInt(pwdLen, 10) || 10));
    const maskedPwd = "•".repeat(maskCount) + " (Strong • 5/5 Rules Verified)";
    const rememberText =
      remember === "false"
        ? "Single Session • Active Now"
        : "Remember Me Checked • Trusted Device" +
          (loginTime ? " (" + loginTime + ")" : "");

    return {
      roleKey: role,
      roleLabel: roleConfig.roleLabel,
      email: finalEmail,
      username: finalUser,
      maskedPassword: maskedPwd,
      rememberText: rememberText,
      roleConfig: roleConfig,
    };
  }

  function renderSectionHTML(section) {
    const kpisHtml = section.kpis
      .map(function (kpi) {
        const trendClass =
          kpi.trendType === "hot"
            ? "kpi-trend-hot"
            : kpi.trendType === "warn"
              ? "kpi-trend-warn"
              : "kpi-trend-up";
        return (
          '<div class="col-12 col-sm-6 col-xl-3 d-flex">' +
          '<div class="dash-kpi-card w-100">' +
          "<div>" +
          '<div class="dash-kpi-top">' +
          '<span class="dash-kpi-label">' +
          escapeHtml(kpi.label) +
          "</span>" +
          '<div class="dash-kpi-icon"><i class="' +
          escapeHtml(kpi.icon) +
          '"></i></div>' +
          "</div>" +
          '<div class="dash-kpi-value">' +
          escapeHtml(kpi.value) +
          "</div>" +
          "</div>" +
          '<div class="dash-kpi-foot">' +
          '<span class="kpi-trend-badge ' +
          trendClass +
          '">' +
          escapeHtml(kpi.trend) +
          "</span>" +
          "<span>" +
          escapeHtml(kpi.foot) +
          "</span>" +
          "</div>" +
          "</div>" +
          "</div>"
        );
      })
      .join("");

    const theadHtml = section.tableHeaders
      .map(function (th) {
        return '<th scope="col">' + escapeHtml(th) + "</th>";
      })
      .join("");

    const tbodyHtml = section.tableRows
      .map(function (row) {
        const cellsHtml = row
          .slice(0, row.length - 1)
          .map(function (cell, idx) {
            if (cell && typeof cell === "object" && cell.text) {
              const pillType = cell.type || "success";
              return (
                '<td><span class="status-pill pill-' +
                escapeHtml(pillType) +
                '"><i class="fa-solid fa-circle-dot"></i> ' +
                escapeHtml(cell.text) +
                "</span></td>"
              );
            }
            if (idx === 0) {
              return (
                '<td class="fw-bold text-white">' + escapeHtml(cell) + "</td>"
              );
            }
            return "<td>" + escapeHtml(cell) + "</td>";
          })
          .join("");

        const actionLabel = row[row.length - 1];
        const actionCell =
          '<td><button type="button" class="dash-action-btn">' +
          '<i class="fa-solid fa-arrow-up-right-from-square"></i> ' +
          "<span>" +
          escapeHtml(actionLabel) +
          "</span></button></td>";

        return "<tr>" + cellsHtml + actionCell + "</tr>";
      })
      .join("");

    const cardsHtml = section.cards
      .map(function (card) {
        const specsHtml = (card.specs || [])
          .map(function (sp) {
            return (
              "<li>" +
              '<span><i class="fa-solid fa-check"></i> ' +
              escapeHtml(sp[0]) +
              "</span>" +
              "<strong>" +
              escapeHtml(sp[1]) +
              "</strong>" +
              "</li>"
            );
          })
          .join("");

        return (
          '<div class="col-12 col-lg-4 d-flex">' +
          '<article class="dash-equal-card w-100">' +
          '<div class="dash-card-thumb">' +
          '<img src="' +
          escapeHtml(card.img) +
          '" alt="' +
          escapeHtml(card.title) +
          '" loading="lazy" />' +
          '<span class="dash-card-thumb-badge">' +
          escapeHtml(card.badge) +
          "</span>" +
          "</div>" +
          '<div class="dash-card-body">' +
          '<div class="dash-card-top">' +
          '<div class="dash-card-tag"><i class="fa-solid fa-bolt"></i> ' +
          escapeHtml(card.tag) +
          "</div>" +
          '<h3 class="dash-card-title">' +
          escapeHtml(card.title) +
          "</h3>" +
          '<p class="dash-card-text">' +
          escapeHtml(card.text) +
          "</p>" +
          '<ul class="dash-spec-list">' +
          specsHtml +
          "</ul>" +
          "</div>" +
          "<div>" +
          '<div class="dash-progress-group">' +
          '<div class="dash-progress-label">' +
          "<span>" +
          escapeHtml(card.progressLabel) +
          "</span>" +
          '<span class="text-main">' +
          Number(card.progressVal) +
          "%</span>" +
          "</div>" +
          '<div class="dash-progress-bar">' +
          '<div class="dash-progress-fill" style="width: ' +
          Number(card.progressVal) +
          '%"></div>' +
          "</div>" +
          "</div>" +
          '<div class="dash-card-footer">' +
          '<a href="#" class="dash-action-btn"><i class="fa-solid fa-file-lines"></i> <span>Specs</span></a>' +
          '<button type="button" class="dash-action-btn btn-solid-red">' +
          "<span>" +
          escapeHtml(card.btnText) +
          '</span> <i class="fa-solid fa-arrow-right"></i>' +
          "</button>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</article>" +
          "</div>"
        );
      })
      .join("");

    return (
      "<!-- Active Sidebar Section Banner -->" +
      '<div class="dash-section-banner">' +
      "<div>" +
      '<div class="dash-section-kicker"><i class="' +
      escapeHtml(section.icon) +
      '"></i> ' +
      escapeHtml(section.kicker) +
      "</div>" +
      '<h2 class="dash-section-title">' +
      escapeHtml(section.title) +
      "</h2>" +
      '<p class="dash-section-desc">' +
      escapeHtml(section.desc) +
      "</p>" +
      "</div>" +
      '<div class="dash-section-actions">' +
      '<button type="button" class="dash-action-btn btn-solid-red">' +
      '<i class="fa-solid fa-plus"></i> <span>' +
      escapeHtml(section.primaryBtn) +
      "</span></button>" +
      '<a href="#" class="dash-action-btn">' +
      '<i class="fa-solid fa-download"></i> <span>' +
      escapeHtml(section.secondaryBtn) +
      "</span></a>" +
      "</div>" +
      "</div>" +
      "<!-- 4 Equal-Height KPI Cards Row -->" +
      '<div class="row g-4 align-items-stretch mb-4">' +
      kpisHtml +
      "</div>" +
      "<!-- Responsive Bootstrap Table Card (Requirement 6) -->" +
      '<div class="dash-table-card">' +
      '<div class="dash-table-header">' +
      '<h3 class="dash-table-title"><i class="fa-solid fa-table-list"></i> ' +
      escapeHtml(section.tableTitle) +
      "</h3>" +
      '<div class="d-flex align-items-center flex-wrap gap-2">' +
      '<a href="#" class="dash-action-btn"><i class="fa-solid fa-filter"></i> <span>Filter Ledger</span></a>' +
      '<button type="button" class="dash-action-btn"><i class="fa-solid fa-file-csv"></i> <span>Export CSV</span></button>' +
      "</div>" +
      "</div>" +
      '<div class="table-responsive dashboard-table-responsive">' +
      '<table class="table dash-table align-middle mb-0">' +
      "<thead><tr>" +
      theadHtml +
      "</tr></thead>" +
      "<tbody>" +
      tbodyHtml +
      "</tbody>" +
      "</table>" +
      "</div>" +
      "</div>" +
      "<!-- 3 Equal-Height Telemetry & Feature Cards Row (Requirement 8) -->" +
      '<div class="row g-4 align-items-stretch">' +
      cardsHtml +
      "</div>"
    );
  }

  function initDashboard() {
    const session = getSessionLoginData();
    const roleConfig = session.roleConfig;

    // 1. Populate Topbar Identity (Top-Right Header Only) & Sidebar Heading
    const sidebarMenuHeading = document.getElementById("sidebarMenuHeading");

    const topbarPortalTitle = document.getElementById("topbarPortalTitle");
    const topbarActiveSectionName = document.getElementById(
      "topbarActiveSectionName",
    );
    const topbarUserName = document.getElementById("topbarUserName");
    const topbarUserEmail = document.getElementById("topbarUserEmail");
    const topbarRoleText = document.getElementById("topbarRoleText");

    if (sidebarMenuHeading)
      sidebarMenuHeading.textContent = roleConfig.menuHeading;

    if (topbarPortalTitle) topbarPortalTitle.innerHTML = roleConfig.portalTitle;
    if (topbarUserName) topbarUserName.textContent = session.username;
    if (topbarUserEmail) topbarUserEmail.textContent = session.email;
    if (topbarRoleText) topbarRoleText.textContent = session.roleKey;

    // 2. Render Role-Specific Sidebar Menu Items (Requirement 2 & 5)
    const sidebarNav = document.getElementById("dashboardSidebarNav");
    const contentHost = document.getElementById("dashboardDynamicContent");
    const sidebarEl = document.getElementById("dashboardSidebar");
    const backdropEl = document.getElementById("dashSidebarBackdrop");

    function closeMobileSidebar() {
      if (sidebarEl) sidebarEl.classList.remove("sidebar-open");
      if (backdropEl) backdropEl.classList.remove("show");
      document.body.style.overflow = "";
    }

    function openMobileSidebar() {
      if (sidebarEl) sidebarEl.classList.add("sidebar-open");
      if (backdropEl) backdropEl.classList.add("show");
      document.body.style.overflow = "hidden";
    }

    function activateSection(sectionId) {
      const targetSection =
        roleConfig.sections.find(function (s) {
          return s.id === sectionId;
        }) || roleConfig.sections[0];

      if (sidebarNav) {
        sidebarNav
          .querySelectorAll(".dash-sidebar-link")
          .forEach(function (btn) {
            const isMatch =
              btn.getAttribute("data-sidebar-tab") === targetSection.id;
            btn.classList.toggle("active", isMatch);
            btn.setAttribute("aria-selected", isMatch ? "true" : "false");
          });
      }

      if (topbarActiveSectionName) {
        topbarActiveSectionName.textContent = targetSection.label;
      }

      if (contentHost) {
        contentHost.innerHTML = renderSectionHTML(targetSection);
      }

      closeMobileSidebar();
    }

    if (sidebarNav) {
      sidebarNav.innerHTML = roleConfig.sections
        .map(function (sec, idx) {
          return (
            '<li class="dash-sidebar-item" role="presentation">' +
            '<a href="#' +
            escapeHtml(sec.id) +
            '" class="dash-sidebar-link' +
            (idx === 0 ? " active" : "") +
            '" role="tab" aria-selected="' +
            (idx === 0 ? "true" : "false") +
            '" data-sidebar-tab="' +
            escapeHtml(sec.id) +
            '">' +
            '<span class="dash-sidebar-link-left">' +
            '<span class="dash-sidebar-icon"><i class="' +
            escapeHtml(sec.icon) +
            '"></i></span>' +
            "<span>" +
            escapeHtml(sec.label) +
            "</span>" +
            "</span>" +
            '<span class="dash-sidebar-tag">' +
            escapeHtml(sec.tag) +
            "</span>" +
            "</a>" +
            "</li>"
          );
        })
        .join("");
    }

    // Initial render of the first sidebar section for the logged-in role
    activateSection(roleConfig.sections[0].id);

    // 3. Requirement 7:
    // "Dashboard all the empty links, # and buttons click and redirect to 404 page,
    //  just add a script for that. the sidebar menu or logout button should not redirect to 404 page."
    document.addEventListener(
      "click",
      function (e) {
        // A. Allow Sidebar Menu items to switch dashboard sections (DO NOT redirect to 404)
        const sidebarTabLink = e.target.closest("[data-sidebar-tab]");
        if (sidebarTabLink) {
          e.preventDefault();
          e.stopPropagation();
          const tabId = sidebarTabLink.getAttribute("data-sidebar-tab");
          activateSection(tabId);
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }

        // B. Allow Mobile Sidebar Open/Close Toggle controls (DO NOT redirect to 404)
        const sidebarToggle = e.target.closest("[data-sidebar-toggle]");
        if (sidebarToggle) {
          e.preventDefault();
          e.stopPropagation();
          const mode = sidebarToggle.getAttribute("data-sidebar-toggle");
          if (mode === "open") {
            openMobileSidebar();
          } else {
            closeMobileSidebar();
          }
          return;
        }

        // C. Allow Logout Button to redirect to login.html (DO NOT redirect to 404)
        const logoutBtn = e.target.closest(
          "[data-logout-btn], .dash-logout-btn",
        );
        if (logoutBtn) {
          e.preventDefault();
          e.stopPropagation();
          try {
            sessionStorage.removeItem("stacklyLoginRole");
            sessionStorage.removeItem("stacklyLoginEmail");
            sessionStorage.removeItem("stacklyLoginRemember");
          } catch (err) {
            // Ignore storage errors
          }
          window.location.href = "login.html";
          return;
        }

        // D. Redirect all other <button> clicks or empty / '#' <a> links on the Dashboard to 404.html
        const clickedButton = e.target.closest("button");
        if (clickedButton) {
          e.preventDefault();
          e.stopPropagation();
          window.location.href = "404.html";
          return;
        }

        const clickedLink = e.target.closest("a");
        if (clickedLink) {
          const rawHref = clickedLink.getAttribute("href");
          const trimmed = rawHref ? rawHref.trim() : "";
          const lower = trimmed.toLowerCase();
          if (
            trimmed === "" ||
            trimmed === "#" ||
            trimmed.startsWith("#") ||
            lower === "javascript:void(0)" ||
            lower === "javascript:void(0);" ||
            lower === "javascript:;"
          ) {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = "404.html";
          }
        }
      },
      true,
    );
  }

  document.addEventListener("DOMContentLoaded", initDashboard);
})();

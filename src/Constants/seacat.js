export const modelParts = [
  "Sea Cat Hull",
  // "Secondary Fence",
  // "Exterior Rail",
  // "Interior Options",
];
export const initialColors = {
  "Sea Cat Hull": "#ACEBD8",
  "Secondary Fence": "#E3E6D5",
  "Exterior Rail": "#000000",
  "Interior Options": "#B8AB9E",
};

export const colorOptions = {
  "Sea Cat Hull": [
    {
      name: "Seafoam Green",
      hex: "#ACEBD8",
    },

    {
      name: "Light Blue",
      hex: "#5897B8",
    },
    {
      name: "Dark Blue",
      hex: "#193A70",
    },
    {
      name: "Light Grey",
      hex: "#B6B7BA",
    },
    {
      name: "White",
      hex: "#FFFFFF",
    },
  ],
  "Secondary Fence": [
    {
      name: "Pearl",
      hex: "#E3E6D5",
    },
    { name: "Meriot", hex: "#821B21" },
    {
      name: "Steel Blue",
      hex: "#3B4750",
    },
    {
      name: "Deep Blue",
      hex: "#0D3A66",
    },
    {
      name: "Charcoal",
      hex: "#424142",
    },
    {
      name: "Midnight Black",
      hex: "#000000",
    },
  ],
  "Exterior Rail": [
    {
      name: "Metal",
      hex: "#D5E2E6",
    },
    {
      name: "Black",
      hex: "#000000",
    },
  ],
  "Interior Options": [
    {
      name: "Taupe Series",
      hex: "#B8AB9E",
    },
    {
      name: "Grey Series",
      hex: "#d1d1d1",
    },
  ],
};
export const secondaryInteriorColorCodes = {
  "#B8AB9E": "#a18f7d",
  "#d1d1d1": "#454545",
};
export const variants = {
  "Sea Cat 262": {
    initialOptions: {
      "Standard Options (multi-select)": [],
      // "Rigging (multi-select)": [],
      // "Construction options (multi-select)": [],
      // "Electronics / Lighting (multi-select)": [],
      // "Appearance Options (multi-select)": [],
      // "Misc. Options (multi-select)": [],
      // "Mooring Covers (multi-select)": [],
      // "Trailer options (multi-select)": [],
      // "Financing options (single select)": null,
      // "Shipping options (single select)": null,
    },
    images: ["1.png"],
    options: {
      "Standard Options (multi-select)": [
        { name: "Two (2) 1500 GPH bilge pumps", price: 13000 },
        {
          name: "Two (2) 25-gallon, lighted sea water blue live wells",
          price: 13000,
        },
        { name: "Two (2) 500 GPH bait pumps", price: 13000 },
        { name: "Four (4) Yeti sized SS drink holders", price: 13000 },
        {
          name: "Six (6) gunwale mounted SS rod holders w/ overboard drain",
          price: 13000,
        },
        { name: "Livorsi 3-spoke custom steering wheel", price: 13000 },
        {
          name: "Livorsi high performance LED navigation lights",
          price: 13000,
        },
        { name: "SeaStar tilt hydraulic steering system", price: 13000 },

        {
          name: "Gemlux stainless friction hinges on all lids and hatches",
          price: 13000,
        },
        { name: "Folding rear seat for 2", price: 13000 },
        { name: "Gemlux overboard drain all stainless", price: 13000 },
        { name: "Wrap around deflector windshield", price: 13000 },
        { name: "Main wiring harness w/ auto reset breakers", price: 13000 },
        { name: "ABYC tinned copper wiring", price: 13000 },
        { name: "Electric horn", price: 13000 },
        {
          name: "All fiberglass enclosed and sealed racing transom",
          price: 13000,
        },

        {
          name: "Two (2) below deck closed cell foam insulated fish boxes",
          price: 13000,
        },
        { name: "Two (2) gulper Grouper pumps for fish boxes", price: 13000 },
        { name: "Cushioned forward console seating", price: 13000 },
        {
          name: "Upper & lower custom SS transom support plates",
          price: 13000,
        },
        { name: "Heavy duty vinyl rub rail w/ SS inserts", price: 13000 },
        {
          name: "All upholstery is custom fabricated by Llebroc industries",
          price: 13000,
        },
        { name: "100% self-bailing cockpit w/ hide away drains", price: 13000 },
        { name: "Raw water wash down", price: 13000 },
      ],
      // "Rigging (multi-select)": [
      //   { name: "Hang Motor Only", price: 6400 },
      //   { name: "Full Rig", price: 7200 },
      //   { name: "Full Rig DTS", price: 8100 },
      //   { name: "Water Ready", price: 9100 },
      //],
      // "Construction options (multi-select)": [
      //   { name: "25' Transom", price: 600 },
      //   { name: "Tri-Log Package", price: 750 },
      //   { name: "Full Keel 2-Log", price: 750 },
      //   { name: "Full Keel 3-Log", price: 750 },
      //   {
      //     name: "HHP Tag (Incl. Lifting Strakes, Hydl Steering) Requires Tri-Log Package",
      //     price: 750,
      //   },
      //   { name: "Lifting Strakes (Tri-Log)", price: 750 },
      //   { name: "Full Spray Shield for Tri-Log", price: 750 },
      //   { name: "Spray Shield 3/4 (2-Log)", price: 750 },
      //   { name: "Spray Shield Full (2-Log)", price: 750 },
      //   { name: "Atlantis Deck Upgrade", price: 750 },
      // ],
      // "Electronics / Lighting (multi-select)": [
      //   { name: "Chrome Light Housing w/ Dock Side Light", price: 85 },
      //   {
      //     name: "EXCHange Chrome for Smoked Chrome Light Housing (For Black Rails)",
      //     price: 185,
      //   },
      //   { name: "Cell Phone Holder w/ Charging Port", price: 165 },
      //   { name: "Docking Lights", price: 165 },
      //   { name: "GPS Speedo", price: 165 },
      //   { name: "Hour Meter", price: 165 },
      //   { name: "Fish Finder - GPS Lowrance Hook 2-4", price: 165 },
      //   { name: "In Dash Depth Gauge", price: 165 },
      //   { name: "LED Under Seat Lighting", price: 165 },
      //   { name: "LED Under Water Lighting (Transom)", price: 165 },
      //   { name: "Dual Battery Shut-Off Switch", price: 165 },
      //   { name: "Courtesy Light on Console", price: 165 },
      //   { name: "Trim Gauge Honda", price: 165 },
      //   { name: "Trim Gauge Mercury", price: 165 },
      //   { name: "Trim Gauge Yamaha", price: 165 },
      //   { name: "12V Trolling Motor Harness", price: 165 },
      //   { name: "24V Trolling Motor Harness", price: 165 },
      // ],
      // "Appearance Options (multi-select)": [
      //   { name: "Interior Package - Flint Grey", price: 495 },
      //   { name: "Interior Package - Taupe", price: 495 },
      //   { name: "Upcharge/Upholstery Non-Standard", price: 575 },
      //   { name: "Extend 'L' Seat from 30' to 45'", price: 495 },
      //   { name: "Exchange 30' Couch for 33' Lean Back Couch", price: 495 },
      //   { name: "Fishing Chair Complete", price: 495 },
      //   { name: "Fishing Chair - EXCH for IB Capt. Chair", price: 495 },
      //   { name: "Fishing Chair - EXCH for AT Capt. Chair", price: 495 },
      //   { name: "Flooring Upgrade - Grey Teak II Slate", price: 495 },
      //   { name: "Flooring Upgrade - Grey Plank Flint", price: 495 },
      //   { name: "Flooring Upgrade - Taupe Teak Nutmeg", price: 495 },
      //   { name: "Flooring Upgrade - Taupe Plank Shadow", price: 495 },
      //   { name: "Upgrade 192 Console to IB Console", price: 495 },
      //   { name: "Remove IB Console and Install 192 Console", price: 495 },
      //   {
      //     name: "Exchange AT Console for SI Console w/ 12' Simrad",
      //     price: 495,
      //   },
      // ],
      // "Misc. Options (multi-select)": [
      //   { name: "Ski Tow Walk Through", price: 90 },
      //   { name: "Tetra Pad (Tube Storage Over Ski Tow)", price: 90 },
      //   { name: "Cleats - EXCHange Std for Fold Down (2 pr)", price: 375 },
      //   { name: "Cup Holder, Portable A'Lure", price: 475 },
      //   { name: "Tilt Steering", price: 375 },
      //   { name: "Hydraulic Steering/Seastar", price: 375 },
      //   { name: "Power Assist-Seastar Incl. Hydraulic Steering", price: 375 },
      //   { name: "Ladder Upgrade to Atlantis", price: 375 },
      //   {
      //     name: "Lockable Rod Storage (Adj. Ped. Req. if Helm Chair Upgrade)",
      //     price: 375,
      //   },
      //   { name: "Portable Rod Holder Insert", price: 375 },
      //   { name: "Rod Holder Complete", price: 375 },
      //   { name: "Table Complete - Kidney - Grey or Tan", price: 375 },
      //   { name: "Table Complete - Oval - Grey or Tan", price: 375 },
      //   { name: "Extra Table Base", price: 375 },
      //   { name: "Trolling Motor Gate EXCH", price: 375 },
      //   { name: "Sacrificial Anode (For Salt Water)", price: 375 },
      //   { name: "Under Deck Strips", price: 375 },
      //   { name: "U Bolts 16ft. From Bow", price: 375 },
      //   {
      //     name: "46 Gallon Gas Tank Upgrade (Req. Tri-Log Package)",
      //     price: 375,
      //   },
      //   { name: "Livewell - Fiberglass", price: 375 },
      // ],
      // "Mooring Covers (multi-select)": [
      //   { name: "Mooring Cover", price: 90 },
      //   { name: "Upcharge/Mooring Cover Non-Standard", price: 420 },
      // ],
      // "Trailer options (multi-select)": [
      //   { name: "Trailer - 192", price: 2650 },
      //   { name: "Spare Tire", price: 3150 },
      //   { name: "Spare Tire Carrier", price: 375 },
      // ],
      // "Financing options (single select)": [
      //   { name: "C.O.D.", price: 2650 },
      //   { name: "Northpoint", price: 3150 },
      // ],
      // "Shipping options (single select)": [
      //   { name: "Dealer Pickup", price: 2650 },
      //   { name: "Single/Double Pull", price: 3150 },
      //   { name: "Semi Truck", price: 375 },
      // ],
    },
  },
  "Sea Cat 262 S/C": {
    initialOptions: {
      "Standard Options (multi-select)": [],
      // "Rigging (multi-select)": [],
      // "Construction options (multi-select)": [],
      // "Electronics / Lighting (multi-select)": [],
      // "Appearance Options (multi-select)": [],
      // "Misc. Options (multi-select)": [],
      // "Mooring Covers (multi-select)": [],
      // "Trailer options (multi-select)": [],
      // "Financing options (single select)": null,
      // "Shipping options (single select)": null,
    },
    images: ["1.png"],
    options: {
      "Standard Options (multi-select)": [
        { name: "Custom fiberglass T-top", price: 13000 },
        {
          name: "Two (2) 25-gallon, lighted sea water blue live wells",
          price: 13000,
        },
        { name: "Two (2) 500 GPH bait pumps", price: 13000 },
        { name: "Four (4) Yeti sized SS drink holders", price: 13000 },
        {
          name: "Six (6) gunwale mounted SS rod holders w/ overboard drain",
          price: 13000,
        },
        { name: "Livorsi 3-spoke custom steering wheel", price: 13000 },
        {
          name: "Livorsi high performance LED navigation lights",
          price: 13000,
        },
        { name: "SeaStar tilt hydraulic steering system", price: 13000 },

        {
          name: "Gemlux stainless friction hinges on all lids and hatches",
          price: 13000,
        },
        { name: "Folding rear seat for 2", price: 13000 },
        { name: "Gemlux overboard drain all stainless", price: 13000 },
        { name: "Wrap around deflector windshield", price: 13000 },
        { name: "Main wiring harness w/ auto reset breakers", price: 13000 },
        { name: "ABYC tinned copper wiring", price: 13000 },
        { name: "Electric horn", price: 13000 },
        {
          name: "All fiberglass enclosed and sealed racing transom",
          price: 13000,
        },

        {
          name: "Two (2) below deck closed cell foam insulated fish boxes",
          price: 13000,
        },
        { name: "Two (2) gulper Grouper pumps for fish boxes", price: 13000 },
        { name: "Cushioned forward console seating", price: 13000 },
        {
          name: "Upper & lower custom SS transom support plates",
          price: 13000,
        },
        { name: "Heavy duty vinyl rub rail w/ SS inserts", price: 13000 },
        {
          name: "All upholstery is custom fabricated by Llebroc industries",
          price: 13000,
        },
        { name: "100% self-bailing cockpit w/ hide away drains", price: 13000 },
        { name: "Raw water wash down", price: 13000 },
      ],
      // "Rigging (multi-select)": [
      //   { name: "Hang Motor Only", price: 6400 },
      //   { name: "Full Rig", price: 7200 },
      //   { name: "Full Rig DTS", price: 8100 },
      //   { name: "Water Ready", price: 9100 },
      //],
      // "Construction options (multi-select)": [
      //   { name: "25' Transom", price: 600 },
      //   { name: "Tri-Log Package", price: 750 },
      //   { name: "Full Keel 2-Log", price: 750 },
      //   { name: "Full Keel 3-Log", price: 750 },
      //   {
      //     name: "HHP Tag (Incl. Lifting Strakes, Hydl Steering) Requires Tri-Log Package",
      //     price: 750,
      //   },
      //   { name: "Lifting Strakes (Tri-Log)", price: 750 },
      //   { name: "Full Spray Shield for Tri-Log", price: 750 },
      //   { name: "Spray Shield 3/4 (2-Log)", price: 750 },
      //   { name: "Spray Shield Full (2-Log)", price: 750 },
      //   { name: "Atlantis Deck Upgrade", price: 750 },
      // ],
      // "Electronics / Lighting (multi-select)": [
      //   { name: "Chrome Light Housing w/ Dock Side Light", price: 85 },
      //   {
      //     name: "EXCHange Chrome for Smoked Chrome Light Housing (For Black Rails)",
      //     price: 185,
      //   },
      //   { name: "Cell Phone Holder w/ Charging Port", price: 165 },
      //   { name: "Docking Lights", price: 165 },
      //   { name: "GPS Speedo", price: 165 },
      //   { name: "Hour Meter", price: 165 },
      //   { name: "Fish Finder - GPS Lowrance Hook 2-4", price: 165 },
      //   { name: "In Dash Depth Gauge", price: 165 },
      //   { name: "LED Under Seat Lighting", price: 165 },
      //   { name: "LED Under Water Lighting (Transom)", price: 165 },
      //   { name: "Dual Battery Shut-Off Switch", price: 165 },
      //   { name: "Courtesy Light on Console", price: 165 },
      //   { name: "Trim Gauge Honda", price: 165 },
      //   { name: "Trim Gauge Mercury", price: 165 },
      //   { name: "Trim Gauge Yamaha", price: 165 },
      //   { name: "12V Trolling Motor Harness", price: 165 },
      //   { name: "24V Trolling Motor Harness", price: 165 },
      // ],
      // "Appearance Options (multi-select)": [
      //   { name: "Interior Package - Flint Grey", price: 495 },
      //   { name: "Interior Package - Taupe", price: 495 },
      //   { name: "Upcharge/Upholstery Non-Standard", price: 575 },
      //   { name: "Extend 'L' Seat from 30' to 45'", price: 495 },
      //   { name: "Exchange 30' Couch for 33' Lean Back Couch", price: 495 },
      //   { name: "Fishing Chair Complete", price: 495 },
      //   { name: "Fishing Chair - EXCH for IB Capt. Chair", price: 495 },
      //   { name: "Fishing Chair - EXCH for AT Capt. Chair", price: 495 },
      //   { name: "Flooring Upgrade - Grey Teak II Slate", price: 495 },
      //   { name: "Flooring Upgrade - Grey Plank Flint", price: 495 },
      //   { name: "Flooring Upgrade - Taupe Teak Nutmeg", price: 495 },
      //   { name: "Flooring Upgrade - Taupe Plank Shadow", price: 495 },
      //   { name: "Upgrade 192 Console to IB Console", price: 495 },
      //   { name: "Remove IB Console and Install 192 Console", price: 495 },
      //   {
      //     name: "Exchange AT Console for SI Console w/ 12' Simrad",
      //     price: 495,
      //   },
      // ],
      // "Misc. Options (multi-select)": [
      //   { name: "Ski Tow Walk Through", price: 90 },
      //   { name: "Tetra Pad (Tube Storage Over Ski Tow)", price: 90 },
      //   { name: "Cleats - EXCHange Std for Fold Down (2 pr)", price: 375 },
      //   { name: "Cup Holder, Portable A'Lure", price: 475 },
      //   { name: "Tilt Steering", price: 375 },
      //   { name: "Hydraulic Steering/Seastar", price: 375 },
      //   { name: "Power Assist-Seastar Incl. Hydraulic Steering", price: 375 },
      //   { name: "Ladder Upgrade to Atlantis", price: 375 },
      //   {
      //     name: "Lockable Rod Storage (Adj. Ped. Req. if Helm Chair Upgrade)",
      //     price: 375,
      //   },
      //   { name: "Portable Rod Holder Insert", price: 375 },
      //   { name: "Rod Holder Complete", price: 375 },
      //   { name: "Table Complete - Kidney - Grey or Tan", price: 375 },
      //   { name: "Table Complete - Oval - Grey or Tan", price: 375 },
      //   { name: "Extra Table Base", price: 375 },
      //   { name: "Trolling Motor Gate EXCH", price: 375 },
      //   { name: "Sacrificial Anode (For Salt Water)", price: 375 },
      //   { name: "Under Deck Strips", price: 375 },
      //   { name: "U Bolts 16ft. From Bow", price: 375 },
      //   {
      //     name: "46 Gallon Gas Tank Upgrade (Req. Tri-Log Package)",
      //     price: 375,
      //   },
      //   { name: "Livewell - Fiberglass", price: 375 },
      // ],
      // "Mooring Covers (multi-select)": [
      //   { name: "Mooring Cover", price: 90 },
      //   { name: "Upcharge/Mooring Cover Non-Standard", price: 420 },
      // ],
      // "Trailer options (multi-select)": [
      //   { name: "Trailer - 192", price: 2650 },
      //   { name: "Spare Tire", price: 3150 },
      //   { name: "Spare Tire Carrier", price: 375 },
      // ],
      // "Financing options (single select)": [
      //   { name: "C.O.D.", price: 2650 },
      //   { name: "Northpoint", price: 3150 },
      // ],
      // "Shipping options (single select)": [
      //   { name: "Dealer Pickup", price: 2650 },
      //   { name: "Single/Double Pull", price: 3150 },
      //   { name: "Semi Truck", price: 375 },
      // ],
    },
  },
};
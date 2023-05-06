const Products = [
    {
      id: "1",
      Product: "https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UY218_.jpg",
      Name : "IPhone 14",
      Category: "all,mobiles",
      price: "PRICE = ₹67,999",
      Description: `Descriptions:
       15.40 cm (6.1-inch) Super Retina XDR display
       Advanced camera system for better photos in any light
       Cinematic mode now in 4K Dolby Vision up to 30 fps
       Action mode for smooth, steady, handheld videos
       Vital safety technology — Crash Detection calls for help when you can't
       All-day battery life and up to 20 hours of video playback
       Industry-leading durability features with Ceramic Shield and water resistance
       A15 Bionic chip with 5-core GPU for lightning-fast performance. Superfast 5G cellular
       iOS 16 offers even more ways to personalise, communicate and share.`
    },
    {
      id: "11",
      Product: "https://m.media-amazon.com/images/I/51Z-CqWUN1L._AC_UY218_.jpg",
      Name : "Acer i7",
      Category: "all,laptops",
      price: "PRICE = ₹44,990",
      Description : `Descriptions:
      High Performance :Intel Core i5 1135G7 Processor with Intel Iris Xe Graphics
      Internal Specifications:8 GB DDR4 SDRAM support: Up to 32 GB
      Display: 14" Full HD 1920 x 1080 resolution Antiglare LED backlit TFT LCD, 16:9 aspect ratio
      Storage: 512 GB SSD, M.2 Gen 3 PCIe, Various Connectivity Options : HDMI, USB 3.2, Gen 1, Type A & C ports, Fast connectivity through Gigabit LAN
      Othe Special Features: Camera Shutter, USB 3.2 Reversible Type-C Connector, 1.49 KG.
      `
    },
    {
      id: "21",
      Product: "https://m.media-amazon.com/images/I/511mMK0LW2L._AC_UY218_.jpg",
      Name : "Lenova tab7",
      Category: "all,tablets",
      price: "PRICE = ₹17,999",
      Description : `Descriptions:
      10.3 inch FHD display; 330 nits brightness; Display Type - FHD, IPS, Screen refresh rate - 60 Hz
      Calling supported (Yes); 4GB RAM| 128GB ROM| Expandable upto 256 GB; Processor description - MediaTek Helio P22T (8C, 8x A53 @2.3GHz); Operating system - Android 9 Pie
      Battery power - 5000 mAH battery; charger wattage - 10W; 8 MP primary camera, 5 MP secondary camera; Camera Flash - No
      Finger print sensor - No, GPS - Yes, Stylus compatible - No; Headphone jack (Yes); Speaker wattage - 2W; Compatibility with external HDD - No, Use Micro SD Card.`
    },
    {
      id: "31",
      Product: "https://m.media-amazon.com/images/I/61WqF8Y6HTL._AC_UY218_.jpg",
      Name : "Boat Rockers270",
      Category: "all,headphones",
      price: "PRICE = ₹998",
      Description : `Features:
      With 40mm Drivers get ready to immerse in HD auditory experience with super extra bass to get the day going
      Plug into your rhythm with style via the wireless Bluetooth headset and carry the vibe wherever you go
      Stay immersed into Nirvana for extended durations with a playtime of up to 8 hours
      Its lightweight and ergonomic design offers the comfort and ease while you listen to your favourite artists and have fun.`
    },
    {
      id: "12",
      Product: "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY218_.jpg",
      Name : "Mi Book",
      Category: "all,laptops",
      price : "PRICE = ₹51,999",
      Description : `Descriptions:
      Processor: 11th Gen Intel Tiger Lake Core i5-11320H processor| Speed: 3.1 GHz(base) - 4.4 GHz(max) | 4 cores | 8 Threads | 8 MB Cache
      Display: 35.56 centimeters IPS QHD+ resolution (2560x1600)| 300 nits brightness |16:10 aspect ratio, 100% sRGB,215 PPI, 1000:1 contrast ratio | Anti Glare | TUV low Blue light
      Memory & Storage: 16GB DDR4 3200 MHz | 512GB PCIe NVMe M.2 SSD.`
    },
    {
      id: "2",
      Product: "https://m.media-amazon.com/images/I/81t6Av5DvXL._AC_UY218_.jpg",
      Name : "Samsung M04",
      Category: "all,mobiles",
      price : "PRICE = ₹6,999",
      Description : `Descriptions:
      Powerful MediaTek Helio P35 Octa Core 2.3GHz with Android 12,One UI Core 4.1
      13MP+2MP Dual camera setup- True 13MP (F2.2) main camera + 2MP (F2.4) | 5MP (F2.2) front came
      16.55 centimeters (6.5-inch) LCD, HD+ resolution with 720 x 1600 pixels resolution, 269 PPI with 16M color
      5000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase`
    },
    {
      id: "32",
      Product: "https://m.media-amazon.com/images/I/51i+LdztEBL._AC_UY218_.jpg",
      Name : "Sony U-7000",
      Category: "all,headphones",
      price : "PRICE = ₹19,989",
      Description : `Description:
      Digital noise cancelling: Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation;Voice assistant: Alexa, Google Assistant & Siri enabled (In-built) for voice access to music, information and more. Activate with a simple touch
      Speak-to-chat: Headphones use an array of smart technologies to create a seamless, hands-free listening experience.`
    },
    {
      id: "22",
      Product: "https://m.media-amazon.com/images/I/81a-rN2A3DS._AC_UL320_.jpg",
      Name : "IPad ProMax",
      Category: "all,tablets",
      price : "PRICE = ₹78,499",
      Description : `Descriptions:
      Brilliant 11-inch Liquid Retina display with ProMotion, True Tone, and P3 wide color
      M2 chip with 8-core CPU and 10-core GPU
      12MP Wide camera, 10MP Ultra Wide back camera, and LiDAR Scanner for immersive AR
      12MP Ultra Wide front camera with Center Stage
      Stay connected with ultrafast Wi-Fi 6E.`
    },
    {
      id: "33",
      Product: "https://m.media-amazon.com/images/I/61+btxzpfDL._AC_UY218_.jpg",
      Name : "Sony T-9000",
      Category: "all,headphones",
      price : "PRICE = ₹29,899",
      Description : `Descriptions:
       Digital noise cancelling: Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation;Voice assistant: Alexa, Google Assistant & Siri enabled (In-built) for voice access to music, information and more. Activate with a simple touch
      Speak-to-chat: Headphones use an array of smart technologies to create a seamless, hands-free listening experience.`
    },
    {
      id: "13",
      Product: "https://m.media-amazon.com/images/I/71tHNTGasKL._AC_UY218_.jpg",
      Name : "Lexgion Max",
      Category: "all,laptops",
      price : "PRICE = ₹75,599",
      Description : `Descriptions:
      Processor: 11th Gen Intel Tiger Lake Core i5-11320H processor| Speed: 3.1 GHz(base) - 4.4 GHz(max) | 4 cores | 8 Threads | 8 MB Cache
      Display: 35.56 centimeters IPS QHD+ resolution (2560x1600)| 300 nits brightness |16:10 aspect ratio, 100% sRGB,215 PPI, 1000:1 contrast ratio | Anti Glare | TUV low Blue light
      Memory & Storage: 16GB DDR4 3200 MHz | 512GB PCIe NVMe M.2 SSD.`
    },
    {
      id: "23",
      Product: "https://m.media-amazon.com/images/I/71CKGX0iXPS._AC_UL320_.jpg",
      Name : "Samsung Tab 8",
      Category: "all,tablets",
      price : "PRICE = ₹52,999",
      Description : `Descriptions:
      27.94 cm (11 inch) Cinematic Display, 2560x1600,276ppi,LTPS TFT Screen With 120Hz Refresh Rate
      Android 12, Quad speakers with Dolby Atmos, Powerful Snapdragon 8th Gen Chipset
      13/6MP (Dual) + Flash Rear Camera ,12MP (Ultra Wide) Front Camera.`
    },
    {
      id: "3",
      Product: "https://m.media-amazon.com/images/I/81UT07JsBqL._AC_UY218_.jpg",
      Name : "Redmi A1",
      Category: "all,mobiles",
      price : "PRICE = ₹5,699",
      Description : `Descriptions:
      Display: 16.56cm HD+ Scratch resistant display
      Processor: MediaTek Helio A22 processor; up to 2.0GHz
      Camera: 8MP Dual camera | 5MP Front camera
      Memory, Storage & SIM: 2GB LPDDR4x RAM | 32GB storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)
      Battery: 5000 mAh large battery with 10W in-box charger.`
    },
    {
      id: "24",
      Product: "https://m.media-amazon.com/images/I/71UD5dhwyYS._AC_UL320_.jpg",
      Name : "Lenova Tab7",
      Category: "all,tablets",
      price : "PRICE = ₹19,999",
      Description : `Descriptions:
      10.61 inch FHD 2K (2000 * 1200) display| 400 nits brightness| PPI 220| 72% NTSC; Display Type - 2K, FHD, IPS; Screen Refresh - 60Hz
      Calling supported (Yes); 6 GB RAM| 128 GB ROM expandable upto 1 TB; Processor description - Snapdragon SDM 6803 processor (4 *A73, 2.4 GHz + 4 * A53, 1.9 GHz0; Operating system - Android 12.0
      Battery power 7700 mAH battery, 12 hours video playback time; charger wattage - 10W, 8 MP Auto-Focus with Flash Rear Camera; 8 MP Fixed Focus Front Camera.`
    },
    {
      id: "5",
      Product: "https://m.media-amazon.com/images/I/61lKQWyMdDL._AC_UY218_.jpg",
      Name : "IPhone 14pro Max",
      Category: "all,mobiles",
      price : "PRICE = ₹1,27,999",
      Description : `Descriptions:
      17.00 cm (6.7-inch) Super Retina XDR display featuring Always-On and ProMotion
      Dynamic Island, a magical new way to interact with iPhone
      48MP Main camera for up to 4x greater resolution
      Cinematic mode now in 4K Dolby Vision up to 30 fps
      Action mode for smooth, steady, handheld videos
      All-day battery life and up to 29 hours of video playback
      Vital safety technology — Crash Detection can detect a severe car crash and call for help
      A16 Bionic, the ultimate smartphone chip. Superfast 5G cellular
      Industry-leading durability features with Ceramic Shield and water resistance
      iOS 16 offers even more ways to personalise, communicate and share.`
    },
    {
      id: "34",
      Product: "https://m.media-amazon.com/images/I/81lLGM7SKbL._AC_UY218_.jpg",
      Name : "Zebronic 500",
      Category: "all,headphones",
      price : "PRICE = ₹1,599",
      Description : `Descriptions:
      Zeb-Duke is a wireless headphone with a mic that is an up on style with comfortable ear cushions, adjustable headband, and RGB lights. Inline Remote : Yes
      Speaker Impedance 32ΩFrequency Response 20Hz - 20kHz.Bluetooth works in range of 10 m only without obstacles
      Charging time 2hrsPlayback time 30 hrs*Talk time 30 hrs*.`
    },
    {
      id: "14",
      Product: "https://m.media-amazon.com/images/I/810Y-PUrbyL._AC_UY218_.jpg",
      Name : "Hp Book pro",
      Category: "all,laptops",
      price : "PRICE = ₹65,899",
      Description : `Descriptions:
      Processor: 11th Gen Intel Tiger Lake Core i5-11320H processor| Speed: 3.1 GHz(base) - 4.4 GHz(max) | 4 cores | 8 Threads | 8 MB Cache
      Display: 35.56 centimeters IPS QHD+ resolution (2560x1600)| 300 nits brightness |16:10 aspect ratio, 100% sRGB,215 PPI, 1000:1 contrast ratio | Anti Glare | TUV low Blue light
      Memory & Storage: 16GB DDR4 3200 MHz | 512GB PCIe NVMe M.2 SSD.`
    },
    {
      id: "6",
      Product: "https://m.media-amazon.com/images/I/81ZZPvIWnYL._AC_UY218_.jpg",
      Name : "Redmi Note 12",
      Category: "all,mobiles",
      price : "PRICE = ₹14,999",
      Description : `Descriptions:
      Display: 16.56cm HD+ Scratch resistant display
      Processor: MediaTek Helio A22 processor; up to 2.0GHz
      Camera: 8MP Dual camera | 5MP Front camera
      Memory, Storage & SIM: 2GB LPDDR4x RAM | 32GB storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)
      Battery: 5000 mAh large battery with 10W in-box charger.`
    },
    {
      id: "15",
      Product: "https://m.media-amazon.com/images/I/61Newaer7kS._AC_UY218_.jpg",
      Name : "Sony MaxBook",
      Category: "all,laptops",
      price : "PRICE = ₹54,799",
      Description : `Descriptions:
      Processor: 11th Gen Intel Tiger Lake Core i5-11320H processor| Speed: 3.1 GHz(base) - 4.4 GHz(max) | 4 cores | 8 Threads | 8 MB Cache
      Display: 35.56 centimeters IPS QHD+ resolution (2560x1600)| 300 nits brightness |16:10 aspect ratio, 100% sRGB,215 PPI, 1000:1 contrast ratio | Anti Glare | TUV low Blue light
      Memory & Storage: 16GB DDR4 3200 MHz | 512GB PCIe NVMe M.2 SSD.`
    },
    {
      id: "25",
      Product: "https://m.media-amazon.com/images/I/61Eb9vtdSML._AC_UY218_.jpg",
      Name : "Redmi tabA",
      Category: "all,tablets",
      price : "PRICE = ₹25,599",
      Description : `Descriptions:
      10.61 inch FHD 2K (2000 * 1200) display| 400 nits brightness| PPI 220| 72% NTSC; Display Type - 2K, FHD, IPS; Screen Refresh - 60Hz
      Calling supported (Yes); 6 GB RAM| 128 GB ROM expandable upto 1 TB; Processor description - Snapdragon SDM 6803 processor (4 *A73, 2.4 GHz + 4 * A53, 1.9 GHz0; Operating system - Android 12.0
      Battery power 7700 mAH battery, 12 hours video playback time; charger wattage - 10W, 8 MP Auto-Focus with Flash Rear Camera; 8 MP Fixed Focus Front Camera.`
    },
    {
      id: "35",
      Product: "https://m.media-amazon.com/images/I/61YHhQzV+KL._AC_UY218_.jpg",
      Name : "Sony Ultra",
      Category: "all,headphones",
      price : "PRICE = ₹29,999",
      Description : `Descriptions:
      Digital noise cancelling: Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation;Voice assistant: Alexa, Google Assistant & Siri enabled (In-built) for voice access to music, information and more. Activate with a simple touch
      Speak-to-chat: Headphones use an array of smart technologies to create a seamless, hands-free listening experience.`
    },
    {
      id: "16",
      Product: "https://m.media-amazon.com/images/I/71iiXU7HHkL._AC_UY218_.jpg",
      Name : "Mi NoteBook Pro",
      Category: "all,laptops",
      price : "PRICE = ₹59,789",
      Description : `Descriptions:
      High Performance :Intel Core i5 1135G7 Processor with Intel Iris Xe Graphics
      Internal Specifications:8 GB DDR4 SDRAM support: Up to 32 GB
      Display: 14" Full HD 1920 x 1080 resolution Antiglare LED backlit TFT LCD, 16:9 aspect ratio
      Storage: 512 GB SSD, M.2 Gen 3 PCIe, Various Connectivity Options : HDMI, USB 3.2, Gen 1, Type A & C ports, Fast connectivity through Gigabit LAN
      Othe Special Features: Camera Shutter, USB 3.2 Reversible Type-C Connector, 1.49 KG.`
    },
    {
      id: "36",
      Product: "https://m.media-amazon.com/images/I/61HXCeozUjL._AC_UY218_.jpg",
      Name : "JBL 2000",
      Category: "all,headphones",
      price : "PRICE = ₹2,999 ",
      Description: `Descriptions:
      With 40mm Drivers get ready to immerse in HD auditory experience with super extra bass to get the day going
      Plug into your rhythm with style via the wireless Bluetooth headset and carry the vibe wherever you go
      Stay immersed into Nirvana for extended durations with a playtime of up to 8 hours.`
    },
    {
      id: "7",
      Product: "https://m.media-amazon.com/images/I/81OZGH4fZiL._AC_UY218_.jpg",
      Name : "Redmi 10",
      Category: "all,mobiles",
      price : "PRICE = ₹15,000",
      Description : `Descriptions:
      Display: 16.56cm HD+ Scratch resistant display
      Processor: MediaTek Helio A22 processor; up to 2.0GHz
      Camera: 8MP Dual camera | 5MP Front camera
      Memory, Storage & SIM: 2GB LPDDR4x RAM | 32GB storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)
      Battery: 5000 mAh large battery with 10W in-box charger.`
    },
    {
      id: "26",
      Product: "https://m.media-amazon.com/images/I/41jdvXSoeyS._AC_UY218_.jpg",
      Name : "Lenova Tab X",
      Category: "all,tablets",
      price : "PRICE = ₹69,999",
      Description : `Descriptions:
      Processor: 11th Gen Intel Tiger Lake Core i5-11320H processor| Speed: 3.1 GHz(base) - 4.4 GHz(max) | 4 cores | 8 Threads | 8 MB Cache
      Display: 35.56 centimeters IPS QHD+ resolution (2560x1600)| 300 nits brightness |16:10 aspect ratio, 100% sRGB,215 PPI, 1000:1 contrast ratio | Anti Glare | TUV low Blue light
      Memory & Storage: 16GB DDR4 3200 MHz | 512GB PCIe NVMe M.2 SSD.`
    },
    {
      id: "37",
      Product: "https://m.media-amazon.com/images/I/61LoZ5bkOkL._AC_UL320_.jpg",
      Name : "Magnet 2",
      Category: "all,headphones",
      price : "PRICE = ₹1,099",
      Description : `Descriptions:
      With 40mm Drivers get ready to immerse in HD auditory experience with super extra bass to get the day going
      Plug into your rhythm with style via the wireless Bluetooth headset and carry the vibe wherever you go
      Stay immersed into Nirvana for extended durations with a playtime of up to 8 hours.`
    },
    {
      id: "27",
      Product: "https://m.media-amazon.com/images/I/61R1tulpfzL._AC_UY218_.jpg",
      Name : "Samsung Tab7",
      Category: "all,tablets",
      price : "PRICE = ₹57,000",
      Description : `Descriptions:
      Brilliant 11-inch Liquid Retina display with ProMotion, True Tone, and P3 wide color
      M2 chip with 8-core CPU and 10-core GPU
      12MP Wide camera, 10MP Ultra Wide back camera, and LiDAR Scanner for immersive AR
      12MP Ultra Wide front camera with Center Stage
      Stay connected with ultrafast Wi-Fi 6E.`
    },
    {
      id: "17",
      Product: "https://m.media-amazon.com/images/I/618M+ksuptL._AC_UY218_.jpg",
      Name : "Lexgion MaxBook",
      Category: "all,laptops",
      price : "PRICE = ₹89,999",
      Description : `Descriptions:
      Processor: 11th Gen Intel Tiger Lake Core i5-11320H processor| Speed: 3.1 GHz(base) - 4.4 GHz(max) | 4 cores | 8 Threads | 8 MB Cache
      Display: 35.56 centimeters IPS QHD+ resolution (2560x1600)| 300 nits brightness |16:10 aspect ratio, 100% sRGB,215 PPI, 1000:1 contrast ratio | Anti Glare | TUV low Blue light
      Memory & Storage: 16GB DDR4 3200 MHz | 512GB PCIe NVMe M.2 SSD.`
    },
    {
      id: "8",
      Product: "https://m.media-amazon.com/images/I/61SpA599GgL._AC_UY218_.jpg",
      Name : "IQoo Z6",
      Category: "all,mobiles",
      price : "PRICE = ₹35,989",
      Description : `Descriptions:
      Display: 16.56cm HD+ Scratch resistant display
      Processor: MediaTek Helio A22 processor; up to 2.0GHz
      Camera: 8MP Dual camera | 5MP Front camera
      Memory, Storage & SIM: 2GB LPDDR4x RAM | 32GB storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)
      Battery: 5000 mAh large battery with 10W in-box charger.`
    },
    {
      id: "9",
      Product: "https://m.media-amazon.com/images/I/8104evx11QL._AC_UY218_.jpg",
      Name : "Oppo A78",
      Category: "all,mobiles",
      price : "PRICE = ₹27,999",
      Description : `Descriptions:
      Display: 16.56cm HD+ Scratch resistant display
      Processor: MediaTek Helio A22 processor; up to 2.0GHz
      Camera: 8MP Dual camera | 5MP Front camera
      Memory, Storage & SIM: 2GB LPDDR4x RAM | 32GB storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)
      Battery: 5000 mAh large battery with 10W in-box charger.`
    },
    {
      id: "18",
      Product: "https://m.media-amazon.com/images/I/71b8lYXqorL._AC_UY218_.jpg",
      Name : "Hp T-BU29785",
      Category: "all,laptops",
      price : "PRICE = ₹75,000",
      Description : `Descriptions:
      High Performance :Intel Core i5 1135G7 Processor with Intel Iris Xe Graphics
      Internal Specifications:8 GB DDR4 SDRAM support: Up to 32 GB
      Display: 14" Full HD 1920 x 1080 resolution Antiglare LED backlit TFT LCD, 16:9 aspect ratio
      Storage: 512 GB SSD, M.2 Gen 3 PCIe, Various Connectivity Options : HDMI, USB 3.2, Gen 1, Type A & C ports, Fast connectivity through Gigabit LAN
      Othe Special Features: Camera Shutter, USB 3.2 Reversible Type-C Connector, 1.49 KG.`
    },
    {
      id: "28",
      Product: "https://m.media-amazon.com/images/I/91veRYPjpeL._AC_UY218_.jpg",
      Name : "Samsung Tab A7",
      Category: "all,tablets",
      price : "PRICE = ₹18,999",
      Description : `Descriptions:
      27.94 cm (11 inch) Cinematic Display, 2560x1600,276ppi,LTPS TFT Screen With 120Hz Refresh Rate
      Android 12, Quad speakers with Dolby Atmos, Powerful Snapdragon 8th Gen Chipset
      13/6MP (Dual) + Flash Rear Camera ,12MP (Ultra Wide) Front Camera.`
    },
    {
      id: "39",
      Product: "https://m.media-amazon.com/images/I/51v35xHUkIL._AC_UL320_.jpg",
      Name : "Zebronic Loud",
      Category: "all,headphones",
      price : "PRICE = ₹2,500",
      Description : `Descriptions:
      With 40mm Drivers get ready to immerse in HD auditory experience with super extra bass to get the day going
      Plug into your rhythm with style via the wireless Bluetooth headset and carry the vibe wherever you go
      Stay immersed into Nirvana for extended durations with a playtime of up to 8 hours.`
    },
    {
      id: "19",
      Product: "https://m.media-amazon.com/images/I/61y-dK-6VhL._AC_UL320_.jpg",
      Name : "Hp TU3475",
      Category: "all,laptops",
      price : "PRICE = ₹69,999",
      Description : `Descriptions:
      High Performance :Intel Core i5 1135G7 Processor with Intel Iris Xe Graphics
      Internal Specifications:8 GB DDR4 SDRAM support: Up to 32 GB
      Display: 14" Full HD 1920 x 1080 resolution Antiglare LED backlit TFT LCD, 16:9 aspect ratio
      Storage: 512 GB SSD, M.2 Gen 3 PCIe, Various Connectivity Options : HDMI, USB 3.2, Gen 1, Type A & C ports, Fast connectivity through Gigabit LAN
      Othe Special Features: Camera Shutter, USB 3.2 Reversible Type-C Connector, 1.49 KG.`
    },
    {
      id: "40",
      Product: "https://m.media-amazon.com/images/I/61leGjTDm0L._AC_UY218_.jpg",
      Name : "Boat 9000",
      Category: "all,headphones",
      price : "PRICE = ₹4,899",
      Description : `Descriptions:
      With 40mm Drivers get ready to immerse in HD auditory experience with super extra bass to get the day going
      Plug into your rhythm with style via the wireless Bluetooth headset and carry the vibe wherever you go
      Stay immersed into Nirvana for extended durations with a playtime of up to 8 hours
      Its lightweight and ergonomic design offers the comfort and ease while you listen to your favourite artists and have fun.`
    },
    {
      id: "29",
      Product: "https://m.media-amazon.com/images/I/51ZlTi5UKgL._AC_UY218_.jpg",
      Name : "Lenova Tab2",
      Category: "all,tablets",
      price : "PRICE = ₹20,000",
      Description : `Descriptions:
      27.94 cm (11 inch) Cinematic Display, 2560x1600,276ppi,LTPS TFT Screen With 120Hz Refresh Rate
      Android 12, Quad speakers with Dolby Atmos, Powerful Snapdragon 8th Gen Chipset
      13/6MP (Dual) + Flash Rear Camera ,12MP (Ultra Wide) Front Camera.`
    },
    {
      id: "10",
      Product: "https://m.media-amazon.com/images/I/61BGE6iu4AL._AC_UY218_.jpg",
      Name : "IPhone 13",
      Category: "all,mobiles",
      price : "PRICE = ₹89,999",
      Description : `Descriptions:
      15.40 cm (6.1-inch) Super Retina XDR display
       Advanced camera system for better photos in any light
       Cinematic mode now in 4K Dolby Vision up to 30 fps
       Action mode for smooth, steady, handheld videos
       Vital safety technology — Crash Detection calls for help when you can't
       All-day battery life and up to 20 hours of video playback
       Industry-leading durability features with Ceramic Shield and water resistance.`
    },
    {
      id: "20",
      Product: "https://m.media-amazon.com/images/I/91d75JiCH9L._AC_UY218_.jpg",
      Name : "Hp",
      Category: "all,laptops",
      price : "PRICE = ₹56,999",
      Description : `Descriptions:
      Internal Specifications:8 GB DDR4 SDRAM support: Up to 32 GB
      Display: 14" Full HD 1920 x 1080 resolution Antiglare LED backlit TFT LCD, 16:9 aspect ratio
      Storage: 512 GB SSD, M.2 Gen 3 PCIe, Various Connectivity Options : HDMI, USB 3.2, Gen 1, Type A & C ports, Fast connectivity through Gigabit LAN
      Othe Special Features: Camera Shutter, USB 3.2 Reversible Type-C Connector, 1.49 KG.`
    },
    {
      id: "41",
      Product: "https://m.media-amazon.com/images/I/716Il5U5F4L._AC_UY218_.jpg",
      Name : "Info 2",
      Category: "all,headphones",
      price : "PRICE = ₹599",
      Description : `Descriptions:
      With 40mm Drivers get ready to immerse in HD auditory experience with super extra bass to get the day going
      Plug into your rhythm with style via the wireless Bluetooth headset and carry the vibe wherever you go
      Stay immersed into Nirvana for extended durations with a playtime of up to 8 hours.`
    },
    {
      id: "30",
      Product: "https://m.media-amazon.com/images/I/81Vs371KLML._AC_UY218_.jpg",
      Name : "Samsung Tab 5",
      Category: "all,tablets",
      price : "PRICE = ₹35,000",
      Description : `Descriptions:
      27.94 cm (11 inch) Cinematic Display, 2560x1600,276ppi,LTPS TFT Screen With 120Hz Refresh Rate
      Android 12, Quad speakers with Dolby Atmos, Powerful Snapdragon 8th Gen Chipset
      13/6MP (Dual) + Flash Rear Camera ,12MP (Ultra Wide) Front Camera.`
    },
    {
      id: "42",
      Product: "https://m.media-amazon.com/images/I/61HBpQuLjVL._AC_UY218_.jpg",
      Name : "Zebronic Mega",
      Category: "all,headphones",
      price : "PRICE = ₹1,600",
      Description : `Descriptions:
      With 40mm Drivers get ready to immerse in HD auditory experience with super extra bass to get the day going
      Plug into your rhythm with style via the wireless Bluetooth headset and carry the vibe wherever you go
      Stay immersed into Nirvana for extended durations with a playtime of up to 8 hours
      Its lightweight and ergonomic design offers the comfort.`
    },
  ]

  export default Products;
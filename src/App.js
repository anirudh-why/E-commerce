
import './App.css';
import Card from './Components/Card';
import Footer from './Components/Footer';
import NAV_BAR from './Components/Navbar';

function App() {
  return (
    <div >
      <NAV_BAR />
      <main>
        <div className='select-btn'>
          <button class="sell-btn">Sell</button>
          <button class="wishlist-btn">Wishlist</button>
        </div>
        <div class="product-cards">

          <Card val={"1"} title={"Infinix Inbook Y1 Plus"} price={"₹25,990"} describe={" Intel Core i5 10th Gen 1035G1 - (8 GB/512 GB SSD/Windows 11 Home) XL28 Thin and Light Laptop  (15.6 inch, Blue, 1.76 kg)"} img={"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/u/u/k/-original-imagmxuravjcmdwu.jpeg?q=70"} />
          <Card val="2" title={"MSI GF63 "} price={"₹41,990"} describe={"Intel Core i5 11th Gen 11260H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX 1650/60 Hz) GF63 Thin 11SC-1494IN Gaming Laptop  (15.6 Inch, Black, 1.86 Kg)"} img={"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/b/r/k/-original-imagsz5x5x3vkt8c.jpeg?q=70"} />
          <Card val="3" title={"ASUS Vivobook 15"} price={"₹41,490"} describe={"Intel Core i3 12th Gen i3-1220P - (8 GB/512 GB SSD/Windows 11 Home) X1502ZA-EJ385WS Thin and Light Laptop  (15.6 inch, Quiet Blue, 1.7 kg, With MS Office)"} img={"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/z/e/b/asus-vivobook-15-laptop-asus-original-imagt5yyzykayggk.jpeg?q=70"} />
          <Card val="4" title={"Apple iPhone 14"} price={"₹56,999"} describe={"128 GB ROM,15.49 cm (6.1 inch) Super Retina XDR Display, 12MP + 12MP | 12MP Front Camera,A15 Bionic Chip, 6 Core Processor Processor"} img={"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70"} />
          <Card val="5" title={"MOTOROLA g24 Power"} price={"₹7,999"} describe={"4 GB RAM | 128 GB ROM | Expandable Upto 1 TB,16.76 cm (6.6 inch) HD+ Display,50MP + 2MP | 16MP Front Camera,6000 mAh Battery,Helio G85 Processor"} img={"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/w/j/g24-pb1c0000in-motorola-original-imagxm3afhhxpqz9.jpeg?q=70"} />
          <Card val="6" title={"Infinix SMART 8"} price={"₹6,999"} describe={"4 GB RAM | 64 GB ROM | Expandable Upto 2 TB,16.76 cm (6.6 inch) HD+ Display,50MP + AI Lens | 8MP Front Camera,5000 mAh Battery,Helio G36 Processor"} img={"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/v/p/-original-imagxsc4nthcs2zk.jpeg?q=70" } />
          <Card val="7" title={"SAMSUNG Galaxy F14"} price={"₹9,490"} describe={"4 GB RAM | 128 GB ROM | Expandable Upto 1 TB,16.76 cm (6.6 inch) Full HD+ Display,50MP + 2MP | 13MP Front Camera,6000 mAh Battery,Exynos 1330, Octa Core Processor"} img={"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/c/x/-original-imagtyxdm82fsv6m.jpeg?q=70"} />
          <Card val="8" title={"HP 15s Core i5 12th Gen"} price={"₹49990"} describe={"(16GB RAM/512GB SSD/FHD/MS Office 21 /Backlit Keyboard /15.6-inch (39.6 cm)/FHD/Windows 11/Silver/1.69 kg) fy5009TU Laptop"} img={"https://m.media-amazon.com/images/I/61TIgpyjxPL._SL1000_.jpg"} />
          <Card val="9" title={"ASUS Vivobook 14"} price={"₹30990"} describe={"8 GB RAM/512GB SSD/Win11/Office 2021/Fingerprint/42WHr /Blue/1.40 kg"} img={"https://m.media-amazon.com/images/I/61BcVnCTClL._SL1500_.jpg"} />
          <Card val="10" title={"boAt Airdopes 800"} price={"₹1498"} describe={"True Wireless in Ear Ear Buds w/Dolby Audio, Adaptive EQ by Mimi, 40 Hours Playback, 4 Mics w/AI-ENx™, in-Ear Detection & Hearables App Support"} img={"https://m.media-amazon.com/images/I/71cfqGWqgoL._SL1500_.jpg"} />
          <Card val="11" title={"Noise Pure Pods"} price={"₹2499"} describe={"Wireless Open Ear Earbuds with AirWave™ Technology,Up-to 80H Playtime,Quad Mic with ENC,16mm Neodymium Dynamic Driver,Detachable Pure Band,BTv5.3"} img={"https://m.media-amazon.com/images/I/61IKUYZYfrL._SL1500_.jpg"} />
          <Card val="12" title={"OnePlus Nord Buds"} price={"₹1599"} describe={"True Wireless in Ear Earbuds with Mic, 12.4mm Drivers, Playback:Upto 38hr case,4-Mic Design, IP55 Rating "} img={"https://m.media-amazon.com/images/I/51oMWaW7tKL._SL1500_.jpg"} />



        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

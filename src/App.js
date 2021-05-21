import React from 'react';
import './App.css';
import './Product';
import Button from './Button';
import Product from './Product';
import tas1 from './assets/bag_1.png';
import tas2 from './assets/bag_2.png';
import tas3 from './assets/bag_3.png';
import tas4 from './assets/bag_4.png';
import Tile from './Tile';
import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';





function App() {
  return (
      <>
      <nav>
        <Button text={"to the collection"}
        />
          <Button text={"shop all bags"}
          />
          <Button text={"pre-orders"}
                  disabled={true}/>



      </nav>
        <h1>Handbags & Purses</h1>
          <main>
                  <Product span={"Best seller"}
                           title={"The Handybag"}
                           image={tas1}
                           prijs={"€400.-"}
                           />
                  <Product span={"Best seller"}
                           title={"The stylish bag"}
                           image={tas2}
                           prijs={"€250.-"}
                           />
                  <Product span={"Best seller"}
                             title={"The simple bag"}
                             image={tas3}
                             prijs={"€300.-"}
                             />
                  <Product span={"Best seller"}
                           title={"The trendy bag"}
                           image={tas4}
                           prijs={"€150.-"}
                           />

          </main>

          <footer>
              <Tile
                  title={"The Brand"}
                  text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus."}
                  />
                  <Tile
                      image={brand}
                      />
                  <Tile
                      image={ourStory}
                      />
                  <Tile
                      title={"Our story"}
                      text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt."}
                      />
          </footer>
      </>
  );
}

export default App;



import React from 'react';
import './App.css';
import ReactPlayer from 'react-player';
import Banner from './components/Banner';
import Nav from './components/Nav';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Banner />
        <h1 className="Trending">Trending Now</h1>
        <header className="App-header">
          <ReactPlayer url="https://www.youtube.com/watch?v=3hNOorEAyFk" controls={true} />
        </header>


        <h1>NBA Hightlights!</h1>
        <header className="App-Highlights" >
          <a href="https://www.youtube.com/watch?v=AmwTYudvE80">
            <img className="highlight1" src="https://i.ytimg.com/vi/AmwTYudvE80/hqdefault.jpg" alt="Heat vs Lakers" />
          </a>
          <a href="https://www.youtube.com/watch?v=8e7K5M7J-3o">
            <img className="highlight2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYHqCz4Nc0e52X69Y7O5fY7GVRf5x0wgvHcA&usqp=CAU" alt="Celtics vs Heat" />
          </a>
          <a href="https://www.youtube.com/watch?v=SiUUTejzUyk">
            <img className="highlight3" src="https://theglobalherald.com/wp-content/uploads/2020/09/E92ZGVMpPqQ.jpg" alt="Lakers vs Nuggets" />
          </a>
          <a href="https://www.youtube.com/watch?v=tS2UvRyuaxA">
            <img className="highlight4" src="https://i.imgur.com/wL1gaQf.png" alt="Raptors vs Boston" />
          </a>
          <a href="https://www.youtube.com/watch?v=tHZDLy-Ubrw">
            <img className="highlight5" src="https://i.ytimg.com/vi/tHZDLy-Ubrw/maxresdefault.jpg" />
          </a>
        </header>

        <h1>Dunk Contest</h1>
        <header className="App-DunkContest">
          <a href="https://youtu.be/CZFQPupSEnk">
            <img className="dunk1" src="https://i.ytimg.com/vi/L3qJFjlDvKY/hqdefault.jpg" />
          </a>

          <a href="https://youtu.be/wHjZP18CS7c">
            <img className="dunk2" src="https://i.pinimg.com/originals/eb/1c/cd/eb1ccde18f5cd62afa4940875a2f3bcf.jpg" />
          </a>
          <a href="https://youtu.be/BsL7pjxko7Q">
            <img className="dunk3" src="https://twt-thumbs.washtimes.com/media/image/2020/02/15/All_Star_Saturday_Basketball_08647.jpg-cb8d9_c0-145-3469-2167_s561x327.jpg?9c7e1c6b68b8c628049175f9dedb7d642bc57eb1" />
          </a>
          <a href="https://youtu.be/-Y8WK0Bfs1w">
            <img className="dunk4" src="https://i.ytimg.com/vi/z195mTOv1Pg/maxresdefault.jpg" />
          </a>
          <a href="https://youtu.be/UqVibdD3UqA">
            <img className="dunk5" src="https://i.imgur.com/NnCLS4L.jpg" />
          </a>
          <a href="https://youtu.be/mny1kAxF2zQ">
            <img className="dunk6" src="https://i.imgur.com/C6pTgvY.jpg" />
          </a>
        </header>
        <h1>Classic Games</h1>
        <header className="App-ClassicGames">
          <a href="https://youtu.be/2nn-umdCxXo">
            <img className="classic1" src="https://i.imgur.com/jzClbt5.jpg" />
          </a>
          <a href="https://youtu.be/H_PTOESEQQI">
            <img className="classic2" src="https://i.ytimg.com/vi/H_PTOESEQQI/maxresdefault.jpg" />
          </a>
          <a href="https://youtu.be/60N0x6dgFxs">
            <img className="classic3" src="https://i.imgur.com/cMmrWO5.jpg" />
          </a>
          <a href="https://youtu.be/8Ap3jYl0nAA">
            <img className="classic4" src="https://fivethirtyeight.com/wp-content/uploads/2019/05/GettyImages-1143370835-4x3.jpg?w=575" />
          </a>
          <a href="https://youtu.be/lO2yOETR2jQ">
            <img className="classic5" src="https://i.ytimg.com/vi/lO2yOETR2jQ/maxresdefault.jpg " />
          </a>

        </header> <br /><br />

      

      </div>
    )
  }
}



export default App;

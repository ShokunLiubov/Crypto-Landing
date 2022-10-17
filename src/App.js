import React, { useState } from 'react';
import './App.css';
import './App_media.css';

const App = () => {

  let [openMenu, setOpenMenu] = useState(false)

  const activeMenu = () => {
    setOpenMenu(true)
  }

  const deActiveMenu = () => {
    setOpenMenu(false)
  }

  const availableScreenWidth = window.screen.availWidth > 992
  let HTMLMenu = ``
  if (openMenu || availableScreenWidth) {
    HTMLMenu = <nav className='menu'>
  <a href="#">Activities</a>
  <a href="#">Technology</a>
  <a href="#">R&D</a>
  <a href="#">Community</a>
  <button className='button_career'>Career
    <div className='button_arrowLeft'></div>
    <div className='button_arrowRight'></div>
  </button>
  </nav>
  }

  return (
    <div className='main_background'>
      <div className='top_line'>
        <a className='logo'>C</a>
    {HTMLMenu}
        {!openMenu &&
          <span className='burger_menu' onClick={() => { activeMenu() }}></span>}

        {openMenu &&
          <span className='close_menu' onClick={() => { deActiveMenu() }}></span>}
      </div>


      <header className='header_img'>
        <div className='header_body'>
          <div className='header_title'>
            <h2>crypto trading</h2>
            <h5>Engineers Meet
              <span className='gradient'> Traders __</span>
            </h5>
            <p>Advanced crypto algorithmic trading and efficient
              cross-chain execution, at scale.</p>
          </div>

          <div className='header_plan'>
            <div className='top_block'>
              <div className='angle_arrow'></div>
              <div className='first_block block'>
                <span>Second Step</span>
              </div>
              <div className='straight_arrow_start'></div>
              <hr className='straight_arrow' />
              <div className='second_block block'>
                <span>Third Step</span>
              </div>
            </div>

            <div className='middle_block'>

              <div className='third_block block'>
                <span>First Step</span>
              </div>

              <div className='solid_arrow_start'></div>
              <hr className='solid_arrow' />
              <div className='fourth_block square'>
                <span>Trading</span>
              </div>
              <div className='angle_middle'></div>
            </div>

            <div className='bottom_block'>

              <div className='branch_arrows'>
                <div className='branch_start'></div>
                <div className='branch_arrow'></div>
              </div>
              <div className='circles'>
                <div className='block circle circle_left'>
                  <span>Earning</span>
                </div>
                <div className='block circle circle_right'>
                  <span>Staking</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='button_more'><button>Learn More
          <span className='button_arrow'></span>
        </button></div>
      </header>


      <div className='mouse_block'>
        <span className='mouse'></span>
      </div>


      <div className='sections_bcg'>
        <section className='section_1'>

          <div className='title_section'>
            <h1>about us</h1>

            <h4>Global technologies</h4>
          </div>
          <div className='section_1_body'>
            <div className='diagram'>
              <span className='first_line'></span>
              <span className='second_line'></span>
              <span className='third_line'></span>
              <span className='fourth_line'></span>
              <span className='fifth_line'></span>
              <span className='sixth_line'></span>

              <div className='number_lines'>
                <span>10</span>
                <span>20<hr /></span>

                <span>30<hr /></span>
                <span>40<hr /></span>
              </div>
            </div>

            <div className='description'>
              <h3>Level 1</h3>
              <div className='description_top'>
                <span className='triangle_top'></span>
                <p>Deploy a multi-legged futures strategy by simultaneously placing orders to buy and sell from the same order ticket.</p>
              </div>

              <div className='description_bottom'>
                <span className='triangle_bottom'></span>
                <p>Place and manage orders based on the Level 2 order book, which provides a live display of all bids and offers waiting to be executed.</p>
              </div>
              <button>Start Now</button>
            </div>
          </div>
        </section>

        <section className='section_2'>
          <div className='info_item'>
            <div className='block_item'>
              <div className='info_item__left'>
                <div className='block_down'>
                  <span className='dark_block dark_left'>Artificial Intelligence</span>
                  <span className='dark_block dark_left__middle'>Storage Networks</span>
                </div>

                <div><span className='dark_block dark_left dark_left__up'>P2P Networks</span></div>

              </div>

              <div className='info_item__middle'>
                <div className='dark_block dark_middle middle_line'><span>Public Data</span></div>

                <span className='dark_block dark_middle middle_line__bottom'>Encrypted Private Data *</span>
              </div>
            </div>
            <div className='info_item__right'>

              <div className='right_block'>
                <div className='item_title'>
                  <img src="./../image/icon-inItem.svg" />
                  <p>Easy to use digital service and exclusive personal service for our active traders</p>
                </div>
                <div className='right_up'>
                  <span className='dark_block dark_right right_line'>Indexing</span>
                  <span className='dark_block dark_right right_line__bottom'>API</span>
                </div>
              </div>


              <div className='out_block_arrow ob_left'></div>
              <div className='out_block_arrow ob_right'></div>
              <span className='out_block'>Consumers</span>


            </div>
          </div>

          <div className='s2_title'>
            <h4>The future <span className='s2_gray'>of</span>
              Cryptocurrency trading <span className='gradient'>platform</span></h4>


            <p>Take advantage of time and sales, futures spread orders and depth trader — plus, trade directly from charts.</p>
            <a href="#">Learn more</a>
          </div>

        </section>

        <section className='section_3'>
          <div className='card_left card'>
            <div className='left_img'>

            </div>
            <div className='l_title'>
              <h1>Spot & Margin</h1>
              <h3>Trade
                <span className='gradient'>200+</span>
                pairs with up  to 10x leverage</h3>

            </div>
            <a href="#">Learn more</a>

          </div>

          <div className='cards_right'>
            <div className='cards_top'>
              <div className='top_left card'>
                <h1>Derivatives</h1>
                <h3>40+ quarterly <br /> futures and <br /> contracts</h3>
                <a href="#">Learn more</a>
              </div>
              <div className='top_right card'>
                <h1>Trading Arena</h1>
                <h3>Prize pools <br /> worth up to <br /> USD 1,000,000</h3>
                <a href="#">Learn more</a>
              </div>
            </div>
            <div className='card_bottom card'>
              <div className='b_title'>
                <h1>mobile app</h1>
                <h3>Trade anytime, <br />anywhere</h3>
                <a className='bottom_link' href="#">Learn more</a>
              </div>
              <div className='bottom_img'></div>
            </div>
          </div>

        </section>
      </div>

    </div>
  );
}

export default App;

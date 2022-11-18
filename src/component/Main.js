import React from 'react';
import './Main.css';
import './Items.css';
import './Iteams2.css';
import './Bottomnav.css';
import './Aboutpara.css';


import p from "./../Webimage/My project-1.png";
import i1 from "./../Webimage/1.png"
import a1 from "./../Webimage/2.png"
import b1 from "./../Webimage/3.png"
import c1 from "./../Webimage/4.png"
import d1 from "./../Webimage/5.png"
import e1 from "./../Webimage/6.png"
import f1 from "./../Webimage/7.png"
import g1 from "./../Webimage/8.png"
import h1 from "./../Webimage/9.png"
import j1 from "./../Webimage/10.png"
import l1 from "./../Webimage/12.png"
import x from "./../Webimage/13.png"
import x1 from "./../Webimage/14.png"
import y from "./../Webimage/15.png"
import y1 from "./../Webimage/16.png"
import z from "./../Webimage/17.png"
import z1 from "./../Webimage/18.png"
import x2 from "./../Webimage/19.png"
import x3 from "./../Webimage/20.png"
import x4 from "./../Webimage/21.png"
import x5 from "./../Webimage/22.png"
import x6 from "./../Webimage/23.png"




import Topnavbar from './Topnavbar';
import Secondnav from './Secondnav';
import Images from './Images';
import Items from './Items';
import Bottomnav from './Bottomnav';



function App() {
  return (
    <div className="Container">

        <Topnavbar name=" My account " />
        <Secondnav/>
        <Images/>
          
        <Items topheading='Electronics' itemName="Laptop" itemprice="From Rs 80"  itemName2="Laptop" itemprice2="From Rs 8000"  itemName3="Laptop" itemprice3="From Rs 8000"  itemName4="Laptop" itemprice4="From Rs 8000"  itemName5="Laptop" itemprice5="From Rs 8000"  itemName6="Laptop" itemprice6="From Rs 8000"  itemName7="Laptop" itemprice7="From Rs 8000"   brandName =" Dell"                 p={p}  k={h1} j={j1}  b={b1} c={c1}  h={h1} seven={x} Pages="IteamPage" />
        <Items topheading='Beauty, Food, Toys & more' itemName="Laptop" itemprice="From Rs 8000"  itemName2="Laptop" itemprice2="From Rs 8000"  itemName3="Laptop" itemprice3="From Rs 8000"  itemName4="Laptop" itemprice4="From Rs 8000"  itemName5="Laptop" itemprice5="From Rs 8000"  itemName6="Laptop" itemprice6="From Rs 8000"  itemName7="Laptop" itemprice7="From Rs 8000"  brandName =" Dell"       p={i1} k={d1} j={f1}  b={g1} c={e1}  h={l1} seven={x1} Pages="IteamPage2"/>
        <Items topheading='Big Savings on your favourites' itemName="Laptop" itemprice="From Rs 8000"  itemName2="Laptop" itemprice2="From Rs 8000"  itemName3="Laptop" itemprice3="From Rs 8000"  itemName4="Laptop" itemprice4="From Rs 8000"  itemName5="Laptop" itemprice5="From Rs 8000"  itemName6="Laptop" itemprice6="From Rs 8000"  itemName7="Laptop" itemprice7="From Rs 8000" brandName =" Dell"    p={p}  k={h1} j={j1}  b={b1} c={c1}  h={h1} seven={x4} Pages="IteamPage3" />
        <Items topheading='Sports, Healthcare & more' itemName="Laptop" itemprice="From Rs 8000"  itemName2="Laptop" itemprice2="From Rs 8000"  itemName3="Laptop" itemprice3="From Rs 8000"  itemName4="Laptop" itemprice4="From Rs 8000"  itemName5="Laptop" itemprice5="From Rs 8000"  itemName6="Laptop" itemprice6="From Rs 8000"  itemName7="Laptop" itemprice7="From Rs 8000"   brandName =" Dell"       p={y}  k={y1} j={z}  b={z1} c={c1}  h={h1} seven={x2}  Pages="IteamPage4"/>
        <Items topheading='Home & Kitchen Essentials' itemName="Laptop" itemprice="From Rs 8000"  itemName2="Laptop" itemprice2="From Rs 8000"  itemName3="Laptop" itemprice3="From Rs 8000"  itemName4="Laptop" itemprice4="From Rs 8000"  itemName5="Laptop" itemprice5="From Rs 8000"  itemName6="Laptop" itemprice6="From Rs 8000"  itemName7="Laptop" itemprice7="From Rs 8000"  brandName =" Dell"       p={p}  k={y1} j={a1}  b={b1} c={c1}  h={h1} seven={x}  Pages="IteamPage5"/>
        <Items topheading='Check Out More Collections' itemName="Laptop" itemprice="From Rs 8000"  itemName2="Laptop" itemprice2="From Rs 8000"  itemName3="Laptop" itemprice3="From Rs 8000"  itemName4="Laptop" itemprice4="From Rs 8000"  itemName5="Laptop" itemprice5="From Rs 8000"  itemName6="Laptop" itemprice6="From Rs 8000"  itemName7="Laptop" itemprice7="From Rs 8000"  brandName =" Dell"      p={x1}  k={x2} j={x3}  b={x5} c={x6}  h={x4} seven={x}  Pages="IteamPage6"/>
        
        <Bottomnav/>


    </div>
  );
}

export default App;

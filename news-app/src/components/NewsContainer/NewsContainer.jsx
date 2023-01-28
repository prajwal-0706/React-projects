import './NewsContainer.css';
import React from 'react';
import pic from '../../images/pic.png'
import axios from 'axios';


function NewsContainer(){
  let Arr;
  let title;
  let des;
  let imgUrl;
  let link;

  axios.get('https://newsdata.io/api/1/news?apikey=pub_16053755d73e6039b4015800fe9f49bc47147&language=en')
    .then(response => {
      Arr = response.data.results;

      for(let i = 0 ; i < 5 ; i++){
        console.log(Arr[i]);
        title = response.data.results[i].title;
        des = response.data.results[i].content;
        imgUrl = response.data.results[i].image_url === null ? pic : response.data.results[i].image_url;        
        link = response.data.results[i].link ;
        document.getElementById('title' + i).textContent = title;
        document.getElementById('des'  + i).textContent = title;
        document.getElementById('img' + i).src = imgUrl;
        document.getElementById('btn'+i).href = link;
        document.querySelectorAll('.n-news').forEach((ele) =>{
            ele.style.opacity = '1'
        })

      } 

    })
    .catch(err => {
      console.error(err);
    })

  
  return(
    <div className="n-container">
      <News1 />  
      <News2 />  
      <News3 />  
      <News4 />  
      <News5 />  
    </div>
  )
}

function News1(){
  return(
      <div className="n-news" >
          <img src = {pic}  id='img0'  alt="" style={{width : '170px', height :"170px"}}/>
          <div className="heading">
              <h1 id='title0' ></h1>
          </div>
          <div className="description" id='des0'>
              <p></p>
          </div>
          <div className="btn">
            <a href="#" aria-label='label-1' id='btn0' target='_blank'>
                <button>
                    Learn More >
                </button>
            </a>
          </div>
      </div>
  )
}

function News2(){
  return(
      <div className="n-news" id='News1'>
          <img src = {pic} id='img1' alt="" style={{width : '170px', height :"170px"}}/>
          <div className="heading">
              <h1 id='title1'></h1>
          </div>
          <div className="description" id='des1'>
              <p></p>
          </div>
          <div className="btn">
            <a href="#" aria-label='label-1' id='btn1' target='_blank'>
                <button>
                    Learn More >
                </button>
            </a>
          </div>
      </div>
  )
}

function News3(){
  return(
      <div className="n-news" id='News2'>
          <img src = {pic} alt="" id='img2' style={{width : '170px', height :"170px"}}/>
          <div className="heading">
              <h1 id='title2'></h1>
          </div>
          <div className="description" id='des2'>
              <p></p>
          </div>
          <div className="btn">
            <a href="#" aria-label='label-1' id='btn2' target='_blank'>
                <button>
                    Learn More >
                </button>
            </a>
          </div>
      </div>
  )
}
function News4(){
  return(
      <div className="n-news" id='News3' >
          <img src = {pic} alt="" id='img3' style={{width : '170px', height :"170px"}}/>
          <div className="heading">
              <h1 id='title3'></h1>
          </div>
          <div className="description" id='des3'>
              <p></p>
          </div>
          <div className="btn">
            <a href="#" aria-label='label-1' id='btn3' target='_blank'>
                <button>
                    Learn More >
                </button>
            </a>
          </div>
      </div>
  )
}
function News5(){
  return(
      <div className="n-news" id='News4' >
          <img src = {pic} alt="" id='img4' style={{width : '170px', height :"170px"}}/>
          <div className="heading">
              <h1 id='title4'></h1>
          </div>
          <div className="description" id='des4'>
              <p></p>
          </div>
          <div className="btn">
            <a href="#" aria-label='label-1' id='btn4' target='_blank'>
                <button>
                    Learn More >
                </button>
            </a>
          </div>
      </div>
  )
}



export default NewsContainer;